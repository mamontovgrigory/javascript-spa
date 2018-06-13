import React from 'react';

// import { Header } from '../../components';
const style = require('./style.less');

class App extends React.Component {
    render() {
        const {children} = this.props;
        return (
            <section className={style.App}>
                {/*<Header/>*/}
                {children}
            </section>
        )
    }
}

export { App }