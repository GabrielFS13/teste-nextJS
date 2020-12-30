import Link  from 'next/link';
import img from './salvo.png';
import {Button} from '../../styles/header'

export default function Menu(){ 
    return(
        <header className="header">
                <Link href="#">
                    <div className="logo-item">
                    <a><img src={img}/></a>
                    </div>
                </Link>
                <nav>
                    <ul className="menu">
                        <li>
                            <Link href="/">
                                <Button>Voltar</Button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
    )
}