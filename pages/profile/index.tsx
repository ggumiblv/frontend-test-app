'use client'
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import RecordsManager from '../../components/record-manager';
import style from './index.module.scss';

const Profile = () => {
    const user = useSelector((state: RootState) => state.user.user);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true); 
    }, []);

    if (!mounted) return null; 

    return (
        <div className={style.container}>
            <h1 className={style.title}>Личный кабинет</h1>
            {user ? (
                <div>
                    <p><span className={style.info}>Имя пользователя:</span> {user.username}</p>
                    <p><span className={style.info}>Email:</span> {user.email}</p>
                </div>
            ) : (
                <p>Пользователь не найден. Пожалуйста, зарегистрируйтесь.</p>
            )}
            <RecordsManager />
        </div>
    );
};

export default Profile;
