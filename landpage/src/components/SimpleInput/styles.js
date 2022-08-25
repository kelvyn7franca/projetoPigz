import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 3rem;
    padding: 1.2rem 2.4px;

    label {
        display: flex;
        margin: 0.5rem;
        padding: 0.4rem;
        font-size: 1.7rem;
    }

    input {
        display: block;
        max-width: 33.4rem;
        width: 100%;
        min-height: 4.8rem;
        border-radius: 1.6rem;
        border: none;
        border: 1px solid #999999;
        padding: 1rem;
    }
`