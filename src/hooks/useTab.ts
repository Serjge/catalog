import { useEffect, useState } from 'react';

import { listService } from 'api/listService';
import { treeToArray } from 'components/Tab/Table/Table.service';
import { DEFAULT_ITEM, NEW_ROW_ID } from 'const';
import { UseTabReturn } from 'hooks/useTab.types';
import { FilterList, Nullable } from 'types';
import { CreatRequestRow, Filter } from 'types/list';

export const useTab = (): UseTabReturn => {
  const [list, setList] = useState<FilterList[]>([]);
  const [isEditRow, setIsActive] = useState(false);

  const loadList = async (): Promise<void> => {
    const { data } = await listService.getList();

    if (data.length === 0) {
      addRow(null);
    } else {
      setList(treeToArray(data));
    }
  };

  const deleteRow = async (ItemId: number): Promise<void> => {
    const {
      data: { changed },
    } = await listService.deleteItem(ItemId);

    const index = list?.findIndex(({ id }) => id === ItemId);
    const row = list[index];

    if (row.typeFolder === 'root') {
      addRow(null);
    }

    if (row.typeFolder === 'folder') {
      setList(listState => {
        const newState = listState
          .filter(item => item.parentId !== row.id)
          .filter(item => item.id !== row.id);

        if (changed.length !== 0) {
          changed.forEach(item => {
            const index = newState.findIndex(({ id }) => item.id === id);

            newState[index] = { ...newState[index], ...item };
          });
        }

        const filterState = newState[0].child.filter(item => item.id !== row.id);

        const state = newState.map(item =>
          item.typeFolder === 'root' ? { ...item, child: [...filterState] } : item,
        );

        if (row.isLastFolder && state[0].child.length !== 0) {
          const newLastRow = state[0].child[state[0].child.length - 1];
          const newListState = state
            .map(item =>
              item.parentId === newLastRow.id ? { ...item, isLastFolder: true } : item,
            )
            .map(item =>
              item.id === newLastRow.id ? { ...item, isLastFolder: true } : item,
            );

          return [...newListState];
        }

        return [...newState];
      });

      return;
    }

    if (index) {
      setList(listState => {
        listState.splice(index, 1);
        const newState = [...listState];

        if (changed.length !== 0) {
          changed.forEach(item => {
            const index = newState.findIndex(({ id }) => item.id === id);

            newState[index] = { ...newState[index], ...item };
          });
        }

        return [...newState];
      });
    }
  };

  const addRow = (parentId: Nullable<number>): void => {
    setIsActive(true);
    if (parentId === null) {
      setList([
        {
          ...DEFAULT_ITEM,
          typeFolder: 'root',
          isLastFolder: true,
          parentId: null,
          isEdit: true,
        },
      ]);

      return;
    }

    const parent = list.find(({ id }) => id === parentId);

    if (parent?.child.length === 0) {
      const indexParent = list.findIndex(({ id }) => id === parentId);

      const isLastFolder =
        list[0].child.length === 0
          ? true
          : list[0].child[list[0].child.length - 1].id === parent.id;

      setList(listState => {
        listState.splice(indexParent + 1, 0, {
          ...DEFAULT_ITEM,
          typeFolder: parent.typeFolder === 'root' ? 'folder' : 'paper',
          isLastFolder,
          parentId,
          isEdit: true,
        });

        return [...listState];
      });
    } else {
      const lastChildrenId = parent?.child[parent.child.length - 1].id;
      const lastChildren = list.find(({ id }) => id === lastChildrenId);
      const indexLastChildren = list.findIndex(({ id }) => lastChildrenId === id);

      if (lastChildren && list[indexLastChildren]) {
        const countChildren = list[indexLastChildren].child.length;

        setList(listState => {
          listState.splice(indexLastChildren + countChildren + 1, 0, {
            ...DEFAULT_ITEM,
            typeFolder: lastChildren.typeFolder,
            isLastFolder: false,
            parentId,
            isEdit: true,
          });

          if (parent?.typeFolder === 'folder') {
            const newList = [...listState];

            newList[newList.length - 1].isLastFolder = true;

            return [...newList];
          }

          const newList = listState.map(item =>
            item.parentId === lastChildrenId ? { ...item, isLastFolder: false } : item,
          );

          newList[indexLastChildren].isLastFolder = false;
          newList[newList.length - 1].isLastFolder = true;

          return [...newList];
        });
      }
    }
  };

  const creatRow = async (
    newData: CreatRequestRow,
    filterData: Filter,
  ): Promise<void> => {
    const {
      data: { current, changed },
    } = await listService.creatRow(newData);

    const newRow: FilterList = {
      ...current,
      child: [],
      ...filterData,
    };

    setList(listState => {
      const newState = listState.map(item =>
        item.id === NEW_ROW_ID ? { ...newRow } : item,
      );

      const state = newState.map(item =>
        item.id === filterData.parentId
          ? { ...item, child: [...item.child, newRow] }
          : item,
      );

      if (changed.length !== 0) {
        changed.forEach(item => {
          const index = newState.findIndex(({ id }) => item.id === id);

          state[index] = { ...newState[index], ...item };
        });
      }

      return [...state];
    });
    setIsActive(false);
  };

  const updateRow = async (
    newData: CreatRequestRow,
    filterData: Filter,
    id: number,
  ): Promise<void> => {
    const {
      data: { current, changed },
    } = await listService.updateRow(newData, id);

    const newRow: FilterList = {
      ...current,
      child: [],
      ...filterData,
    };

    setList(listState => {
      const newState = listState.map(item => (item.id === id ? { ...newRow } : item));

      if (changed.length !== 0) {
        changed.forEach(item => {
          const index = newState.findIndex(({ id }) => item.id === id);

          newState[index] = { ...newState[index], ...item };
        });
      }

      return [...newState];
    });
    setIsActive(false);
  };

  const editRow = (idRow: number): void => {
    setIsActive(true);
    setList(list.map(item => (item.id === idRow ? { ...item, isEdit: true } : item)));
  };

  useEffect(() => {
    loadList();
  }, []);

  return { list, deleteRow, creatRow, addRow, updateRow, editRow, isEditRow };
};
