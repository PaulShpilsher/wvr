const path = require("path");
module.exports = {
    entry: "./src/index.tsx",

    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },

    mode: "development",

    devtool: "source-map",

    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx'],
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "awesome-typescript-loader"
            },        
            {
                test: /\.scss$/,
                loaders: [
                  'style-loader',
                  'postcss-loader',
                  'sass-loader',
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                  'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
                  'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
                ],
              },
        ]
    },

    plugins: [
      new CheckerPlugin(),
      new StyleLintPlugin(),
      new HtmlWebpackPlugin({template: 'index.html.ejs',}),
    ],

  performance: {
    hints: false,
  },
};
