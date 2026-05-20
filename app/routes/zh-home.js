import { Home, links } from './home/home';
import { baseMeta } from '~/utils/meta';

export { links };

export const meta = () => {
  return baseMeta({
    prefix: '牛拙Prince',
    title: '产品设计 · 人因工程 · AI 产品',
    description: `牛拙Prince 的作品集——一个工作在人因工程、产品设计和 AI 交叉处的 designer-builder。项目覆盖车载界面、安全关键户外设备和原生 macOS AI 工具等复杂系统的 UI/UX。`,
    path: '/zh',
    locale: 'zh',
  });
};

export default Home;
