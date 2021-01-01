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
    }

    setInterval(function (){
        newYear();
    },1000)
     

    return(
        <>  
            <CountDiv>
                <Menu />
                <div className="container">
                    <h2><span>Contador para o Ano Novo!</span> 2021</h2>
                    <div className="countdown">
                        <div id="dia">NA</div>
                        <div id="horas">NA</div>
                        <div id="minutos">NA</div>
                        <div id="segundos">NA</div>
                    </div>
                </div>
            </CountDiv>
        </>
    )
}