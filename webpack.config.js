const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { GenerateSW } = require('workbox-webpack-plugin'); // Импорт Workbox

module.exports = {
  // entry: {
  //   main: './src/js/app.js',
  //   'service-worker': './src/service-worker.js', // <-- отдельный бандл SW
  // },

  // Service Worker будет сгенерирован Workbox'ом, поэтому отдельный entry для SW не нужен
  entry: './src/js/app.js', 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js', // даст /service-worker.js в корне dev-сервера
    clean: true,
  },
  devServer: {
    open: true,
    port: 8080, // у вас уже так(было 8082) - это кометарий преподователя
    // static: { directory: path.resolve(__dirname, 'dist') }, // опционально
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: { loader: 'babel-loader' } },
      { test: /\.html$/, use: [{ loader: 'html-loader' }] },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource', // Webpack 5 asset modules
        generator: {
          // filename: 'images/[name][ext]', // Сохранять изображения в папку images
          filename: '[name][ext]', // Сохранять изображения в папку
        },
      },
    ],
  },
  plugins: [
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        // 1) Для /movies — вообще без кеша
        {
          urlPattern: ({url}) =>
            url.origin === 'http://localhost:7070' && url.pathname.startsWith('/movies'),
          handler: 'NetworkOnly',
          options: {
            // можно добавить timeoutSeconds, если нужно
          },
        },
        // // 2) Остальные запросы к вашему API — как и было
        // {
        //   urlPattern: ({url}) => url.origin === 'http://localhost:7070',
        //   handler: 'NetworkFirst',
        //   options: {
        //     cacheName: 'api-cache',
        //     expiration: {
        //       maxEntries: 10,
        //       maxAgeSeconds: 24 * 60 * 60,
        //     },
        //     // по желанию: cacheableResponse: { statuses: [200] }
        //   },
        // },
      ],
    }),

    new HtmlWebPackPlugin({ template: './src/index.html', filename: './index.html' }),
    new MiniCssExtractPlugin({ filename: '[name].css' }), // chunkFilename не нужен здесь

    
    // До 02.10.2025
    // new GenerateSW({
    //   // Параметры Workbox
    //   exclude: [/\/movies$/], // Исключить запрос `/movies`
      
    //   clientsClaim: true, // Заставляет Service Worker немедленно активироваться
    //   skipWaiting: true,  // Пропускает фазу waiting и активируется сразу
   
    //   runtimeCaching: [
    //     {
    //       urlPattern: ({ url }) => url.origin === 'http://localhost:7070', // Ваш API
    //       handler: 'NetworkFirst', // Сначала сеть, потом кэш
    //       options: {
    //         cacheName: 'api-cache',
    //         expiration: {
    //           maxEntries: 10,
    //           maxAgeSeconds: 60 * 60 * 24, // 24 часа
    //         },
    //       },
    //     },
    //     // Другие стратегии кэширования для изображений, шрифтов и т.д.
    //     // {
    //     //   urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
    //     //   handler: 'CacheFirst',
    //     //   options: {
    //     //     cacheName: 'images',
    //     //     expiration: {
    //     //       maxEntries: 50,
    //     //       maxAgeSeconds: 30 * 24 * 60 * 60, // 30 дней
    //     //     },
    //     //   },
    //     // },
    //   ],
    // }),
  ],
  devtool: 'source-map',
};
