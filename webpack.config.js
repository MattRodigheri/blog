module.exports = {
  "entry": "./client/src/index.jsx",
  "output": {
      "path": __dirname + "/client/dist",
      "filename": "bundle.js"
  },
  "module": {
      "rules": [
          {
              "test": /\.(js|jsx)$/,
              "exclude": /node_modules/,
              "use": {
                  "loader": "babel-loader",
                  "options": {
                      "presets": [
                          "env",
                          "react"
                      ]
                  }
              }
          },
          {
              "test": /\.css$/,
              "use": [
                  "style-loader",
                  "css-loader"
              ],
          }
      ]
  }
}
