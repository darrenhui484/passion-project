import { IPassportCardProps } from '../passportCard/IPassportCardProps';

// TODO: Maybe only store city,
// then we can use the country from the passport card props
export interface IBoardingPassProps {
    fromCityCountry: string;
    toCityCountry: string;
    mainQuestion: string;
    mainAnswer: string;
    secondQuestion: string;
    secondAnswer: string;
    questionCount: number;
    currentQuestionNumber: number;
    passportCardProps: IPassportCardProps;
}
