import Header from './components/Header'
import Head from 'next/head'
import img from '../img/salvo.png'



const App = () => {
    return(
        <div>
            <Head>
                <title>Meu Site - Gabriel Falcão</title>
                <link rel="icon" href={img} />
            </Head>

            <Header />
        </div>
    )
}
  

export default App