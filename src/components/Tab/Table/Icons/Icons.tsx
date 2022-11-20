import { ReactElement, useState } from 'react';

import { IconsProps } from './Icon.types';

import basket from 'assets/icon/basket.svg';
import folder1 from 'assets/icon/folder1.svg';
import folder2 from 'assets/icon/folder2.svg';
import paper from 'assets/icon/paper.svg';
import './Icons.style.scss';

export function Icons(props: IconsProps): ReactElement {
  const { isLastFolder, id, deleteRow, addRow, typeFolder, isEditRow } = props;
  const [isActive, setIsActive] = useState(false);

  const onMouseMove = (): void => {
    setIsActive(true);
  };
  const onMouseLeave = (): void => {
    setIsActive(false);
  };

  const onDeleteClick = (): void => {
    deleteRow(id!);
  };

  const onAddClick = (): void => {
    addRow(id!);
  };

  return (
    <div
      onMouseLeave={onMouseLeave}
      className={`icons ${isActive && !isEditRow && 'icons__active'} ${
        typeFolder === 'folder' && 'icons__active_75'
      } ${typeFolder === 'paper' && 'icons__active_50'}`}
    >
      <div className="icons__container">
        {typeFolder === 'root' && (
          <img
            role="presentation"
            src={folder1}
            alt="folder1"
            className="icons__image"
            onMouseMove={typeFolder === 'root' && !isEditRow ? onMouseMove : undefined}
            onClick={!isEditRow ? onAddClick : undefined}
          />
        )}
      </div>
      <div
        className="icons__container"
        onMouseMove={typeFolder === 'folder' && !isEditRow ? onMouseMove : undefined}
      >
        {typeFolder === 'folder' && <div className="icons__wrapper_left" />}
        {!isLastFolder && <div className="icons__wrapper_straight" />}
        {(typeFolder === 'folder' ||
          (isActive && !isEditRow && typeFolder === 'root')) && (
          <img
            role="presentation"
            src={folder2}
            alt="folder2"
            className="icons__image "
            onClick={!isEditRow ? onAddClick : undefined}
          />
        )}
      </div>
      <div className="icons__container">
        {typeFolder === 'paper' && <div className="icons__wrapper_left" />}
        {(typeFolder === 'paper' || isActive) && (
          <img
            role="presentation"
            src={paper}
            alt="paper"
            className="icons__image "
            onMouseEnter={typeFolder === 'paper' && !isEditRow ? onMouseMove : undefined}
          />
        )}
      </div>
      <div className="icons__container">
        {isActive && (
          <img
            src={basket}
            alt="basket"
            className="icons__image "
            onClick={onDeleteClick}
            role="presentation"
          />
        )}
      </div>
    </div>
  );
}
