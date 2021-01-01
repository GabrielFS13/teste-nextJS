import Link  from 'next/link';
import {Button} from './style'

export default function Header(){
    return(
        <div className="main-header">
            <Link href="/Flexbox1">
                <Button>Flexbox exemple 1</Button>
            </Link>
            <Link href="/Grid">
                <Button>Grid exemple 1</Button>
            </Link>
            <Link href="/Grid2">
                <Button>Grid exemple 2</Button>
            </Link>
            <Link href="/Grid3">
                <Button>Grid exemple 3</Button>
            </Link>
            <Link href="/Countdown">
                <Button>Contador Ano Novo</Button>
            </Link>
        </div>
    )
}