import { SelectSearchOption } from 'react-select-search';
import { Filter } from './Filter';

export function createSearchSelectOptions(title: string, optionsList: string[]): SelectSearchOption[] {
    const selectOptionsArray: SelectSearchOption[] = [{ name: title, value: Filter.NO_FILTER }];
    optionsList.reduce((arr, val) => {
        const obj = { value: val, name: val };
        arr.push(obj);
        return arr;
    }, selectOptionsArray);

    return selectOptionsArray;
}
