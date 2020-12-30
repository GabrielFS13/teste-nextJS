import Header from './components/Header'
import Head from 'next/head'
import img from '../img/salvo.png'
import Content from './components/Content'


const App = () => {
    return(
        <div>
            <Head>
                <title>Meu Site - Gabriel Falcão</title>
                <link rel="icon" href={img} />
            </Head>
            <Header />
            <Content />
        </div>
    )
}
  

export default App