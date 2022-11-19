import { FilterList, Folders, List } from 'types';

export const treeToArray = (List: List[]): FilterList[] => {
  const newList: FilterList[] = [];
  const idLastFolderId = List[0].child[List[0].child.length - 1].id;

  const recursionTree = ({ id, child }: List, typeFolderFather: Folders): void => {
    child.forEach((children, indexValue) => {
      const indexList = newList.findIndex(({ id: dataId }) => dataId === id) + 1;
      const indexChildren = indexList + indexValue + child.length;
      const typeFolder = typeFolderFather === 'root' ? 'folder' : 'paper';
      const isLastFolder = idLastFolderId === children.id || idLastFolderId === id;

      newList.splice(indexChildren, 0, {
        ...children,
        typeFolder,
        isLastFolder,
      });

      recursionTree(children, typeFolder);
    });
  };

  newList.push({ ...List[0], typeFolder: 'root', isLastFolder: true });
  recursionTree(List[0], 'root');

  return newList;
};
