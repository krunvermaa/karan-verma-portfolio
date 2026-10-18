import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig, Plugin } from 'vite';

// Safe local publishing middleware plugin
function localPublishPlugin(): Plugin {
  return {
    name: 'portfolio-studio-local-publish',
    configureServer(server) {
      server.middlewares.use('/api/publish-data', (req, res) => {
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

            const targetPath = path.resolve(__dirname, '../src/data/portfolioData.ts');
            // Write safely with backup
            const currentContent = fs.readFileSync(targetPath, 'utf-8');
            const backupPath = path.resolve(__dirname, '../src/data/portfolioData.backup.ts');
            fs.writeFileSync(backupPath, currentContent, 'utf-8');

            fs.writeFileSync(targetPath, data.codeContent, 'utf-8');

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
              success: true,
              message: 'Successfully synchronized to src/data/portfolioData.ts',
              timestamp: new Date().toISOString()
            }));
          } catch (err: any) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: err.message || 'Server error' }));
          }
        });
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), localPublishPlugin()],
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
  }
});
