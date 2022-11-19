import { ReactElement } from 'react';

import { treeToArray } from './Table.service';
import './Table.style.scss';

import { TableItem } from 'components';
import { List } from 'types';

const MOCK: List[] = [
  {
    id: 1,
    rowName: 'Южная строительная площадка',
    total: 1,
    salary: 20348,
    mimExploitation: 0,
    machineOperatorSalary: 0,
    materials: 0,
    mainCosts: 0,
    supportCosts: 0,
    equipmentCosts: 1750,
    overheads: 108.07,
    estimatedProfit: 1209122.5,
    child: [
      {
        id: 2,
        rowName: 'Фундаментальные работы',
        total: 1,
        salary: 20348,
        mimExploitation: 0,
        machineOperatorSalary: 0,
        materials: 0,
        mainCosts: 0,
        supportCosts: 0,
        equipmentCosts: 1750,
        overheads: 108.07,
        estimatedProfit: 1209122.5,
        child: [
          {
            id: 3,
            rowName: 'Статья работы № 3',
            total: 1,
            salary: 20348,
            mimExploitation: 0,
            machineOperatorSalary: 0,
            materials: 0,
            mainCosts: 0,
            supportCosts: 0,
            equipmentCosts: 1750,
            overheads: 108.07,
            estimatedProfit: 189122.5,
            child: [],
          },
          {
            id: 4,
            rowName: 'Статья работы № 4',
            total: 1,
            salary: 38200,
            mimExploitation: 0,
            machineOperatorSalary: 0,
            materials: 0,
            mainCosts: 0,
            supportCosts: 0,
            equipmentCosts: 1200,
            overheads: 850,
            estimatedProfit: 1020000,
            child: [],
          },
        ],
      },
      {
        id: 5,
        rowName: 'Фундаментальные работы',
        total: 1,
        salary: 20348,
        mimExploitation: 0,
        machineOperatorSalary: 0,
        materials: 0,
        mainCosts: 0,
        supportCosts: 0,
        equipmentCosts: 1750,
        overheads: 108.07,
        estimatedProfit: 1209122.5,
        child: [
          {
            id: 6,
            rowName: 'Статья работы № 6',
            total: 1,
            salary: 20348,
            mimExploitation: 0,
            machineOperatorSalary: 0,
            materials: 0,
            mainCosts: 0,
            supportCosts: 0,
            equipmentCosts: 1750,
            overheads: 108.07,
            estimatedProfit: 189122.5,
            child: [],
          },
          {
            id: 7,
            rowName: 'Статья работы № 7',
            total: 1,
            salary: 38200,
            mimExploitation: 0,
            machineOperatorSalary: 0,
            materials: 0,
            mainCosts: 0,
            supportCosts: 0,
            equipmentCosts: 1200,
            overheads: 850,
            estimatedProfit: 1020000,
            child: [],
          },
        ],
      },
    ],
  },
];

export function Table(): ReactElement {
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
        {treeToArray(MOCK).map(item => {
          return <TableItem item={item} key={item.id} />;
        })}
      </tbody>
    </table>
  );
}
