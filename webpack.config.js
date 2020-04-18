const path = require('path');
//const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = (env) => {
  const isProduction = env === 'production'
 // const CSSExtract = new ExtractTextPlugin("style.css");

  console.log('env', env)
  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use:[
            'style-loader', 
            'css-loader',
            'sass-loader'
        ]
      }]
    },
   // plugins:[
   //   CSSExtract
   // ],
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
}
}
