import Link  from 'next/link';

export default function Header(){
    return(
        <div>
            <Link href='/Other'>
                <a>Oher page</a>
            </Link>
            <Link href="/Flexbox1">
                <a>Flexbox exemple 1</a>
            </Link>
            <Link href="">
                <a>Flexbox exemple 2</a>
            </Link>
        </div>
    )
}