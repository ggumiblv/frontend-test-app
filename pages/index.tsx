import Link from 'next/link';
import React from  'react'
import style from './index.module.scss';

const Index = () => {
    return (
        <div className={style.container}> 
            <h1 className={style.title}>Пройдите по ссылке, чтобы зарегистрироваться</h1>
            <Link className={style.link} href={'/register'}> Регистрация </Link>
        </div>
    );
};

export default Index;
