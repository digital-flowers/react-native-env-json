var path = require('path');

module.exports = {
    plugins: [
        [require('babel-plugin-env-json'), {
            replacedModuleName: 'react-native-env-json',
            configDir: path.resolve(__dirname, "../../env/")
        }],
    ]
};
