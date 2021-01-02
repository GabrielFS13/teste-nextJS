import {CountDiv} from '../styles/countdown'
import Menu from './components/Menu/index';

export default function Countdown(){

    var countDate = new Date('Jan 1, 2022, 00:00:00').getTime();

    function newYear(){
        var now = new Date().getTime();

        var gap = countDate - now;

        var second = 1000;
        var minute = second * 60;
        var hours = minute * 60;
        var day = hours * 24;

        var d = Math.floor(gap / (day));
        var h = Math.floor(gap % (day) / (hours));
        var m = Math.floor(gap % (hours) / minute);
        var s = Math.floor(gap % (minute) / second);

        document.getElementById('dia').innerText = d;
        document.getElementById('horas').innerText = h;
        document.getElementById('minutos').innerText = m;
        document.getElementById('segundos').innerText = s;

        document.querySelector("div#pDias").innerHTML = 365 - d;
        document.querySelector("div#pHoras").innerHTML = 24 - h;
        document.querySelector("div#pMinutos").innerHTML = 60 - m;
        document.querySelector("div#pSegundos").innerHTML = 60 - s;
        

    }

    setInterval(function (){
        newYear();
    },1000)
    
     

    return(
        <>  
            <CountDiv>
                <Menu />
                <div className="container">
                    <h2><span>Contador para o Ano Novo!</span> 2022</h2>
                    <div className="countdown">
                        <div id="dia"></div>
                        <div id="horas"></div>
                        <div id="minutos"></div>
                        <div id="segundos"></div>
                    </div>
                </div>
                
                <div className="passou">
                    <h2><span>Já se passaram... </span></h2>
                    <div className="contador_dias">
                        <div id="pDias"></div>
                        <div id="pHoras"></div>
                        <div id="pMinutos"></div>
                        <div id="pSegundos"></div>
                    </div>
                </div>
            </CountDiv>
        </>
    )
}