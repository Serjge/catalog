import { FilterList } from 'types';
import { CreatRequestRow, Filter } from 'types/list';

export type UseTabReturn = {
  list: FilterList[];
  deleteRow: (id: number) => void;
  creatRow: (data: CreatRequestRow, filterData: Filter) => void;
  addRow: (parentId: number) => void;
  updateRow: (newData: CreatRequestRow, filterData: Filter, id: number) => void;
  editRow: (idRow: number) => void;
  isEditRow: boolean;
};
