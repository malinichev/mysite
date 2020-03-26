const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
    mode: 'development',
    // mode: 'production',

    

    output: {
        filename: 'bundle.js'
        
    },


    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: false }
                    }
                ]
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {   
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    },
                ]
            },
            {
                    test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
                    loader: 'url-loader',
                    include: path.resolve(__dirname, 'src/css/images/'), 
                    options: {
                        limit: 512,
                        name: '[name].[ext]'
                    }
                },
                {
                    test: /\.svg$/,
                    include: path.resolve(__dirname, 'src/css/svg/'), 
                    use: [
                        'svg-sprite-loader',
                        'svgo-loader'
                    ]
                },
            
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                           
                            publicPath: '../css',
                           
                        },
                    },
                    'css-loader',
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                 use: [
                      {
                        loader: 'file-loader',
                        options: {
                          name: '[name].[ext]',
                          outputPath: 'fonts',
                        },
                      },
                    ]
            }
           
        ]
    },
    
        
    

    plugins: [

            new SpriteLoaderPlugin(),
            new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
       
        new MiniCssExtractPlugin({
           
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
    ]
};