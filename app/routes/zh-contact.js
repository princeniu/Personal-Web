import { Contact, action } from './contact/contact';
import { contactContent as zhContact } from '~/data/content/zh/site-content';
import { baseMeta } from '~/utils/meta';

export { action };

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
