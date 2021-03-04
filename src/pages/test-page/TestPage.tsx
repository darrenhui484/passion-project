import { ReactElement } from 'react';
import BoardingPass from '../../components/boardingPass/BoardingPass';
import { IBoardingPassProps } from '../../components/boardingPass/IBoardingPassProps';
import { IPassportCardProps } from '../../components/passportCard/IPassportCardProps';
import { IStoryCardProps } from '../../components/storyCard/IStoryCardProps';
import StoryCard from '../../components/storyCard/StoryCard';
import './TestPage.scss';

const passportCardProps: IPassportCardProps = {
    countryFrom: 'USA',
    countryTo: 'AUS',
    date: '01.01.21',
    seat: 'PASSION',
    title: 'DEVELOPING COUNTRY',
    description: 'asdfi ajsdfoi jaweofija woeifj aoei fjao ewi fjs',
    qrCodeValue: 'test',
};

const boardingPassProps: IBoardingPassProps = {
    fromCityCountry: 'SYDNEY, AUSTRALIA',
    toCityCountry: 'PARIS, FRANCE',
    mainQuestion: 'WHAT IS THE ONE THING YOU WOULD LIKE TO SEE CHANGE IN THE WORLD? WHY?',
    mainAnswer: `I would like to see a world that isn’t driven by greed and profit. I think many of the issues
    that we see in our world and society today, such as environmental destruction and exploitation,
    are caused by a small number of powerful and greedy individuals who benefit from it. I would
    like to see a world where these people and corporations are held accountable for their actions
    and the damage they have caused.`,
    secondQuestion: 'I AM GRATEFUL …',
    secondAnswer: `that I live in a healthy, functioning body and have been brought up in a safe environment
    where I have the privilege to choose what I want to do in life. I am grateful that I have a
    small network of supportive people around me who I can be myself with.`,
    passportCardProps,
    questionCount: 3,
    currentQuestionNumber: 0,
};

const storyCardProps: IStoryCardProps = {
    title: 'BODY CONFIDENCE',
    author: 'Olivia Rush',
    imageUrl:
        'https://www.thesprucepets.com/thmb/UCGjJ5v6HgPJJ7OOtS5J3ijUBZ8=/1080x1350/filters:fill(auto,1)/35493166_2113126082300521_5592447779063463936_n-5b69b61946e0fb002562c234.jpg',
    storyId: 'test1',
};

function TestPage(): ReactElement {
    return (
        <div className="Test-page">
            <BoardingPass {...boardingPassProps} />
            <StoryCard {...storyCardProps} />
        </div>
    );
}

export default TestPage;
