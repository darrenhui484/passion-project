/* Maybe make as service instead */
import { SelectSearchOption } from 'react-select-search';
import { createSearchSelectOptions } from '../../components/filter/helpers';
import { IFilterSelectOptions } from '../../components/filter/IFilterSelectOptions';
import { IStoryCardProps } from '../../components/storyCard/IStoryCardProps';

export const LATEST_TITLE = 'LATEST';
export const LATEST_LIST = ['EARLIEST']; // Only has one other option.
export const LATEST_OPTIONS = createSearchSelectOptions(LATEST_TITLE, LATEST_LIST);

export const TOPIC_TITLE = 'TOPIC';
export const SPEAKER_TITLE = 'SPEAKER';

function generateOptions(
    title: string,
    param: 'title' | 'author',
    storyCards: IStoryCardProps[],
): SelectSearchOption[] {
    const uniqueTopicsSet = new Set<string>();
    storyCards.forEach((storyCard) => {
        uniqueTopicsSet.add(storyCard[param].toUpperCase());
    });
    return createSearchSelectOptions(title, Array.from(uniqueTopicsSet));
}

function generateTopicOptions(storyCards: IStoryCardProps[]): SelectSearchOption[] {
    return generateOptions(TOPIC_TITLE, 'title', storyCards);
}

function generateSpeakerOptions(storyCards: IStoryCardProps[]): SelectSearchOption[] {
    return generateOptions(SPEAKER_TITLE, 'author', storyCards);
}

export function generateFilterSelectOptions(storyCards: IStoryCardProps[]): IFilterSelectOptions[] {
    const topicOptions = generateTopicOptions(storyCards);
    const speakerOptions = generateSpeakerOptions(storyCards);

    return [
        { title: LATEST_TITLE, options: LATEST_OPTIONS },
        { title: TOPIC_TITLE, options: topicOptions },
        { title: SPEAKER_TITLE, options: speakerOptions },
    ];
}
