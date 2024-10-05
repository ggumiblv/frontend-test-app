import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Profile = () => {
    const user = useSelector((state: RootState) => state.user.user);

    return (
        <div>
            <h1>Личный кабинет</h1>
            {user ? (
                <div>
                    <p>Имя пользователя: {user.username}</p>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <p>Пользователь не найден. Пожалуйста, зарегистрируйтесь.</p>
            )}
        </div>
    );
};

export default Profile;
