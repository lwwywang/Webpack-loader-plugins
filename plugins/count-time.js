module.exports = class CountTimePlugin {
  apply(compiler) {
    let self = this;
    compiler.hooks.entryOption.tap('CountTime', (compilation) => {
      self.startTime = Date.now();
      console.log('start...');
    });

    compiler.hooks.done.tap('CountTime', (compilation) => {
      console.log('end...');
      self.endTime = Date.now();
      console.log(`编译耗时：${self.endTime - self.startTime} ms`);
    });

    compiler.hooks.thisCompilation.tap('CountTime', (compilation) => {
      compilation.hooks.processAssets.tap(
        {
          name: 'CountTime',
          stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_SUMMARIZE,
        },
        (assets) => {
          // 在这里处理资源
        }
      );
    });
  }
};