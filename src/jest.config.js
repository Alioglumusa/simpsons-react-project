// Bağlam için: Sorun şu ki, Axios artık Node.js'de çalışmadığında CommonJ'ler yerine
// ES Modülü olarak oluşturulmuş gibi görünüyor. Jest ile ilgili sorun,
// Node'da kod çalıştırmasıdır, ancak uygulama web istemcileri için oluşturulmuştur. Jest'e
// Axios'u dönüştürmesini söylemenin işe yaramasının nedeni budur.

// module.exports = {
//   presets: [
//     [
//       "@babel/preset-env",
//       {
//         targets: {
//           node: "current",
//         },
//       },
//     ],
//     "@babel/preset-react",
//   ],

//   moduleNameMapper: {
//     "^axios$": require.resolve("axios"),
//   },
//   // ...
//   transform: {
//     "^.+\\.jsx?$": "babel-jest", // .js veya .jsx dosyalarını Babel ile işle
//   },
//   // ...
//   preset: "@babel/preset-env", // Jest tarafından kullanılacak Babel preseti
//   // ...
//   transformIgnorePatterns: [
//     "node_modules/(?!(axios)/)", // axios modülünü hariç tutma
//   ],
//   moduleNameMapper: {
//     "^axios$": "<rootDir>/node_modules/axios/dist/axios.min.js",
//   },
// };
