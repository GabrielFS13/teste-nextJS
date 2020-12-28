import Menu from './components/Menu';
import Img1 from '../img/confused.jpg';
import Img2 from '../img/photo.jpg';
import Img3 from '../img/pai_da_coraline.jpg';
import Img4 from '../img/padoruKazuma.jpg';
import Img5 from '../img/salvo.png';
import { Grid3_Style, Title } from '../styles/grid3'


export default function Grid2(){
    return(
        <div className="grid-3">
            <Grid3_Style>
            <Menu />
            <Title>Grid 3</Title>

            <section className="grid3">
                <div className="grid3-item">
                <img src={Img1} className="confused"/>
                    <p>Legenda 1</p>
                </div>
                <div className="grid3-item">
                    <img src={Img2} />
                    <p>Legenda 2</p>
                </div>
                <div className="grid3-item">
                    <img src={Img5} />
                    <p>Legenda 3</p>
                </div>
            </section>
            </Grid3_Style>
        </div>
    )
}