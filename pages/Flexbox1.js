import Menu from './components/Menu';
import Img1 from '../img/confused.jpg';
import Img2 from '../img/photo.jpg';
import Img3 from '../img/pai_da_coraline.jpg';
import Img4 from '../img/padoruKazuma.jpg';
import Img5 from '../img/salvo.png';
import { Title, Flexbox } from '../styles/flexbox'


export default function Flexbox1(){
    return(
        <>
            <div className="flexbox1">
                <Menu />
                <Title><h1>Flexbox</h1></Title>
            <Flexbox>
                <section className="flex">
                    <div>
                    <img src={Img1} />
                        <p>Legenda 1</p>
                    </div>
                    <div>
                        <img src={Img2} />
                        <p>Legenda 2</p>
                    </div>
                    <div>
                        <img src={Img5} />
                        <p>Legenda 3</p>
                    </div>
                    <div>
                        <img src={Img4} />
                        <p>Legenda 4</p>
                    </div>
                    <div>
                        <img src={Img3} />
                        <p>Legenda 5</p>
                    </div>
                    <div>
                        <img src={Img2} />
                        <p>Legenda 6</p>
                    </div>
                </section>
                </Flexbox>
            </div>
        </>
    )
}