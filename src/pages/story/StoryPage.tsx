import React, { Component, ReactElement } from 'react';
import Arrow from '../../components/arrow/Arrow';
import Navbar from '../../components/navbar/Navbar';
import { IStoryPageProps } from './IStoryPageProps';
import './StoryPage.scss';

const catPic =
    'https://www.thesprucepets.com/thmb/UCGjJ5v6HgPJJ7OOtS5J3ijUBZ8=/1080x1350/filters:fill(auto,1)/35493166_2113126082300521_5592447779063463936_n-5b69b61946e0fb002562c234.jpg';

const dummyProps = {
    title: 'Reclaiming your body',
    author: 'Rachel Holt',
    mission: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita`,
    job: '@about.your.body',
    social: '@about.your.body',
    images: [catPic, catPic, catPic, catPic, catPic],
    header:
        'Remind yourself this is society trying to pull you down by telling you that you are not good enough and its not true.',
    content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
        sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
        dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
        et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem 
        ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus 
        est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
        kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum 
        dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod`,
    socialMedias: [
        { name: 'Instagram', url: catPic },
        { name: 'Youtube', url: catPic },
        { name: 'Portfolio', url: catPic },
    ],
} as IStoryPageProps;

interface IStoryPageState {
    storyPageProps: IStoryPageProps;
}

// For /story/:id
// TODO: For now we pass in StoryPageProps, in the future we'll be doing a GET request.
export default class StoryPage extends Component<IStoryPageProps, IStoryPageState> {
    constructor(props: IStoryPageProps) {
        super(props);
        console.log('The story id is ', this.props.match.params.storyId);
        this.state = { storyPageProps: dummyProps };
    }

    render(): ReactElement {
        window.onbeforeunload = () => window.scrollTo(0, 0);
        return (
            <div className="Story-page font-aktiv-grotesk">
                <Navbar />
                <div className="Story-page-content-container">
                    <div className="Story-page-title-container">
                        <div className="Story-page-title-left-section">
                            <div className="Story-page-title-text font-saol-display">
                                {this.state.storyPageProps.title.toUpperCase()}
                            </div>
                            <div className="Story-page-title-left-bottom-section">
                                <div className="Story-page-title-left-bottom-section-play-button"></div>
                                <div className="Story-page-title-left-bottom-right-section">
                                    <div className="Story-page-title-details-container">
                                        <div className="Story-page-title-details-details">
                                            <div className="Story-page-title-details-socials">
                                                <div className="Story-page-title-details-socials-item">
                                                    <div className="Story-page-title-details-social-title">JOB</div>
                                                    <div className="Story-page-title-details-social-description">
                                                        {this.state.storyPageProps.job}
                                                    </div>
                                                </div>
                                                <div className="Story-page-title-details-socials-item">
                                                    <div className="Story-page-title-details-social-title">SOCIAL</div>
                                                    <div className="Story-page-title-details-social-description">
                                                        {this.state.storyPageProps.social}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="Story-page-title-details-mission">
                                                <div className="Story-page-title-details-social-title">MISSION</div>
                                                <div className="Story-page-title-details-social-description">
                                                    {this.state.storyPageProps.mission}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Story-page-title-details-author">
                                            WITH {this.state.storyPageProps.author.toUpperCase()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Story-page-title-right-section">
                            <img className="Story-page-title-image" src={this.state.storyPageProps.images[0]} />
                        </div>
                    </div>
                    <div className="Story-page-images">
                        <img className="Story-page-image-two" src={this.state.storyPageProps.images[1]} />
                        <img className="Story-page-image-three" src={this.state.storyPageProps.images[2]} />
                    </div>
                    <div className="Story-page-text-content-container">
                        <div className="Story-page-text-content-header">
                            <div className="Story-page-dummy-right-div"></div>
                            <div className="Story-page-content-header">{this.state.storyPageProps.header}</div>
                        </div>
                        <div className="Story-page-content-inner-container">
                            <div className="Story-page-content-images-container">
                                <img className="Story-page-image-four" src={this.state.storyPageProps.images[3]} />
                                <img className="Story-page-image-five" src={this.state.storyPageProps.images[4]} />
                            </div>
                            <div className="Story-page-content-text-container">
                                <div className="Story-page-content-content-container">
                                    <div className="Story-page-content-content">
                                        {this.state.storyPageProps.content}
                                    </div>
                                </div>
                                <div className="Story-page-socials-container">
                                    {this.state.storyPageProps.socialMedias.map((socialMedia, i) => (
                                        <a href={socialMedia.url} key={i}>
                                            <div className="Story-page-socials-item">
                                                <div className="Story-page-socials-name">
                                                    {socialMedia.name.toUpperCase()}
                                                </div>
                                                <div className="Story-page-socials-arrow">
                                                    <Arrow />
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                                <div className="Story-page-content-full-conversation font-saol-display">
                                    FIND{' '}
                                    <span className="Story-page-content-full-conversation-pill-wrapper">
                                        <a href={this.state.storyPageProps.socialMedias[0].url}>
                                            <span className="Story-page-content-full-conversation-pill">
                                                {this.state.storyPageProps.socialMedias[0].name.toUpperCase()}
                                            </span>
                                        </a>
                                    </span>{' '}
                                    <span>THE </span> <span>FULL </span>
                                    <span>CONVERSATION </span>
                                    <span>ON</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Story-page-footer font-saol-display">
                    <i>Dreaming</i> is the first step to <i>believing</i>
                </div>
            </div>
        );
    }
}
