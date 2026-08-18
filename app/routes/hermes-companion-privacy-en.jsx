import { PrivacyPolicy } from './hermes-companion-privacy/privacy';
import { baseMeta } from '~/utils/meta';

export const meta = () =>
  baseMeta({
    title: 'Hermes iOS Companion Privacy Policy',
    description: 'Privacy policy for the unofficial Hermes iOS Companion app.',
    path: '/hermes-companion/privacy',
  });

export default PrivacyPolicy;
