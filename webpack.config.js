const path = require('path');

const HtmlWebpackPlugin    = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin    = require('copy-webpack-plugin');

module.exports = () => {
  return {
    mode     : 'production',
    entry    : {
      data         : './src/js/data.js',
      main         : './src/js/script.js',
      'geira-icons': './src/scss/geira-icons.scss',
      styles       : './src/scss/styles.scss'
    },
    output   : {
      filename: '[name].min.js',
      path    : path.resolve(__dirname, 'dist')
    },
    devtool  : 'source-map',
    resolve  : {
      extensions: ['.js']
    },
    devServer: {
      contentBase: './dist'
    },
    plugins  : [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html',
        chunks  : ['data', 'main', 'geira-icons', 'styles']
      }),
      new HtmlWebpackPlugin({
        filename: 'usage.html',
        template: 'src/usage.html',
        chunks  : ['geira-icons', 'styles']
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: './src/fonts',
            to  : './fonts'
          }
        ]
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: './src/scss/geira-icons.scss',
            to  : './'
          }
        ]
      }),
      new MiniCssExtractPlugin({
        filename     : '[name].min.css',
        chunkFilename: '[id].css'
      })
    ],
    module   : {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use : [
            MiniCssExtractPlugin.loader,
            {
              loader : 'css-loader',
              options: {
                url: false
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
      ]
    }
  };
};
