import { FilterList } from 'types';

export const NEW_ROW_ID = 999999999999999;

export const DEFAULT_ITEM: FilterList = {
  id: NEW_ROW_ID,
  rowName: '',
  total: 0,
  salary: 0,
  mimExploitation: 0,
  machineOperatorSalary: 0,
  materials: 0,
  mainCosts: 0,
  supportCosts: 0,
  equipmentCosts: 0,
  overheads: 0,
  estimatedProfit: 0,
  child: [],
  isLastFolder: true,
  typeFolder: 'root',
  parentId: null,
  isEdit: true,
};
