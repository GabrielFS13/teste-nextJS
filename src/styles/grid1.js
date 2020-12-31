import  styled from 'styled-components'

export const Grid_Style = styled.div`
    margin: 0px;
    .grid1{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 800px;
    margin: 0 auto;
    grid-gap: 20px;
  }
  .grid1 > div:nth-child(n + 4) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  align-items: center;
}
.grid1 > div.anuncio {
  grid-column: 1;
  grid-row: 2 / 5;
  display: block;
  border-top: 10px solid gold;
}
p{
    font-weight: normal;
}
@media (max-width: 720px) {
  .grid1 {
    grid-template-columns: repeat(2, 1fr);
  }
  .grid1 > div:nth-child(n + 4) {
    display: block;
  }
  .grid1 > div.anuncio {
    grid-column: auto;
    grid-row: auto;
    order: -1;
  }
}
`;


export const Title = styled.h1`
  margin-top: 100px;
  text-align: center;
`

export const Bg = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: #B8E1FF;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;

  @media (max-width: 720px){
      width: 100%;
    }
`