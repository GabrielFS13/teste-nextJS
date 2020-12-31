import  styled from 'styled-components'


export const Grid2_Style = styled.div`
    .grid2 {
  display: grid;
  grid-template-columns: 1fr 200px;
  grid-gap: 20px;
  max-width: 800px;
  margin: 0 auto;
}
.sidebar > div {
  margin-bottom: 10px;
  border-bottom: 4px solid gold;
}
.sidebar div img {
  width: 100%;
}
.sidebar div:hover{
  transition: all .2s;
  transform: scale(0.9);
}
@media (max-width: 720px) {
  .grid2 {
    grid-template-columns: 1fr;
  }
  .siderbar {
    display: flex;
    overflow: scroll;
  }
  .sidebar > div {
    flex: 1 0 100px;
    margin: 0 15px;
    width: 250px;
    height: 100px;
    padding: 15px;
    border: none;
  }
}

`

export const Title = styled.h1`
  margin-top: 100px;
  text-align: center;
`

export const Bg = styled.div`
  width: 80%;
  background-color: #B8E1FF;
  margin: 0 auto;
  border-radius: 10px;
  padding-bottom: 20px;


  @media (max-width: 720px){
      width: 100%;
    }

`