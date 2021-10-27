module.exports = {
    module: {
      rules: [
        {
          test: /\.json$/,
          loader: 'url-loader',
          options: {
             limit: false,
             publicPath: 'assets'
              },
           type: 'javascript/auto'
          },
          
      ],
    },
  };