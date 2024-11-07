import React, { useEffect, useState } from 'react';
import { Container, ContainerFlag, ContainerSelect, customStyles } from './style';
import Select from 'react-select';
import { languageOptions } from './moc';
import { LanguageOptionType } from './types';

interface SelectLanguageProps {
    options?: LanguageOptionType[];
    onChangeValue: (item: string) => void;
    value?: string | null;
}

const SelectLanguage: React.FC<SelectLanguageProps> = (props) => {
    const onChangeSelect = (item: LanguageOptionType | null) => {
        if (item) {
            props.onChangeValue(item.value);
        }
    };

    const valueSelected = languageOptions.find(v => v.value === props.value);

    return (
        <Container>
            <ContainerFlag>
                {valueSelected ? `${valueSelected.flag}` : '---'}
            </ContainerFlag>
            <ContainerSelect>
                <Select
                    isSearchable={false}
                    value={valueSelected ? valueSelected: null}
                    options={props.options || languageOptions}
                    styles={customStyles}
                    onChange={(item) => onChangeSelect(item as LanguageOptionType)}
                />
            </ContainerSelect>
        </Container>
    );
};

export default SelectLanguage;
