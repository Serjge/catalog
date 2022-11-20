import { KeyboardEvent, ReactElement, useRef } from 'react';

import { Icons } from 'components';
import { TableItemProps } from 'components/Tab/Table/TableItem/TableItem.types';
import { NEW_ROW_ID } from 'const';
import { RequestRow } from 'types/list';

export function TableItem(props: TableItemProps): ReactElement {
  const { item, deleteRow, creatRow, addRow, updateRow, editRow, isEditRow } = props;
  const {
    isLastFolder,
    typeFolder,
    rowName,
    salary,
    equipmentCosts,
    overheads,
    estimatedProfit,
    id,
    parentId,
    isEdit,
  } = item;

  const formatter = new Intl.NumberFormat('ru');

  const refRowName = useRef<HTMLInputElement>(null);
  const refSalary = useRef<HTMLInputElement>(null);
  const refEquipmentCosts = useRef<HTMLInputElement>(null);
  const refOverheads = useRef<HTMLInputElement>(null);
  const refEstimatedProfit = useRef<HTMLInputElement>(null);

  const onEnterClick = (e: KeyboardEvent<HTMLInputElement>): void => {
    const data: RequestRow = {
      rowName: refRowName.current?.value!,
      salary: Number(refSalary.current?.value!) || 0,
      mimExploitation: 0,
      machineOperatorSalary: 0,
      materials: 0,
      mainCosts: 0,
      supportCosts: 0,
      equipmentCosts: Number(refEquipmentCosts.current?.value!) || 0,
      overheads: Number(refOverheads.current?.value!) || 0,
      estimatedProfit: Number(refEstimatedProfit.current?.value!) || 0,
    };

    if (e.key === 'Enter') {
      if (isEdit) {
        if (id !== NEW_ROW_ID) {
          updateRow(
            { ...data, parentId },
            {
              parentId,
              isEdit: false,
              isLastFolder,
              typeFolder,
            },
            id,
          );
        } else {
          creatRow(
            { ...data, parentId },
            {
              parentId,
              isEdit: false,
              isLastFolder,
              typeFolder,
            },
          );
        }
      }
    }
  };

  const onEditClick = (): void => {
    editRow(id!);
  };

  return (
    <tr className="table__row" onDoubleClick={!isEditRow ? onEditClick : undefined}>
      <td className="table__column" align="right">
        <Icons
          isLastFolder={isLastFolder}
          id={id}
          deleteRow={deleteRow}
          addRow={addRow}
          typeFolder={typeFolder}
          isEditRow={isEditRow}
        />
      </td>
      {isEdit && typeFolder === 'paper' ? (
        <>
          <td className="table__column">
            <input ref={refRowName} onKeyPress={onEnterClick} defaultValue={rowName} />
          </td>
          <td className="table__column">
            <input
              ref={refSalary}
              onKeyPress={onEnterClick}
              defaultValue={formatter.format(salary)}
            />
          </td>
          <td className="table__column">
            <input
              ref={refEquipmentCosts}
              onKeyPress={onEnterClick}
              defaultValue={formatter.format(equipmentCosts)}
            />
          </td>
          <td className="table__column">
            <input
              ref={refOverheads}
              onKeyPress={onEnterClick}
              defaultValue={formatter.format(overheads)}
            />
          </td>
          <td className="table__column">
            <input
              ref={refEstimatedProfit}
              onKeyPress={onEnterClick}
              defaultValue={formatter.format(estimatedProfit)}
            />
          </td>
        </>
      ) : (
        <>
          <td className="table__column">
            {isEdit && typeFolder !== 'paper' ? (
              <input ref={refRowName} onKeyPress={onEnterClick} defaultValue={rowName} />
            ) : (
              rowName
            )}
          </td>
          <td className="table__column">{formatter.format(salary)}</td>
          <td className="table__column">{formatter.format(equipmentCosts)}</td>
          <td className="table__column">{formatter.format(overheads)}</td>
          <td className="table__column">{formatter.format(estimatedProfit)}</td>
        </>
      )}
    </tr>
  );
}
