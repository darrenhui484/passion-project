import { createSearchSelectOptions } from '../../components/filter/helpers';

const THEME_LIST = ['SUSTAINABILITY', 'DEVELOPING COUNTRY', 'SAFE SPACE', 'EDUCATION'];
const LOCATION_LIST = ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'USA'];

export const THEME_TITLE = 'THEME';

export const LOCATION_TITLE = 'LOCATION';

const THEME_OPTIONS = createSearchSelectOptions(THEME_TITLE, THEME_LIST);
const LOCATION_OPTIONS = createSearchSelectOptions(LOCATION_TITLE, LOCATION_LIST);

export const FILTER_OPTIONS = [
    { title: THEME_TITLE, options: THEME_OPTIONS },
    { title: LOCATION_TITLE, options: LOCATION_OPTIONS },
];
