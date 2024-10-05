'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { setUser } from '../../store/slices/userSlice';
import style from './index.module.scss';

const RegistrationForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange'
    });
    const dispatch = useDispatch();
    const router = useRouter();

    const onSubmit = (data) => {
        dispatch(setUser(data));
        router.push('/profile');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
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
    );
};

export default RegistrationForm;
