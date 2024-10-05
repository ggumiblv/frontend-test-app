'use client'
import React from 'react';
import RegistrationForm from '../../components/registration-form';
import style from './index.module.scss';

const Registration = () => {
    return (
        <div className={style.container}>
            <h1 className={style.title}>Заполните форму</h1>
            <RegistrationForm />
        </div>
    );
};

export default Registration;
