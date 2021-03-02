import React, { useState } from 'react';

export default function App(props) {
    const [text, setText] = useState('⚛ Hello React!');

    return (
        <>
            <p>{ text }</p>
            <input type={text} onChange={(e) => setText(e.target.value)} />
        </>
    );
}