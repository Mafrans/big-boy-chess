import * as React from 'react';
import { io } from "socket.io-client";

export default function Lobby(props) {
    const socket = io();
    return (
        <>
            <h1>Welcome to ze lobby</h1>
        </>
    );
}