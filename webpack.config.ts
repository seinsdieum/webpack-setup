import path from 'path'
import * as webpack from 'webpack'

import type { Configuration as DevServerConfiguration }from 'webpack-dev-server'

import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {buildLoaders} from "./config/build/buildLoaders";
import {buildPlugins} from "./config/build/buildPlugins";
import {buildResolve} from "./config/build/buildResolve";
import {buildWebpack} from "./config/build/buildWebpack";
import {BuildPaths, BuildPlatform, Mode} from "./config/build/types";

interface Environment {
    port: number,
    mode: Mode,
    analyze?: boolean,
    platform?: BuildPlatform
}



export default (env: Environment) => {

    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    }



    const config: webpack.Configuration = buildWebpack({
        paths,
        port: env.port ?? 5173,
        mode: env.mode ?? 'development',
        analyze: env.analyze,
        platform: env.platform ?? 'desktop'
    })

    return config

}