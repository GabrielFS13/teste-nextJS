import Header from './components/Header/index'
import Head from 'next/head'
import img from '../assets/salvo.png'
import Content from './components/Content/index'


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