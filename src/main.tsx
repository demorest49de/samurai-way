import React from 'react';
import s from './App.module.css'
import picture from"./Assets/img/premium_photo-1669324357471-e33e71e3f3d8.avif"

export const Main = () => {
    return (
        <main className={s.content}>
            <img src={picture} alt="picture" style={{objectFit: "cover", width: "70%"}} />
        </main>
    );
};