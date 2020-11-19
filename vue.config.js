module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  publicPath: process.env.NODE_ENV === "development" ? "/" : "/vue/",
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        bypass: function(req, res) {
          if (process.env.MOCK !== "none" && req.path.indexOf("/api") >= 0) {
            const name = req.path
              .split("/api/")[1]
              .split("/")
              .join("_");
            const mock = require(`./mock/${name}`);
            const result = mock(req.method);
            delete require.cache[require.resolve(`./mock/${name}`)];
            res.send(result);
          }
        }
      }
    }
  }
};
