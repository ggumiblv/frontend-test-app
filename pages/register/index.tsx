import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import style from './index.module.scss';

const Registration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();

    const onSubmit = (data) => {
        // Сохраняем данные в sessionStorage
        sessionStorage.setItem('user', JSON.stringify(data));
        // Перенаправляем на страницу профиля
        router.push('/profile');
    };

    return (
        <div className={style.container}>
            <h1 className={style.title}>Заполните форму</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style['form-group']}>
                    <label className={style.label}>Имя пользователя</label>
                    <input 
                        className={style.input}
                        {...register('username', { required: 'Имя пользователя обязательно' })} 
                    />
                    {errors.username && <p className={style['error-message']}>{errors.username.message as string}</p>}
                </div>

                <div className={style['form-group']}>
                    <label className={style.label}>Email</label>
                    <input 
                        className={style.input}
                        type="email" 
                        {...register('email', { 
                            required: 'Email обязателен', 
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Некорректный email'
                            } 
                        })} 
                    />
                    {errors.email && <p className={style['error-message']}>{errors.email.message as string}</p>}
                </div>

                <div className={style['form-group']}>
                    <label className={style.label}>Пароль</label>
                    <input 
                        className={style.input}
                        type="password" 
                        {...register('password', { 
                            required: 'Пароль обязателен', 
                            minLength: {
                                value: 6,
                                message: 'Пароль должен содержать минимум 6 символов'
                            }
                        })} 
                    />
                    {errors.password && <p className={style['error-message']}>{errors.password.message as string}</p>}
                </div>

                <button className={style.button} type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );
};

export default Registration;
