import foto from '../../../assets/padoruKazuma.jpg'
import {ContentStyle}  from './style'

export default function Content(){
    return(
        <>
        <ContentStyle>
            <div className="foto">
                <img src={foto} />
            </div>
            <div className="texto">
                <p>
                    Olá, meu nome é Gabriel, sou um estudante e estou cursando Técnico em Desenvolvimento de Sistemas.
                    Durante o curso eu aprendi várias coisas, mas o que mais me deixou interessado na programação foi a
                    área da WEB.
                </p>
            </div>
        </ContentStyle>
        </>
    )
}