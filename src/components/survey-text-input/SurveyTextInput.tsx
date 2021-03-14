import React from 'react';
import './SurveyTextInput.scss';
import { ISurveyTextInputProps } from './ISurveyTextInputProps';
import { Component } from 'react';
import SurveyTextInputIconOne from './survey-text-input-icon-one/SurveyTextInputIconOne';
import SurveyTextInputIconTwo from './survey-text-input-icon-two/SurveyTextInputIconTwo';
import SurveyTextInputIconThree from './survey-text-input-icon-three/SurveyTextInputIconThree';

class SurveyTextInput extends Component<ISurveyTextInputProps> {
    multiplierConstant: number;
    validKeyCodes: Set<number>;

    constructor(props: ISurveyTextInputProps) {
        super(props);
        this.multiplierConstant = this.calculateMultiplierConstant(
            this.props.maxFontSize,
            this.props.minFontSize,
            this.props.characterLimit,
        );
        this.validKeyCodes = new Set([8, 37, 38, 39, 40]);
    }

    componentDidMount(): void {
        this.onKeyUpHandler();
    }

    calculateMultiplierConstant(maxFontSize: number, minFontSize: number, characterLimit: number): number {
        return (maxFontSize - minFontSize) / Math.sqrt(characterLimit);
    }

    calculateFontSize(multiplierConstant: number, numberOfCharacters: number, maxFontSize: number): number {
        return maxFontSize - multiplierConstant * Math.sqrt(numberOfCharacters);
    }

    modifyFontSize(): void {
        const textArea: any = document.getElementById('surveyTextArea');
        const numberOfCharacters = textArea.value.length;
        textArea.style.fontSize =
            this.calculateFontSize(this.multiplierConstant, numberOfCharacters, this.props.maxFontSize) + 'px';
    }

    onKeyUpHandler() {
        const textArea = document.getElementById('surveyTextArea');

        if (textArea != null) {
            this.modifyFontSize();
            textArea.style.height = '0px';
            textArea.style.height = textArea.scrollHeight + 'px';
        } else {
            throw new Error('textarea not found!');
        }
    }

    render(): JSX.Element {
        return (
            <div className="Survey-text-input">
                <textarea
                    className="font-aktiv-grotesk"
                    id={'surveyTextArea'}
                    onKeyUp={this.onKeyUpHandler.bind(this)}
                    maxLength={this.props.characterLimit}
                    placeholder={'Enter Text Here'}
                ></textarea>

                <div className="Survey-text-input-icon-one-container">
                    <SurveyTextInputIconOne />
                </div>

                <div className="Survey-text-input-right-icons-container">
                    <div className="Survey-text-input-icon-two-container">
                        <SurveyTextInputIconTwo />
                    </div>

                    <div className="Survey-text-input-icon-three-container">
                        <SurveyTextInputIconThree />
                    </div>
                </div>
            </div>
        );
    }
}

export default SurveyTextInput;
