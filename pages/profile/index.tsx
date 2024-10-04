import React from 'react';

const Profile = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));

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
