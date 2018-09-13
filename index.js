var path = require('path');

module.exports = function (babel, options) {
    return {
        plugins: [
            ['babel-plugin-env-json', {
                replacedModuleName: 'react-native-env-json',
                configDir: options.configDir || path.resolve(__dirname, "../../env/")
            }]
        ]
    }
};