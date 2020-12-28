import Menu from './components/Menu';
import img from '../img/salvo.png'
import Img1 from '../img/confused.jpg';
import Img2 from '../img/photo.jpg';
import Img3 from '../img/pai_da_coraline.jpg';
import Img4 from '../img/padoruKazuma.jpg';
import Img5 from '../img/salvo.png';
import { Grid_Style, Title } from '../styles/grid1'
import Head from 'next/head'


export default function Grid(){
    return(
        <Grid_Style>
            <Head>
                <title>Meu Site - Grid</title>
                <link rel="icon" href={img} />
            </Head>
            <Menu />
            <Title>Grid 1</Title>
            <section className="grid1">
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
                <div className="anuncio">
                    <img src={Img2} />
                    <p>Anuncio</p>
                </div>
            </section>
        </Grid_Style>
    )
}