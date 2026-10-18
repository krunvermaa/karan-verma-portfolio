import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { execSync } from 'child_process';
import { defineConfig, Plugin } from 'vite';

// Safe Live Publishing Middleware Plugin with Git & Vercel sync
function livePublishPlugin(): Plugin {
  return {
    name: 'portfolio-editor-live-publish',
    configureServer(server) {
      server.middlewares.use('/api/publish', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end(JSON.stringify({ error: 'Method not allowed' }));
          return;
        }

        let body = '';
        req.on('data', (chunk) => {
          body += chunk;
        });

        req.on('end', () => {
          try {
            const data = JSON.parse(body);
            if (!data.codeContent || typeof data.codeContent !== 'string') {
              res.statusCode = 400;
              res.end(JSON.stringify({ error: 'Missing codeContent' }));
              return;
            }

            const repoRoot = path.resolve(__dirname, '..');
            const targetPath = path.resolve(repoRoot, 'src/data/portfolioData.ts');
            const backupPath = path.resolve(repoRoot, 'src/data/portfolioData.backup.ts');

            // 1. Safe backup
            if (fs.existsSync(targetPath)) {
              const currentContent = fs.readFileSync(targetPath, 'utf-8');
              fs.writeFileSync(backupPath, currentContent, 'utf-8');
            }

            // 2. Write new content to portfolioData.ts
            fs.writeFileSync(targetPath, data.codeContent, 'utf-8');

            // 3. Git Commit and Push to trigger live Vercel production deployment
            let commitHash = '';
            let gitSuccess = false;
            let gitMessage = '';

            try {
              execSync('git add src/data/portfolioData.ts', { cwd: repoRoot, stdio: 'pipe' });
              const commitOutput = execSync(
                'git commit -m "chore(portfolio): update content via Visual Editor"',
                { cwd: repoRoot, encoding: 'utf-8' }
              );
              commitHash = execSync('git rev-parse --short HEAD', { cwd: repoRoot, encoding: 'utf-8' }).trim();
              
              // Push to origin main to trigger automated Vercel CI/CD build
              execSync('git push origin main', { cwd: repoRoot, stdio: 'pipe' });
              gitSuccess = true;
              gitMessage = `Committed (${commitHash}) and pushed to origin/main. Live Vercel build triggered.`;
            } catch (gitErr: any) {
              console.warn('Git publish notice:', gitErr.message);
              gitMessage = 'Synchronized locally to src/data/portfolioData.ts. Git push was skipped or offline.';
            }

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(
              JSON.stringify({
                success: true,
                method: gitSuccess ? 'git-vercel-live' : 'server-sync',
                commitHash: commitHash || undefined,
                message: gitMessage,
                liveUrl: 'https://karan-verma-portfolio.vercel.app',
                timestamp: new Date().toISOString(),
              })
            );
          } catch (err: any) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: err.message || 'Server error' }));
          }
        });
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), livePublishPlugin()],
  root: path.resolve(__dirname),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@portfolio': path.resolve(__dirname, '../src'),
    },
  },
  server: {
    port: 3001,
    host: '0.0.0.0',
    strictPort: false,
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
  },
});
