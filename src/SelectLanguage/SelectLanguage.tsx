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
    const [itemState, setItemState] = useState<LanguageOptionType | null>(null);

    const onChangeSelect = (item: LanguageOptionType | null) => {

        if (item){
            setItemState(item)
            props.onChangeValue(item);
        }
    }
    
    return (
        <Container>
            <ContainerFlag>
                {itemState ?  `${itemState.flag}`  :
                    '---'}
            </ContainerFlag>
            <ContainerSelect>
                <Select isSearchable={false} options={props.options ? props.options : languageOptions} styles={customStyles} onChange={(item)=>{onChangeSelect(item)}} />
            </ContainerSelect>
        </Container>
    );
};

export default SelectLanguage;