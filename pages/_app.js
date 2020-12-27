import '../styles/style.css';//tudo isso pra usar o style global Ohh coisa chata
import '../styles/home.css';
import '../styles/flexbox.css';
import '../styles/grid1.css';
import '../styles/grid2.css';
import '../styles/grid3.css';

export default function App({Component, pageProps}){
        return <Component {...pageProps} />
}