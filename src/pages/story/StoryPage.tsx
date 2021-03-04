import React, { Component, ReactElement } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import { IStoryPageProps } from './IStoryPageProps';
import './StoryPage.scss';

// For /story/:id
// TODO: For now we pass in StoryPageProps, in the future we'll be doing a GET request.
export default class StoryPage extends Component<IStoryPageProps> {
    constructor(props: IStoryPageProps) {
        super(props);
        console.log('The story id is ', this.props.match.params.storyId);
    }

    render(): ReactElement {
        window.onbeforeunload = () => window.scrollTo(0, 0);
        return (
            <div className="Story-page font-aktiv-grotesk">
                <Navbar />
            </div>
        );
    }
}
