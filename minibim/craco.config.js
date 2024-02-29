const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@style': path.resolve(__dirname, 'src/assets/scss'),
      '@hook': path.resolve(__dirname, 'src/hook'),
      images: path.resolve(__dirname, 'src/assets/img'),
    },
  },
  style: {
    postcss: {
      mode: 'file',
    },
  },
};
