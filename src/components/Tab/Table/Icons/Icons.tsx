import { ReactElement, useState } from 'react';

import basket from 'assets/icon/basket.svg';
import folder1 from 'assets/icon/folder1.svg';
import folder2 from 'assets/icon/folder2.svg';
import paper from 'assets/icon/paper.svg';
import './Icons.style.scss';

type IconsProps = {
  isActiveRoot?: boolean;
  isActiveFolder?: boolean;
  isActivePaper?: boolean;
  isAttachmentFolder?: boolean;
  isAttachmentPaper?: boolean;
  isLastFolder?: boolean;
};

export function Icons(props: IconsProps): ReactElement {
  const {
    isAttachmentFolder,
    isActiveRoot,
    isAttachmentPaper,
    isActivePaper,
    isActiveFolder,
    isLastFolder,
  } = props;
  const [isActive, setIsActive] = useState(false);

  const onMouseMove = (): void => {
    setIsActive(true);
  };
  const onMouseLeave = (): void => {
    setIsActive(false);
  };

  return (
    <div
      onMouseLeave={onMouseLeave}
      className={`icons ${isActive && 'icons__active'} ${
        isActiveFolder && 'icons__active_75'
      } ${isActivePaper && 'icons__active_50'}`}
    >
      <div className="icons__container">
        {isActiveRoot && (
          <img
            src={folder1}
            alt="folder1"
            className="icons__image"
            onMouseEnter={isActiveRoot ? onMouseMove : undefined}
          />
        )}
      </div>
      <div className="icons__container">
        {isAttachmentFolder && <div className="icons__wrapper_left" />}
        {!isLastFolder && <div className="icons__wrapper_straight" />}
        {(isActiveFolder || (isActive && isActiveRoot)) && (
          <img
            src={folder2}
            alt="folder2"
            className="icons__image "
            onMouseEnter={isActiveFolder ? onMouseMove : undefined}
          />
        )}
      </div>
      <div className="icons__container">
        {isAttachmentPaper && <div className="icons__wrapper_left" />}
        {(isActivePaper || isActive) && (
          <img
            src={paper}
            alt="paper"
            className="icons__image "
            onMouseEnter={isActivePaper ? onMouseMove : undefined}
          />
        )}
      </div>
      <div className="icons__container">
        {isActive && <img src={basket} alt="basket" className="icons__image " />}
      </div>
    </div>
  );
}
