import { PrivacyPolicy } from './hermes-companion-privacy/privacy';
import { baseMeta } from '~/utils/meta';

export const meta = () =>
  baseMeta({
    title: 'Helmline Privacy Policy',
    description: 'Privacy policy for the unofficial Helmline app.',
    path: '/hermes-companion/privacy',
  });

export default PrivacyPolicy;
