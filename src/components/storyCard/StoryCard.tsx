import { Component, ReactElement } from 'react';
import { IStoryCardProps } from './IStoryCardProps';
import './StoryCard.scss';

export default class StoryCard extends Component<IStoryCardProps> {
    constructor(props: IStoryCardProps) {
        super(props);
    }

    render(): ReactElement {
        return (
            <div className="Story-card font-aktiv-grotesk">
                <div className="Story-card-image-container">
                    <img className="Story-card-image" src={this.props.imageUrl} />
                </div>
                <div className="Story-card-divider"></div>
                <div className="Story-card-bottom-section">
                    <div className="Story-card-title">{this.props.title}</div>
                    <div className="Story-card-author">With {this.props.author}</div>
                </div>
            </div>
        );
    }
}
