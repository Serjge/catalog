import { Folders, Nullable } from 'types';

export type List = {
  child: List[];
  equipmentCosts: number;
  estimatedProfit: number;
  id: number;
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  overheads: number;
  rowName: string;
  salary: number;
  supportCosts: number;
  total: number;
};

export type Filter = {
  typeFolder: Folders;
  isLastFolder: boolean;
  parentId: Nullable<number>;
  isEdit: boolean;
};

export type FilterList = List & Filter;

export type Row = {
  equipmentCosts: number;
  estimatedProfit: number;
  id: number;
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  overheads: number;
  rowName: string;
  salary: number;
  supportCosts: number;
  total: number;
};

export type ResponseRow = {
  changed: Row[];
  current: Row;
};

export type RequestRow = {
  equipmentCosts: number;
  estimatedProfit: number;
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  overheads: number;
  rowName: string;
  salary: number;
  supportCosts: number;
};

export type CreatRequestRow = RequestRow & { parentId: Nullable<number> };

export type FilterCreatRow = CreatRequestRow & Filter;
