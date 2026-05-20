import { Uses } from './uses/uses';
import { usesContent as zhUses } from '~/data/content/zh/site-content';
import { baseMeta } from '~/utils/meta';

export const meta = () => {
  return baseMeta({
    prefix: '牛拙Prince',
    title: zhUses.heroTitle,
    description: zhUses.metaDescription,
    path: '/zh/uses',
    locale: 'zh',
  });
};

export default Uses;
