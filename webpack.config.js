let path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, '/src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dest/'),
        filename: 'bundle.js',
    },
    mode: 'development',
    watch: true,
    module: {
        rules: [
            {
                test: /\.js(x?)/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader', 
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    }
                }],
            }, 
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ]
    }
    
}