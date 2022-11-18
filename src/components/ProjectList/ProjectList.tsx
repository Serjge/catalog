import { ReactElement } from 'react';

import './ProjectList.styles.scss';
import iconItemMenu from 'assets/icon/IconItemMenu.svg';

const LIST = [
  'По проекту',
  'Объекты',
  'РД',
  'МТО',
  'СМР',
  'График',
  'МиМ',
  'Рабочие',
  'Капвложения',
  'Бюджет',
  'Финансирование',
  'Панорамы',
  'Камеры',
  'Поручения',
  'Контрагенты',
];

export function ProjectList(): ReactElement {
  return (
    <div className="projectList">
      <div className="projectList__header">
        <div>
          <p>Название проекта</p>
          <p className="projectList__subtitle">Аббревиатура</p>
        </div>
        <p className="projectList__arrow projectList__arrow_down" />
      </div>
      <ul className="projectList__list">
        {LIST.map(item => (
          <li
            className={`projectList__item ${
              item === 'СМР' && 'projectList__item_active'
            }`}
            key={item}
          >
            <img src={iconItemMenu} alt="icon menu" />
            <p className="projectList__itemName">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
