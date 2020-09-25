import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout:{},
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  //   { path: '/bbs', component: '@/pages/index' },
  // ],
  // base: 'h5/mainSystem',
	// publicPath: '//xxxxx.com/',
	// base: '/h5/mainSystem', // 部署时非根目录需要配置路径前缀
	// publicPath: '/h5/mainSystem/',
	// outputPath: '../dist/mainSystem',

  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'app2', // 唯一 id
          entry: '//localhost:9001', // html entry
        }
      ],
    },
  }
});
