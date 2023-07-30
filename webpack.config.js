const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: "development",
    devtool: "eval", // 빠르게,
    resolve: {
        // entry app의 변환할 파일명
        extensions: [".jsx", ".js"],
    },
    entry: {
        index: "./src/js/index.js",
        app: "./src/js/app.js",
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "[name]_bundle.js",
    },
    // loader
    module: {
        rules: [
            {
                // file내 .css 파일 검출
                test: /\.css$/,
                use: [
                    // 이러한 loader를 통과 시켜 실행, 중요 -> 뒤쪽의 loader가 먼저 실행
                    "style-loader",
                    "css-loader",
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                // plugin 설정들의 모음
                                [
                                    "@babel/preset-env",
                                    {
                                        targets: {
                                            // 예전 브라우저 지원
                                            browsers: ["> 1% in KR"],
                                        }, // 한국에서 1% 이상 점유율 가진 브라우저
                                        debug: true, // 개발용
                                    },
                                ],
                                "@babel/preset-react",
                            ],
                            plugins: [],
                        },
                    },
                ],
                exclude: /node_modules/, // 제외
            },
        ],
    },
    plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],
};
