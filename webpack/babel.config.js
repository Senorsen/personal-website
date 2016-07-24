
export default {
    cacheDirectory: true,
    presets: ['es2015'],
    plugins: [
        'transform-runtime',
        'syntax-async-functions',
        'syntax-object-rest-spread',
        'transform-async-to-generator',
        'transform-class-properties'
    ]
};
