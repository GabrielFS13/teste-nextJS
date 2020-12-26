import Link  from 'next/link';

export default function Other(){
    return(
        <div>
            <h2>Other Page</h2>
            <Link href="/">
                <a>Back to home page</a>
            </Link>
        </div>
    )
}