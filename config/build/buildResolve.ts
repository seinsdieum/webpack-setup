import {BuildOptions} from "./types";

export function buildResolve(options: BuildOptions) {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': options.paths.src
        }
    }
}