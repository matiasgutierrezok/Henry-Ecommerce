import React from 'react';
import './Home.css'

export default function Home() {
    return (
        <div className="background">
            <img src={require('./desk.jpg')} className="back-image"/>
            <div className="title">
                <h2>Compra rápido y fácil,</h2>
                <h1 className="tu-casa-text">desde tu casa</h1>
            </div>
        </div>
    );
}