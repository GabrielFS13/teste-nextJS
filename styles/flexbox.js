import  styled from 'styled-components';

export const Title = styled.h1`
    h1{
    text-align: center;
    margin-top: 100px;
    }

`

export const Flexbox = styled.h1`
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
  margin: 10px;
}
p{
    font-weight: normal;
}
`