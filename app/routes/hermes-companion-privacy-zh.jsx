import { PrivacyPolicy } from './hermes-companion-privacy/privacy';
import { baseMeta } from '~/utils/meta';

export const meta = () =>
  baseMeta({
    prefix: '牛拙Prince',
    title: 'Hermes iOS Companion 隐私政策',
    description: 'Hermes iOS Companion 非官方客户端的隐私政策。',
    path: '/zh/hermes-companion/privacy',
    locale: 'zh',
  });

export default PrivacyPolicy;
