import { ReactElement } from 'react';

import { Table } from 'components';
import './Tab.style.scss';

export function Tab(): ReactElement {
  return (
    <section className="tab">
      <div className="tab__header">
        <p className="tab__title">Строительно-монтажные работы</p>
      </div>
      <Table />
    </section>
  );
}
