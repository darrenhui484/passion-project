import { Component, ReactElement } from 'react';
import { IStoryCardCarouselProps } from './IStoryCardCarouselProps';
import './StoryCardCarousel.scss';

export default class StoryCardCarousel extends Component<IStoryCardCarouselProps> {
    constructor(props: IStoryCardCarouselProps) {
        super(props);
    }

    render(): ReactElement {
        // TODO: Rethink if we want the link to be whole card or just the title text.
        return <div>Test</div>;
    }
}
