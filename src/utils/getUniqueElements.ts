import { JobListObject } from '../@types/JobListTypes';

export const getUniqueElements = (data: JobListObject[], key: 'languages' | 'tools'): Array<string> => {
    const arrayOfEachElements: string[] = [];
    data.map((elements) => elements[key].forEach((element) => arrayOfEachElements.push(element)));

    return [...new Set(arrayOfEachElements)];
};
