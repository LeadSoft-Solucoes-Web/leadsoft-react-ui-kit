import React, { useEffect, useState } from 'react';
import { Container, ContainerFlag, ContainerSelect, customStyles } from './style';
import Select from 'react-select';
import { languageOptions } from './moc';
import { LanguageOptionType } from './types';

interface SelectLanguageProps {
    options?: LanguageOptionType[];
    onChangeValue: (item: string) => void;
    value?: string | null;
    selectedColor?: string;
    hoverColor?: string;
}

const SelectLanguage: React.FC<SelectLanguageProps> = (props) => {
    const [valueSelectedState, setValueSelectedState] = useState<LanguageOptionType | null | undefined>(null);

    const onChangeSelect = (item: LanguageOptionType | null) => {
        if (item) {
            props.onChangeValue(item.value);
            setValueSelectedState(item);
        }
    };

    const onValue = () => {
        let valueSelected = null;

        if (props.options) {
            valueSelected = props.options.find(v => v.value === props.value?.replace('-', '_'));
        } else {
            valueSelected = languageOptions.find(v => v.value === props.value?.replace('-', '_'));
        }

        return valueSelected;
    };

    useEffect(() => {
        if (props.value) {
            setValueSelectedState(onValue());
        }
    }, [props.value]);

    const dynamicStyles = {
        ...customStyles,
        option: (provided: any, state: any) => ({
            ...provided,
            backgroundColor: state.isSelected
                ? props.selectedColor || 'rgba(100, 149, 237, 0.8)'
                : state.isFocused
                    ? props.hoverColor || 'rgba(135, 206, 250, 0.5)'
                    : 'white',
            color: state.isSelected ? 'white' : 'black',
            cursor: 'pointer',
            zIndex: 1000
        }),
    };

    return (
        <Container>
            <ContainerFlag>
                {valueSelectedState ? valueSelectedState.flag : '---'}
            </ContainerFlag>
            <ContainerSelect>
                <Select
                    isSearchable={false}
                    value={valueSelectedState}
                    options={props.options || languageOptions}
                    styles={dynamicStyles}
                    onChange={(item) => onChangeSelect(item as LanguageOptionType)}
                />
            </ContainerSelect>
        </Container>
    );
};

export default SelectLanguage;
