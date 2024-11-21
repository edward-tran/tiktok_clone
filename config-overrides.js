const { override, useBabelRc } = require('customize-cra');
module.exports = override(
    // Use .babelrc
    useBabelRc(),
    // Override devServer config
    (config) => {
        if (config.devServer) {
            config.devServer.setupMiddlewares = (middlewares, devServer) => {
                console.log('Custom setupMiddlewares called');
                return middlewares;
            };
        }
        return config;
    },
);
