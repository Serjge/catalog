import { ReactElement } from 'react';

import { Icons } from 'components';
import { FilterList } from 'types';

type TableItemProps = {
  item: FilterList;
};

export function TableItem(props: TableItemProps): ReactElement {
  const { item } = props;
  const {
    isLastFolder,
    typeFolder,
    rowName,
    salary,
    equipmentCosts,
    overheads,
    estimatedProfit,
  } = item;
  const formatter = new Intl.NumberFormat('ru');

  return (
    <tr className="table__row">
      <td className="table__column" align="right">
        <Icons
          isActiveRoot={typeFolder === 'root'}
          isActiveFolder={typeFolder === 'folder'}
          isActivePaper={typeFolder === 'paper'}
          isAttachmentFolder={typeFolder === 'folder'}
          isAttachmentPaper={typeFolder === 'paper'}
          isLastFolder={isLastFolder}
        />
      </td>
      <td className="table__column">{rowName}</td>
      <td className="table__column">{formatter.format(salary)}</td>
      <td className="table__column">{formatter.format(equipmentCosts)}</td>
      <td className="table__column">{formatter.format(overheads)}</td>
      <td className="table__column">{formatter.format(estimatedProfit)}</td>
    </tr>
  );
}
