# Build and verification

This folder owns the dependency-free Node build, preview server and integrity validation. build.mjs copies only public web files into dist; serve.mjs serves that build with safe MIME types and path handling; verify.mjs checks internal files and site requirements. None needs credentials. Keep the page list aligned with the root HTML routes and GitHub Pages workflow. Run npm run build and npm test after source edits. The development server honours HOST and PORT for the managed preview.
