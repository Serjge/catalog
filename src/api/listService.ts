import { instance } from 'api/config';
import { List } from 'types';
import { CreatRequestRow, ResponseRow } from 'types/list';

const EID = process.env.REACT_APP_EID;

export const listService = {
  getList: () => instance.get<List[]>(`/v1/outlay-rows/entity/${EID}/row/list`),

  deleteItem: (id: number) =>
    instance.delete<ResponseRow>(`/v1/outlay-rows/entity/${EID}/row/${id}/delete`),

  creatRow: (data: CreatRequestRow) =>
    instance.post<ResponseRow>(`/v1/outlay-rows/entity/${EID}/row/create`, data),

  updateRow: (data: CreatRequestRow, id: number) =>
    instance.post<ResponseRow>(`/v1/outlay-rows/entity/${EID}/row/${id}/update`, data),
};
