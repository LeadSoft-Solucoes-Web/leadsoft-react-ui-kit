import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: auto;
    border: 1px solid rgb(29 91 223);
    border-radius: 8px;
    display: flex;
    flex-direction: row;
`;

export const ContainerFlag = styled.div`
    display: flex;
    flex: 1;
    background-color: rgb(245, 245, 245);
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    border: 0px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
`;

export const ContainerSelect = styled.div`
    flex: 3;
    background-color: transparent;
    width: 100%;
    height: auto;
    border: 0px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
`;

export const customStyles = {
    control: (provided: any) => ({
        ...provided,
        borderColor: 'transparent',
        border: '0px',
        boxShadow: 'none'
    }),
    menu: (provided: any) => ({
        ...provided,

    }),
};


