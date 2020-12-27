import Link  from 'next/link';
export default function Menu(){ 
    return(
        <header className="header">
                <Link href="#">
                    <a>Logo</a>
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