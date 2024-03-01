const path = require('path')

export function contentSources(bundleDir = 'vendor/karolkrupa/cms-bundle') {
    bundleDir = path.resolve(bundleDir, '.');
    const assetsDir = path.resolve(bundleDir, './assets');

    return  [
        path.resolve(__dirname, './src/js') + '/**/*.{js,vue}',
        path.resolve(__dirname, './src/vue') + '/**/*.{js,vue}',
        bundleDir + "/templates/**/*.twig",
        bundleDir + "/src/**/*.php",
        "node_modules/preline/dist/*.js"
    ]
}