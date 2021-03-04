import { Component, ReactElement } from 'react';
import { IStoryCardProps } from './IStoryCardProps';
import './StoryCard.scss';

export default class StoryCard extends Component<IStoryCardProps> {
    constructor(props: IStoryCardProps) {
        super(props);
    }

    render(): ReactElement {
        const relativeStoryUrl = `story/${this.props.storyId}`;
        // TODO: Rethink if we want the link to be whole card or just the title text.
        return (
            <div className="Story-card font-aktiv-grotesk">
                <a href={relativeStoryUrl}>
                    <div className="Story-card-image-container">
                        <img className="Story-card-image" src={this.props.imageUrl} />
                    </div>
                    <div className="Story-card-divider"></div>
                    <div className="Story-card-bottom-section">
                        <div className="Story-card-title">{this.props.title}</div>
                        <div className="Story-card-author">With {this.props.author}</div>
                    </div>
                </a>
            </div>
        );
    }
}
