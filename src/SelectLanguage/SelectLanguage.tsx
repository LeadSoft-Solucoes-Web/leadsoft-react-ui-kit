import React, { useState } from 'react';
import { Container, ContainerFlag, ContainerSelect, customStyles } from './style';
import Select from 'react-select';
import { languageOptions } from './moc';
import { LanguageOptionType } from './types';

interface SelectLanguageProps {
    options?: LanguageOptionType[],
    onChangeValue: (item: LanguageOptionType) => void;
}

const SelectLanguage: React.FC<SelectLanguageProps> = (props) => {
    const [flag, setFlag] = useState<any>(null);

    const onChangeSelect = (item: LanguageOptionType) => {
        setFlag(item?.flag)
        props.onChangeValue(item);
    }
    
    return (
        <Container>
            <ContainerFlag>
                {flag ? flag :
                    '---'}
            </ContainerFlag>
            <ContainerSelect>
                <Select isSearchable={false} options={props.options ? props.options : languageOptions} styles={customStyles} onChange={(item)=>onChangeSelect} />
            </ContainerSelect>
        </Container>
    );
};

export default SelectLanguage;