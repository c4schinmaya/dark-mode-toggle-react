import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client'
import App from './App.jsx';

function Main(){
    return (
        <App></App>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main/>)

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App />);