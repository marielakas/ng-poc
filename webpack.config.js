const env = process.env.NODE_ENV || 'development';

function buildConfig(env) {
    return require('./webpack/webpack.' + env + '.config.js');
}

module.exports = buildConfig(env === 'production' ? 'prod': 'dev');