import express from 'express';
import compression from 'compression';
import path from 'path';
import { fileURLToPath } from 'url';

export default class Server {

  constructor() {
    this.app = express();
  }

  get application() {
    return this.app;
  }


  bootstrap() {
    this.initLogger();
    this.initCompress();
    this.setupRoutes();

    return this.app;
  }

  setupRoutes() {
    // Determine the directory name
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    // Serve static files from the dist directory
    this.app.use(express.static(path.join(__dirname, 'dist'), {
      maxAge: '1y',  // Cache static assets for 1 year
      etag: false
    }));

    // Handle SPA (Single Page Application) routing by sending index.html for all other requests
    this.app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  /**
   * Compression of the output
   */
  initCompress() {
    this.app.use(compression());
  }

  /**
  * Middleware to log requests and responses
   */
  initLogger() {
    this.app.use((req, res, next) => {
      const start = Date.now();
      res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`${req.method} ${req.originalUrl} - ${res.statusCode} [${duration}ms]`);
      });
      next();
    });
  }

}
