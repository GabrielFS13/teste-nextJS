import Menu from './components/Menu/index';
import img from '../assets/salvo.png'
import Img1 from '../assets/confused.jpg';
import Img2 from '../assets/photo.jpg';
import Img3 from '../assets/pai_da_coraline.jpg';
import Img4 from '../assets/padoruKazuma.jpg';
import Img5 from '../assets/salvo.png';
import { Title, Flexbox, Bg } from '../styles/flexbox'
import Head from 'next/head'



export default function Flexbox1(){
    return(
        <> 
            <div className="flexbox1">
            <Head>
                <title>Meu Site - Flexbox</title>
                <link rel="icon" href={img} />
            </Head>
                <Menu />
                <Bg>
                <Title>Flexbox</Title>
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
                </Bg>
            </div>
           
        </>
    )
}