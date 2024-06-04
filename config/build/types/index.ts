export interface BuildPaths {
    entry: string,
    html: string,
    output: string,
    src: string,
}

export type BuildPlatform = 'mobile' | 'desktop'


export type Mode = "production" | "development"

export interface BuildOptions {
    analyze?: boolean
    port: number,
    paths: BuildPaths,
    mode: Mode,
    platform: BuildPlatform
}