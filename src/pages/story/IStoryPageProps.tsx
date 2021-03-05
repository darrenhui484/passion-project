import { RouteComponentProps } from 'react-router-dom';

export interface IStoryPageProps extends RouteComponentProps<{ storyId: string }> {
    title: string;
    author: string;
    mission: string;
    job: string;
    social: string;
    images: string[];
    header: string;
    content: string;
    socialMedias: SocialMedia[];
}

interface SocialMedia {
    name: string;
    url: string;
}
