import  styled from 'styled-components'

export const ContentStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #B8E1FF;
    width: 800px;
    margin: 0 auto;
    margin-top: 150px;
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
    }
    .texto{
        width: 580px;
        padding: 10px;
    }
    .texto p{
        font-size: 20px;
    }
`