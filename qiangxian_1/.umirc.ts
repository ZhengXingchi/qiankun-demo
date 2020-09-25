import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  // base: '/h5/mainSystem/subSystemA', // 部署时非根目录需要配置路径前缀
	// runtimePublicPath: false,
	// publicPath: '/h5/subSystemA/',
	// outputPath: '../dist/subSystemA',
  qiankun: {
    slave: {}
  }
});
