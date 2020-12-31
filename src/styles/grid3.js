import styled from 'styled-components'

export const Grid3_Style = styled.div`
    .grid3 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  margin: 0 auto;
  max-width: 800px;
  padding: 10px;
}

.grid3-item:nth-child(1) {
  grid-row: 1 / 3;
}
.grid3-item {
  display: grid;
}
.grid3-item img {
  grid-column: 1;
  grid-row: 1/3;
  align-self: end;
}
.grid3-item p {
  background: rgba(0, 0, 0, 0.6);
  padding: 10px;
  color: white;
  grid-column: 1;
  grid-row: 2;
  align-self: end;
}
.confused {
  height: 100%;
}
`

export const Title = styled.h1`
  text-align: center;
  margin-top: 100px;
`

export const Bg = styled.div`
  width: 80%;
  background-color: #B8E1FF;
  margin: 0 auto;
  border-radius: 10px;
`
