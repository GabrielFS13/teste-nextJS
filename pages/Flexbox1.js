import Menu from './components/Menu'
import Img1 from '../img/confused.jpg';

export default function Flexbox1(){
    return(
        <div className="flexbox1">
            <Menu />
            <h1>Flexbox</h1>

            <section className="flex">
                <div>
                <img src={Img1} />
                    <p></p>
                </div>
                <div>
                    <img src />
                    <p></p>
                </div>
                <div>
                    <img src />
                    <p></p>
                </div>
                <div>
                    <img src />
                    <p></p>
                </div>
                <div>
                    <img src />
                    <p></p>
                </div>
                <div>
                    <img src />
                    <p></p>
                </div>
            </section>
        </div>
    )
}