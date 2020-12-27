import Link  from 'next/link';
import img from './salvo.png';
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
                            <Link href="#">
                                <a>Sobre</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Produtos</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Contato</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Voltar</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
    )
}