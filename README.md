# Commands

make sure you are using node version 16 and npm version 8;

-this is the command to create an expo app with router
```sh
npx create-expo-app@latest -e with-router
```
-the app would be blank and everything would be needed to be created brom scatch.


- couple more usefull libraries
```sh
npm i expo-font axios react-native-dotenv
```

- to run the app
```sh
npm start
```

- if the above command does not run as expected you. And you get the follwing error
#node_modules\expo-router\entry.js: [BABEL]: expo-router/babel is deprecated in favor of babel-preset-expo in SDK 50. (While processing: E:\projects\react-natives\my-expo-native\node_modules\expo-router\babel.js)
-THEN: ## Removed the expo-router/babel from babel.config.js file and it works



- if you want to clear the build cache use --clear
```sh
npx expo start --clear
```

create a folder named app in the root directory
index.js
_layout.js



