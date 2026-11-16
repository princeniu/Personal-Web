import { Contact } from './contact/contact';
import { contactContent as zhContact } from '~/data/content/zh/site-content';
import { baseMeta } from '~/utils/meta';

export { action } from './contact/contact-action.server.js';

export const meta = () => {
  return baseMeta({
    prefix: '牛拙Prince',
    title: zhContact.title,
    description: zhContact.metaDescription,
    path: '/zh/contact',
    locale: 'zh',
  });
};

export default Contact;
