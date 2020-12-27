import Link  from 'next/link';
import { Title, TitleMenor } from './styles'


export default function StyledComponents(){
    return(
        <>

        

            <Title fontSize={20}>
                StyledComponents
                <span>Texto menorzin</span>
            </Title>

            <TitleMenor>
                Menorzinn
                <div className="amanhã"></div>
            </TitleMenor>

            <Link href="/">
                <a>Voltar</a>
            </Link>
        </>
    )
}