import React from 'react';
import Link  from 'next/link';

class Index extends React.Component {
    render() {
        return(
            <div>
                <h1>Hello World!</h1>
                <Link href='/Other'>Home</Link>
            </div>
        )
    }
}

export default Index