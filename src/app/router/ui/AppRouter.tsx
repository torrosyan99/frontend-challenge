import { Route, Routes } from 'react-router-dom';

import { routerConfig } from '@/shared/config/routerConfig/routerConfig.tsx';

export const AppRouter = () => {
  return (
    <Routes>
      {routerConfig.map(({ path, Component }) => <Route path={path} element={<Component />}  />)}
    </Routes>
  );
};
