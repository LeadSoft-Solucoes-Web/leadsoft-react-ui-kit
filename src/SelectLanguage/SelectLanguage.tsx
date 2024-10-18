import React, { useState } from 'react';
import { Container, ContainerFlag, ContainerSelect, customStyles } from './style';
import Select from 'react-select';
import { languageOptions } from './moc';
import { LanguageOptionType } from './types';

interface SelectLanguageProps {
    options?: LanguageOptionType[],
}

const SelectLanguage: React.FC<SelectLanguageProps> = (props) => {

    return (
        <Container>
            <ContainerFlag>
                ---
            </ContainerFlag>
            <ContainerSelect>
                <Select options={props.options ? props.options : languageOptions} styles={customStyles}/>
            </ContainerSelect>
        </Container>
    );
};

export default SelectLanguage;