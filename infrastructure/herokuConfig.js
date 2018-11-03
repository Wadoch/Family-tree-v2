const heroin = require('heroin-js');

const configurator = heroin(process.env.HEROKU_API_TOKEN);

const copyEnvs = [
    'REACT_APP_BFF_URL',
    'REACT_APP_CRYPTO_KEY',
];

const baseEnvs = copyEnvs.reduce((all, current) =>
    ({ ...all, [current]: process.env[current] }), {});

const config = {
    name: 'ps-family-tree',
    config_vars: {
        ...baseEnvs,
    },
};

configurator(config);