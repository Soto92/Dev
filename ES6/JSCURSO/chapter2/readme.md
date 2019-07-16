Após instalar node, npm ou yarn:
yarn (ou npm) init no projeto;
instalar dependencias: (yarn add ou npm install)
"dependencies": {
    "@babel/cli": "^7.5.0",
    "@babel/core": "^7.5.4",
    "@babel/plugin-proposal-object-rest-spread": "^7.5.4",
    "@babel/preset-env": "^7.5.4",
    "babel-loader": "^8.0.6",
    "webpack": "^4.35.3",
    "webpack-cli": "^3.3.6"
  }
  criar na raiz .babelrc (dentro criar objeto); 
  -preset-env serve para fazer os navegadores entenderem o es6;
  criar index.html, main.js,
criar script dev no pack.json;