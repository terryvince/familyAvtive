module.exports = {
// parser: 'sugarss',   // css语法风格检测
    plugins: {
        // 'postcss-import': {},
        // 'postcss-preset-env': {}, // 使用现代css语法,
        'autoprefixer': {}, // 添加厂商前缀
        'cssnano': {}, // 代码压缩，优化
        // 'postcss-sprites': {spritePath:'./dist/static'}, //自动生成sprite图，但仅支持px单位
    }
}
