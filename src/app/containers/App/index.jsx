import React from 'react';

require('./style.less');

class App extends React.Component {
    render() {
        const {children} = this.props;
        return (
            <section className="App">
                {children}
            </section>
        )
    }
}

export { App }