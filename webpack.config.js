const ExtractTextPlugin = require("extract-text-webpack-plugin");
const typeorm = require('typeorm');
module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    watch: true,
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json", "scss"]
    },

    module: {
        // TODO: mini-css-extract-plugin
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({ use: 'sass-loader' })
              }
        ]
    },

    plugins: [
        new ExtractTextPlugin('style.css'),
    ],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        typeorm,
    },

};