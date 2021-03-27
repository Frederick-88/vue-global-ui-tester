const path = require("path");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // method of SCSS to use variables globally
        data: `
            @import '~node_modules/global-ui/src/assets/styles/variables.scss';
            @import '~node_modules/global-ui/src/assets/icomoon/variables.scss';
            @import '@/assets/variables.scss';
          `,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/"),
        node_modules: path.resolve("node_modules/"),
      },
    },
  },
};
