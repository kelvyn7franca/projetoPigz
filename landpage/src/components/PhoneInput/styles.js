import styled from 'styled-components'

export const Container = styled.div`

    display: flex;
    flex-direction: column;

    label {
        display: flex;
        margin: 0.5rem;
        font-size: 1.7rem;
        padding: 0 0 0.2rem .4rem
    }

    .inputContainer {
        display: flex;
        width: 100%;
        border: 1px solid #999999;
        border-radius: 1.6rem;
        max-width: 33.4rem;
        width: 100%;
        min-height: 4.8rem;
    }

    .region {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 1.6rem;
        background-color: #F0F0F0;
        padding: 1.2rem;
    }

    .brasilFlag {
        width: 2.4rem;
        height: 2.4rem;
    }

    .ddd {
        outline: none;
        border-style: none;
        text-decoration: none;
        background: transparent;
        border: none;
        padding-left: 0.5rem;
    }

    .textInput {
        border: none;
        padding: 1rem;
        outline: none;
    }
`