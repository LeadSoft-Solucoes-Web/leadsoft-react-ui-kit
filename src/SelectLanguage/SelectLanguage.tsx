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
    const [valueSelectedState, setValueSelectedState] = useState<LanguageOptionType | null>()

    const onChangeSelect = (item: LanguageOptionType | null) => {
        if (item) {
            props.onChangeValue(item.value);
        }
    };

    const onValue = () => {
        var valueSelected = null;
        
        if(props.options){
            valueSelected = props.options.find(v => v.value === props.value?.replace('-', '_'))
        }else{
            valueSelected = languageOptions.find(v => v.value === props.value?.replace('-', '_'))
        }

        return valueSelected;
    }

    useEffect(()=>{
        if (props.value){
            setValueSelectedState(onValue())
        }
    }, []);
    
    return (
        <Container>
            <ContainerFlag>
                {valueSelectedState ? `${valueSelectedState.flag}` : '---'}
            </ContainerFlag>
            <ContainerSelect>
                <Select
                    isSearchable={false}
                    value={valueSelectedState}
                    options={props.options || languageOptions}
                    styles={customStyles}
                    onChange={(item) => onChangeSelect(item as LanguageOptionType)}
                />
            </ContainerSelect>
        </Container>
    );
};

export default SelectLanguage;
