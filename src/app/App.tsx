import { AppRouter } from '@/app/router';

import { Header } from '@/widgets/Header';

import './styles/fonts.css';
import './styles/reset.css';
import './styles/main.css';

export const App = () => {
  return (
    <div className={'app'}>
      <Header/>
      <AppRouter/>
    </div>
  );
};
