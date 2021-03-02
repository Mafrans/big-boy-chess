import * as React from 'react';

export default function Home(props) {
    const [text, setText] = React.useState('⚛ Hello React!');

    return (
        <>
            <p>{ text }</p>
            <input type={text} onChange={(e) => setText(e.target.value)} />
        </>
    );
}