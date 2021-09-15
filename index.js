import React from 'react';
import ReactDOM from 'react-dom';
import Text from './components/text';

const App = () => {
    return(<>
        <Text/>
        <Text/>
        <Text/>
    </>)
}

ReactDOM.render(<App />, document.getElementById('app'));