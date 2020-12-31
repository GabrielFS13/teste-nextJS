import styled from 'styled-components'

export const MenuStyle = styled.div`

    nav ul li a:hover{
        color: gold;
        text-decoration: underline;
        transform: scale(0.9);
    }
`

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