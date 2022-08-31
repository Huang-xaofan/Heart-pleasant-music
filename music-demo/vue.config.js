// vue.config.js
module.exports = {
  publicPath: './',
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
       
          modifyVars: {
            // 直接覆盖变量
            'cell-font-size': '17PX',
            'border-color': '#eee',
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            //hack: `true; @import "/styles/cover.less";`,
          
        },
      },
    },
  },
}
