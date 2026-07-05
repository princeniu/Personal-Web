import { useRouteError } from '@remix-run/react';
import { Error } from '~/layouts/error';
import { getLocaleFromPathname } from '~/i18n/route';
import { baseMeta } from '~/utils/meta';

export async function loader() {
  throw new Response(null, { status: 404, statusText: 'Not found' });
}

export const meta = ({ location }) => {
  const isZh = getLocaleFromPathname(location?.pathname || '/') === 'zh';

  return baseMeta({
    title: isZh ? '页面未找到' : 'Page not found',
    description: isZh
      ? '你要找的页面不存在，或已被删除。'
      : 'The page you are looking for could not be found.',
  });
};

export function ErrorBoundary() {
  const error = useRouteError();

  return <Error error={error} />;
}
