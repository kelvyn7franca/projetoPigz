import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    width: 414px;
    height: 80px;
    z-index: 90;
    background-color: white;
    opacity: 1;
    justify-content: space-between;
    padding: 30px 20px 20px 20px;
    position: sticky;
    top: 0;
    left: 0;

    img {
        height: 42px;
    }

    button {
        width: 158px;
        height: 40px;
        border-radius: 32px;
        border: none;
        background: linear-gradient(257deg, rgb(250, 100, 30) 0%, rgb(255, 136, 31) 100%) 0% 0% no-repeat padding-box padding-box transparent;
        box-shadow: rgb(250 100 30 / 53%) 0px 2px 20px 2px;
        color: white;
    }
`



