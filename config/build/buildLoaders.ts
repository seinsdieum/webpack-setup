import {ModuleOptions} from 'webpack';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {

    const isDev = options.mode === 'development'

    const assetLoader = {
        test: /\.(png|jpg|jpeg|gir)$/i,
        type: 'asset/resource'
    }

    const svgLoader = {
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: [{
            loader: '@svgr/webpack', options: {icons: true, svgoConfig: {
                plugins: [
                    {
                        name: 'convertColors',
                        params: {
                            currentColor: true
                        }
                    }
                ]
                }}
        }]
    }

    const cssLoader = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? '[local]__[hash:base64:5]' : '[hash:base64:8]'
            }
        }
    }

    const styleLoader = {
        test: /\.s[ac]ss?$/,
        use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, cssLoader, "sass-loader"],
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: [
            {
                loader: "ts-loader",
                options: {
                    transpileOnly: true,
                }
            }
        ],
        exclude: /node_modules/
    }

    return [
        styleLoader,
        tsLoader,
        assetLoader,
        svgLoader
    ]
}