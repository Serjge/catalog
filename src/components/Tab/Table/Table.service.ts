import { FilterList, Folders, List } from 'types';

export const treeToArray = (list: List[]): FilterList[] => {
  if (list.length === 0) {
    return [];
  }

  const newList: FilterList[] = [];
  const idLastFolderId =
    list[0].child.length !== 0 && list[0].child[list[0].child.length - 1].id;

  const recursionTree = ({ id, child }: List, typeFolderFather: Folders): void => {
    if (child.length === 0) return;
    let countChildren = 0;

    child.forEach(({ child }): void => {
      countChildren += child.length;
    });

    child.forEach((children, indexValue) => {
      const indexParent = newList.findIndex(({ id: dataId }) => dataId === id) + 1;

      const indexChildren = indexParent + indexValue + countChildren;
      const typeFolder = typeFolderFather === 'root' ? 'folder' : 'paper';
      const isLastFolder = idLastFolderId === children.id || idLastFolderId === id;

      newList.splice(indexChildren, 0, {
        ...children,
        typeFolder,
        isLastFolder,
        parentId: id!,
        isEdit: false,
      });

      recursionTree(children, typeFolder);
    });
  };

  newList.push({
    ...list[0],
    typeFolder: 'root',
    isLastFolder: true,
    parentId: null,
    isEdit: false,
  });
  recursionTree(list[0], 'root');

  return newList;
};
