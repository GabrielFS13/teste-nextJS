import  styled from 'styled-components'

export const Title = styled.h1`
    color: #F00;
    background: #000;
    font-size: ${(props) =>`${props.fontSize}px`};

    span{
        font-size: 12px;
    }
`;

export const TitleMenor = styled(Title)`
        color: #00F;
        font-size: 8px;

        .amanhã{
            width: 200px;
            height: 150px;
            background: #444;
        }
`;