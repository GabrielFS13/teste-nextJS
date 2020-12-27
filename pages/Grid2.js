import Menu from './components/Menu';
import Img1 from '../img/confused.jpg';
import Img2 from '../img/photo.jpg';
import Img3 from '../img/pai_da_coraline.jpg';
import Img4 from '../img/padoruKazuma.jpg';
import Img5 from '../img/salvo.png';

export default function Grid2(){
    return(
        <div className="grid-2">
            <Menu />
            <h1>Grid 2</h1>
            <section className="grid2">
              <div className="video">
              <img src={Img1} />
                    <h2>Video legal UwU</h2>
              </div>
              <div className="sidebar">
                <div>
                    <img src={Img2} />
                    <p>Video 1</p>
                </div>
                <div>
                    <img src={Img4} />
                    <p>Video 2</p>
                </div>
                <div>
                    <img src={Img3} />
                    <p>Video 3 </p>
                </div>
                <div>
                    <img src={Img5} />
                    <p>Video 4 </p>
                </div>
              </div>
            </section>
        </div>
    )
}