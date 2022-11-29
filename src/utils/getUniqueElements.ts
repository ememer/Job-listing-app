
type DataObject = {
    tools: string[];
    languages: string[]
}


export const getUniqueElements = (
  data: Array<DataObject>,
  key: string
): Array<string> => {
  let arrayOfEachElements: string[] = [];
  data.map((elements: any) =>
    elements?.[key].forEach((element: any) => arrayOfEachElements.push(element))
  );

  return [...new Set(arrayOfEachElements)];
};


