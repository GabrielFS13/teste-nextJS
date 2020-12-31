import styled from 'styled-components'
import React from 'react'
//Isso para evitar erro no deploy na Vercel
export default function react(){
    return( <div></div>)
}

export const Button = styled.a`
    padding: 5px;
    :hover{
        text-decoration: underline;
        color: gold;
        cursor: pointer;
        transform: scale(0.9);
        transition: all .4s;
        }
`