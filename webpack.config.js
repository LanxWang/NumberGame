import {resolve} from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin'
const __dirname = resolve()
export default {
  entry: './src/index.js',
  output: {
    path: resolve(__dirname,'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }],
              ['@babel/preset-react', {targets: "default" }]
            ]
          }
        }
      },{
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  mode: 'development',
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    contentBase: resolve(__dirname, "build"),
    filename:'bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
};

