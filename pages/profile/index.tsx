import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import RecordsManager from '../../components/record-manager';

const Profile = () => {
    const user = useSelector((state: RootState) => state.user.user);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true); // Обеспечивает рендеринг только после монтирования на клиенте
    }, []);

    if (!mounted) return null; // Предотвращает рендеринг на сервере

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

            {/* Компонент для управления записями */}
            <RecordsManager />
        </div>
    );
};

export default Profile;
