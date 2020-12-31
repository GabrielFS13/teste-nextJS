import  styled from 'styled-components';

export const Title = styled.h1`
    text-align: center;
    margin-top: 100px;
    
`

export const Flexbox = styled.div`
.flex div img {
  width: 100%;
}
.flex div {
  width: 350px;
  height: 150px;
}
.flex {
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 0 auto;
}
.flex > div {
  flex: 1 1 200px;
  margin: 15px;
}
p{
    font-weight: normal;
}
`

export const Bg = styled.div`
    width: 80%;
    margin: 0 auto;
    background-color: #B8E1FF;
    margin-top: 100px;
    border-radius: 10px;
    padding-bottom: 15px;
`