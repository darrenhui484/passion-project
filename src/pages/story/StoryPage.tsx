import React, { Component, ReactElement } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { IStoryPageProps } from './IStoryPageProps';
import './StoryPage.scss';

const catPic =
    'https://www.thesprucepets.com/thmb/UCGjJ5v6HgPJJ7OOtS5J3ijUBZ8=/1080x1350/filters:fill(auto,1)/35493166_2113126082300521_5592447779063463936_n-5b69b61946e0fb002562c234.jpg';

const pageProps = {
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
                <div className="Story-page-title-container"></div>
            </div>
        );
    }
}
