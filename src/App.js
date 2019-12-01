import React, { useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from './global'


export default () =>
{
    const [count, setCount] = useState(0)

    return (
        <>
            <GlobalStyle />
            <Box>
                <Number> {count} </Number>
                <ButtonBox>
                    <Button onClick={() => setCount(count -1)}> -1 </Button>
                    <Button onClick={() => setCount(count + 1)}> +1 </Button>
                </ButtonBox>
            </Box>
        </>
    )
}

const Box = styled.div`
    height: 30vw;
    width: 20vw;

    margin: 6vw auto;

    background-color: rgba(96, 125, 139, 0.2);
    border-radius: 10px;
    box-shadow: 0 8px 5px 0 rgba(0, 0, 0, 0.03);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Number = styled.h1`
    color: #607D8B;
    font-family: Hind;
    font-size: 80px;
    font-weight: 600;
    line-height: 96px;
    text-align: center;
`

const ButtonBox = styled.div`
    height: 60px;
    width: 60%;
    margin-top: 5vw;

    display: flex;
    justify-content: space-between;
    align-items: space-between;
`

const Button = styled.button`
    display: inline-block;
    background: rgba(18, 26, 37, 0.7);   
    color: white;
    text-transform: capitalize;
    font-size: 21px;

    padding: 15px 30px;

    transition: all .3s ease-in-out;

    &:hover {
        background: transparent;
        color: #607D8B;
    }

    text-decoration: none;
    cursor: pointer;
`