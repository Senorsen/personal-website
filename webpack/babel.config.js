
export default {
    cacheDirectory: true,
    presets: ['es2015', 'react'],
    plugins: [
        'transform-runtime',
        'syntax-async-functions',
        'syntax-object-rest-spread',
        'transform-async-to-generator',
        'transform-decorators-legacy',
        'transform-class-properties'
    ]
};
