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
            <Link href="/Grid">
                <a>Grid exemple 1</a>
            </Link>
            <Link href="/Grid2">
                <a>Grid exemple 2</a>
            </Link>
            <Link href="/Grid3">
                <a>Grid exemple 3</a>
            </Link>
        </div>
    )
}