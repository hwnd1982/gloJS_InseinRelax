const path = require("path"),
  HTMLWebpackPlugin = require("html-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  ImageMinimizerPlugin = require("image-minimizer-webpack-plugin"),
  mode = process.env.NODE_ENV,
  isDev = mode === "development",
  generateFilename = (ext) => (isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`);

module.exports = {
  entry: {
    main: "./index.js",
  },
  output: {
    filename: `./js/${generateFilename("js")}`,
    path: path.resolve(__dirname, "build/admin"),
    assetModuleFilename: "[path][name][hash][ext]",
    environment: {
      arrowFunction: false,
    },
    clean: true,
  },
  mode,
  context: path.resolve(__dirname, "src/admin/"),
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
      minify: {
        collapseWhitespace: !isDev,
      },
    }),
    new HTMLWebpackPlugin({
      filename: "table.html",
      template: "./table.html",
      inject: "head",
      scriptLoading: "blocking",
      minify: {
        collapseWhitespace: !isDev,
      },
    }),
    new MiniCssExtractPlugin({
      filename: `./styles/${generateFilename("css")}`,
    }),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ["pngquant", { quality: [0.3, 0.5], speed: 3, strip: true, dithering: 0.75 }],
          ["gifsicle", { interlaced: false, optimizationLevel: 3 }],
          ["jpegtran", { progressive: true }],
          ["optipng", { optimizationLevel: 5 }],
        ],
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|jepg|svg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "[path][name][ext]",
        },
      },
      {
        test: /\.(woff|woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: "[path][name][ext]",
        },
      },
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
      publicPath: "/serve-public-path-url",
    },
    open: true,
    port: 9000,
    hot: true,
    historyApiFallback: true,
  },
  devtool: isDev && "source-map",
};
