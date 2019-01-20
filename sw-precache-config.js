module.exports = {
    staticFileGlobs: [
        'build/static/css/**.css',
        'build/static/js/**.js',
        'build/static/media/**.jpg',
    ],
    swFilePath: './build/service-worker.js',
    stripPrefix: 'build/',
    importScripts: (['./service-worker-custom.js']),
    handleFetch: false,
};