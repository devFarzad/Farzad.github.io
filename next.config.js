module.exports = {
    // Use the assetPrefix setting if your site is hosted on GitHub Pages in a repository
    assetPrefix: process.env.NODE_ENV === 'production' ? '/farzad.github.io/' : '',
  
    // Ensures that files are exported correctly for GitHub Pages
    trailingSlash: true,
    output: 'standalone',
  
    // Other configurations...
  };
  