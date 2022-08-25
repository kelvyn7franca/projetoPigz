import styled from 'styled-components'

export const ContainerOrange = styled.div`
    background: linear-gradient(117deg, rgb(250, 100, 30) 0%, rgb(255, 136, 31) 100%) 0% 0% no-repeat padding-box padding-box transparent;
    padding: 4rem 1.6rem 4rem 1.6rem;
` 

export const TitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 0.5rem;
    width: 322px;
    height: fit-content;

    div {
        display: flex;
    }

    div > h2 {
        text-align: left;
        line-height: 4.8rem;
        font-size: 4rem;
        font-weight: 700;
        color: rgb(255, 255, 255);
        max-width: calc((100vw - 32px) - 80px);
        z-index: 20;
    }
    div > img {
        position: absolute;
        height: auto;
        width: 250px;
        transform: translate(250px, -30px);
    }

    p {
        text-align: left;
        color: white;
        line-height: 2.4rem;
        font-weight: 500;
        margin: 2rem 0 4rem 0;
        font-size: 1.6rem
    }
`