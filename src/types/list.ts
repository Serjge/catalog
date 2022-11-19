import { Folders } from 'types';

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

export type FilterList = List & {
  typeFolder: Folders;
  isLastFolder: boolean;
};
