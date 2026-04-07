
import { FavoritePage } from '@/pages/FavoritePage/ui/FavoritePage.tsx';
import { HomePage } from '@/pages/HomePage/ui/HomePage.tsx';

import type { ComponentType } from 'react';

export enum RoutePaths {
  HOME = '/',
  FAVORITE = '/favorite',
}


interface RouteConfig  {
  path: RoutePaths;
  Component: ComponentType;
}

export const routerConfig:RouteConfig[] = [
  {
    path: RoutePaths.HOME,
    Component: HomePage
  },
  {
    path:RoutePaths.FAVORITE,
    Component: FavoritePage
  }
];