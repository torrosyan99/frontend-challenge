import { Link } from 'react-router-dom';

import { RoutePaths } from '@/shared/config/routerConfig/routerConfig.tsx';

export const Header = () => {
  return (
    <header>
      <Link to={RoutePaths.HOME}>Все котики</Link>
      <Link to={RoutePaths.FAVORITE}>Любимые котики</Link>
    </header>
  );
};
