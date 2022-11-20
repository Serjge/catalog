import { ReactElement } from 'react';

import { TableProps } from './Table.types';
import './Table.style.scss';

import { TableItem } from 'components';

export function Table(props: TableProps): ReactElement {
  const { list, deleteRow, creatRow, addRow, updateRow, editRow, isEditRow } = props;

  return (
    <table className="table">
      <thead className="table__rowHead">
        <tr>
          <th className="table__head">Уровень</th>
          <th className="table__head">Наименование работ</th>
          <th className="table__head">Основная з/п</th>
          <th className="table__head">Оборудование</th>
          <th className="table__head">Накладные расходы</th>
          <th className="table__head">Сметная прибыль</th>
        </tr>
      </thead>

      <tbody>
        {list.length === 0
          ? null
          : list.map(item => {
              return (
                <TableItem
                  deleteRow={deleteRow}
                  creatRow={creatRow}
                  item={item}
                  key={item.id}
                  addRow={addRow}
                  updateRow={updateRow}
                  editRow={editRow}
                  isEditRow={isEditRow}
                />
              );
            })}
      </tbody>
    </table>
  );
}
