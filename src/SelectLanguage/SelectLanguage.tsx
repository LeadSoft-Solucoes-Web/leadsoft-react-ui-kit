import React, { useEffect, useState } from 'react';
import { Container, ContainerFlag, ContainerSelect, customStyles } from './style';
import Select from 'react-select';
import { languageOptions } from './moc';
import { LanguageOptionType } from './types';

interface SelectLanguageProps {
    options?: LanguageOptionType[];
    onChangeValue: (item: LanguageOptionType) => void;
    value?: LanguageOptionType;
}

const SelectLanguage: React.FC<SelectLanguageProps> = (props) => {
    const onChangeSelect = (item: LanguageOptionType | null) => {
        console.log(item)
        if (item) {
            props.onChangeValue(item);
        }
    };

    return (
        <Container>
            <ContainerFlag>
                {props.value ? `${props.value.flag}` : '---'}
            </ContainerFlag>
            <ContainerSelect>
                <Select
                    isSearchable={false}
                    value={props.value ? props.value : null}
                    options={props.options || languageOptions}
                    styles={customStyles}
                    onChange={(item) => onChangeSelect(item as LanguageOptionType)}
                />
            </ContainerSelect>
        </Container>
    );
};

export default SelectLanguage;
