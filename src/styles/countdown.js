import styled from 'styled-components'
import React from 'react'
//Isso para evitar erro no deploy na Vercel
export default function react(){
    return( <div></div>)
}

export const CountDiv = styled.div`
    
  .container{
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%,-50%);
      background-color: #B8E1FF;
      padding: 10px;
      border-radius: 10px;
      width: 80%;
      height: 80%;
  }

  .container h2{
      text-align: center;
      font-style: 20em;
      line-height: 0.7em;
      color: #333;
  }
  .container h2 span{
      display: block;
      font-weight: 300;
      letter-spacing: 2px;
      font-size: 1em;
      padding: 10px;
  }

  .countdown{
      display: flex;
      flex-wrap: wrap;
      margin-top: 10px;
      text-align: center;
      justify-content: center;
  }

  .countdown div{
      position: relative;
      width: 100px;
      height: 100px; 
      line-height: 100px;
      text-align: center;
      background-color: #4e9cd1;
      color: #FFF;
      margin: 0 15px;
      font-style: 3em;
      font-weight: 500;
      border-radius: 50%;
      margin-top: 25px;
  }

  .countdown div:before{
      content: '';
      position: absolute;
      bottom: -30px;
      left: 0;
      width: 100%;
      height: 35px;
      color: #333;
      font-style: 0.35em;
      line-height: 35px;
      font-weight: 300px;
  }

  .countdown div#dia:before{

    content: 'Dia(s)';

  }
  .countdown div#horas:before{

    content: 'Hora(s)';

    }
    .countdown div#minutos:before{

    content: 'Minuto(s)';

}
.countdown div#segundos:before{

    content: 'Segundo(s)';

}

.passou{
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.passou h2{
      text-align: center;
      font-style: 20em;
      line-height: 0.7em;
      color: #333;
  }
  .passou h2 span{
      display: block;
      font-weight: 300;
      letter-spacing: 2px;
      font-size: 1em;
      padding: 10px;
  }

.contador_dias div#pDias:before{

content: 'Dia(s)';

}
.contador_dias div#pHoras:before{

content: 'Hora(s)';

}
.contador_dias div#pMinutos:before{

content: 'Minuto(s)';

}
.contador_dias div#pSegundos:before{

content: 'Segundo(s)';

}

.contador_dias{
      display: flex;
      flex-wrap: wrap;
      margin-top: 10px;
      text-align: center;
      justify-content: center;
  }

  .contador_dias div{
      position: relative;
      width: 100px;
      height: 100px; 
      line-height: 100px;
      text-align: center;
      background-color: #4e9cd1;
      color: #FFF;
      margin: 0 15px;
      font-style: 3em;
      font-weight: 500;
      border-radius: 50%;
      margin-top: 25px;
  }

  .contador_dias div:before{
      content: '';
      position: absolute;
      bottom: -30px;
      left: 0;
      width: 100%;
      height: 35px;
      color: #333;
      font-style: 0.35em;
      line-height: 35px;
      font-weight: 300px;
  }

  @media (max-width: 600px){
      body{
          margin-bottom: 30px;
      }
      .container{
          margin-top: 30px;
          height: 90%;
      }
      .passou{
          margin-top: 200px;
      }
  }

  @media (max-width: 500px){
      .container{
          height: 100%;
      }
      .passou{
          margin-top: 150px;
      }
  }
  @media (max-width: 350px){
      .passou{
          margin-top: 200px;
      }
  }

`