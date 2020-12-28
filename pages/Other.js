import Link  from 'next/link';
import Head from 'next/head'
import img from '../img/salvo.png'

export default function Other(){
    return(
        <div>
            <Head>
                <title>Meu Site - Other</title>
                <link rel="icon" href={img} />
            </Head>
            <h2>Nothing Here :D</h2>
            <Link href="/">
                <a>Back to home page</a>
            </Link>
        </div>
    )
}