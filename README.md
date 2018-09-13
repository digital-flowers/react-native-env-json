# react-native-env-json

Let you `import` environment based variables as JSON in React Native, don't need any native code integration.

[![npm version](https://img.shields.io/npm/v/react-native-env-json.svg?style=flat-square)](https://www.npmjs.com/package/react-native-env-json)
[![npm downloads](https://img.shields.io/npm/dt/react-native-env-json.svg?style=flat-square)](https://www.npmjs.com/package/react-native-env-json)

## Install

```sh
$ npm install react-native-env-json --save-dev
```

Add the `react-native-env-json` preset to your **.babelrc** file at the project root.

```json
{
  "presets": [
    ...
    "react-native-env-json"
  ]
}
```

If you want to change the path of the env files you can use the configDir option, for example.
```json
{
  "presets": [
    ...
    ["react-native-env-json",{configDir: "/your/config/directory"}]
  ]
}
```

## Usage
In your project root create a directory named **env**,
Add your app configuration in a file named **env/default.json**.
for example:

```json
{
  "api":{
    "endpoint": "http://localhost:8080/",
    "key":123
  },
  "default_locale":"en"
}
```

Now you can import it in your **.js** file.

```js
import { default_locale, api } from 'react-native-env-json'

console.log(default_locale); // en
console.log(api.endpoint); // http://localhost:8080/
```

Now create another json file with your environment name for example **env/production.json**, now add just that value you need to override

```json
    {
      "api":{
          "endpoint": "https://test.com/"
      } 
    }
```

Now you can see in your **.js** file the changes.

```js
import { default_locale, api } from 'react-native-env-json'

console.log(default_locale); // en
console.log(api.endpoint); // "https://test.com/"
```

**Note:** to run your app with "production" env change your scheme to release from xcode or just use: 
```
react-native run-ios --configuration Release
```

## FAQ

### Changes to json file is not updated

Manually edit the file importing `react-native-env-json` by either adding an empty line or whitespace will work.

#### iOS

You can use the **Release** configuration to launch the Simulator. (Only supported in RN v0.39+)

```
react-native run-ios --configuration Release
```

#### Android

1. `Command⌘` + `M` to launch the developer menu in Android emulator.
2. Tap **DevSettings**.
3. Toggle **JS Dev Mode**.

## Contact

[Fareed Alnamrouti](http://github.com/digita-flowers)

## LICENSE

MIT License, see LICENSE file for detail.
