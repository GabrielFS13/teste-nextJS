import foto from '../../img/padoruKazuma.jpg'
import {ContentStyle}  from '../../styles/content'

export default function Content(){
    return(
        <>
        <ContentStyle>
            <div className="foto">
                <img src={foto} />
            </div>
            <div className="texto">
                <p>
                    Oi meu nome é Gabriel, sou um estudante e estou cursando Técnico em Desenvolvimento de Sistemas.
                    O Durante o curso eu aprendi várias coisas, mas o que mais me deixou interessado na programação foi a
                    área da WEB.
                </p>
            </div>
        </ContentStyle>
        </>
    )
}