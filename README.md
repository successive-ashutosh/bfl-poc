# BFL-POC

## Vision

The BFL-POC (Proof of Concept) project aims to demonstrate a highly optimized retail website using SolidJS. The project includes two versions of the homepage: a Lite version optimized for low bandwidth and feature phones, and a Rich version optimized for high bandwidth and rich content. The goal is to provide an excellent user experience across different network conditions and device capabilities.

## Accomplishments

- Implemented a Lite version of the homepage with minimal resources, optimized for 2G bandwidth and feature phones.
- Implemented a Rich version of the homepage with high-quality content, optimized for 4G bandwidth.
- Included network speed detection to serve the appropriate version of the homepage.
- Used Gzip compression for faster load times.
- Ensured efficient static file serving and caching.

## Directory Structure
- dist/: Contains the built files for the application.
- src/: Contains the source files for the application.
- .gitignore: Specifies which files and directories to ignore in the repository.
- package.json: Lists the project dependencies and scripts.
- postcss.config.cjs: Configuration for PostCSS with cssnano.
- server.js: Express server configuration for serving the application.
- vite.config.js: Configuration for Vite, the build tool used in this project.

## Setup

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

## Project Commands
- Clone the Repository: git clone git@github.com:successive-ashutosh/bfl-poc.git
- Install dependencies: npm install
- Run in development mode: npm run dev
- Build for production: npm run build
- Serve built application: npm run serve

## Key Features
- **Lite Version:** Designed for 2G networks, minimal resources, and optimized performance.
- **Rich Version:** Designed for 4G networks, high-quality content, and enhanced user experience.
- **Network Speed Detection:** Automatically serve the appropriate version based on the user's network speed.
- **Gzip Compression:** Ensures faster load times by reducing file sizes.
- **Efficient Caching:** Static assets are cached for one year to improve load times for repeat visits.

## Conclusion
The BFL-POC project successfully demonstrates how to build a highly optimized retail website using SolidJS, with a focus on performance and user experience across different network conditions and device capabilities.