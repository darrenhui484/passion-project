import React, { Component, ReactElement } from 'react';
import { Filter } from '../../components/filter/Filter';
import { IFilterSelectOptions } from '../../components/filter/IFilterSelectOptions';
import Navbar from '../../components/navbar/Navbar';
import { IStoryCardProps } from '../../components/storyCard/IStoryCardProps';
import StoryCard from '../../components/storyCard/StoryCard';
import FilterableTemplate from '../filterableTemplate/FilterableTemplate';
import { generateFilterSelectOptions, LATEST_TITLE, SPEAKER_TITLE, TOPIC_TITLE } from './FilterOptions';
import './StoriesPage.scss';

const FILTERABLE_PAGE_PROPS = {
    titleTop: 'BOARDING',
    titleBottom: 'PASSES',
    subtext: 'Us, dreamers stand together. We inspire one another and follow the beat of our own heart.',
};

const cardOne: IStoryCardProps = {
    title: 'BODY CONFIDENCE',
    author: 'Olivia Rush',
    imageUrl:
        'https://www.thesprucepets.com/thmb/UCGjJ5v6HgPJJ7OOtS5J3ijUBZ8=/1080x1350/filters:fill(auto,1)/35493166_2113126082300521_5592447779063463936_n-5b69b61946e0fb002562c234.jpg',
    storyId: 'testStoryId1',
};

const cardTwo: IStoryCardProps = {
    title: 'RECLAIMING YOUR BODY',
    author: 'Rachel Holt',
    imageUrl:
        'https://www.thesprucepets.com/thmb/UCGjJ5v6HgPJJ7OOtS5J3ijUBZ8=/1080x1350/filters:fill(auto,1)/35493166_2113126082300521_5592447779063463936_n-5b69b61946e0fb002562c234.jpg',
    storyId: 'testStoryId2',
};

const storyPropsList = [cardOne, cardTwo, cardOne, cardTwo];

interface StoriesPageState {
    filteredStoryCards: IStoryCardProps[];
}

export default class StoriesPage extends Component<Record<string, never>, StoriesPageState> {
    // TODO: Maybe think about storing this sorted by date already
    private readonly storyPropsList: IStoryCardProps[];
    private filteredLatest: boolean;
    private filteredTopic: string;
    private filteredSpeaker: string;
    private filterOptions: IFilterSelectOptions[];

    constructor(props: Record<string, never>) {
        super(props);

        this.storyPropsList = storyPropsList;
        this.filteredLatest = true;
        this.filteredTopic = Filter.NO_FILTER;
        this.filteredSpeaker = Filter.NO_FILTER;
        this.filterOptions = generateFilterSelectOptions(storyPropsList);

        this.state = { filteredStoryCards: storyPropsList };
    }

    filterItemChanged(item: string, value: string): void {
        switch (item) {
            case LATEST_TITLE:
                this.filteredLatest = value === Filter.NO_FILTER;
                break;
            case TOPIC_TITLE:
                this.filteredTopic = value;
                break;
            case SPEAKER_TITLE:
                this.filteredSpeaker = value;
                break;
            default:
                console.error('Unknown filter item changed, this should never  happen', item, value);
                break;
        }
        this.updateStoryCards();
    }

    updateStoryCards(): void {
        const filteredStoryCards = this.storyPropsList.filter((storyCardProp) => {
            if (
                (this.filteredSpeaker !== Filter.NO_FILTER &&
                    storyCardProp.author.toUpperCase() !== this.filteredSpeaker) ||
                (this.filteredTopic !== Filter.NO_FILTER && storyCardProp.title.toUpperCase() !== this.filteredTopic)
            ) {
                return false;
            }
            return true;
        });
        this.setState({ filteredStoryCards });
    }

    render(): ReactElement {
        window.onbeforeunload = () => window.scrollTo(0, 0);

        return (
            <div className="Story-page font-aktiv-grotesk">
                <Navbar />
                <FilterableTemplate
                    {...FILTERABLE_PAGE_PROPS}
                    filterOptions={this.filterOptions}
                    onFilterChange={this.filterItemChanged.bind(this)}
                />
                <div className="Story-page-card-container">
                    {this.state.filteredStoryCards.map((storyCardProps, i) => (
                        <div className="Story-page-card-item" key={i}>
                            <StoryCard {...storyCardProps} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
