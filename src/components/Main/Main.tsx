import { ReactElement } from 'react';

import { ProjectList, Tab } from 'components';
import './Main.style.scss';

export function Main(): ReactElement {
  return (
    <main className="main">
      <ProjectList />
      <Tab />
    </main>
  );
}
