import { ReactElement } from 'react';

import { Table } from 'components';
import { useTab } from 'hooks/useTab';
import './Tab.style.scss';

export function Tab(): ReactElement {
  const { updateRow, editRow, isEditRow, addRow, deleteRow, creatRow, list } = useTab();

  return (
    <section className="tab">
      <div className="tab__header">
        <p className="tab__title">Строительно-монтажные работы</p>
      </div>

      <Table
        list={list}
        deleteRow={deleteRow}
        creatRow={creatRow}
        addRow={addRow}
        updateRow={updateRow}
        editRow={editRow}
        isEditRow={isEditRow}
      />
    </section>
  );
}
