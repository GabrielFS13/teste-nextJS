import  styled from 'styled-components'
import React from 'react'

export default function react(){
    return( <div></div>)
}

export const ContentStyle = styled.div`
    width: 80%;
    background-color: #B8E1FF;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 150px auto;
    padding: 25px;
    border-radius: 15px;

    .foto{
        width: 120px;
        height: 120px;
    }
    .foto img{
        width: 100%;
        max-width: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
    .texto{
        width: 580px;
        padding: 10px;
        margin-left: 10px;
    }
    .texto p{
        font-size: 20px;
    }
`