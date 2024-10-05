import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { addRecord, editRecord } from '../../store/slices/recordsSlice';
import style from './index.module.scss'

const RecordsManager = () => {
    const records = useSelector((state: RootState) => state.records.records);
    const dispatch = useDispatch();

    const [newRecord, setNewRecord] = useState({ title: '', description: '' });
    const [editMode, setEditMode] = useState<{ id: number | null, title: string, description: string }>({ id: null, title: '', description: '' });

    const handleAddRecord = () => {
        if (newRecord.title && newRecord.description) {
            dispatch(addRecord({ title: newRecord.title, description: newRecord.description }));
            setNewRecord({ title: '', description: '' });
        }
    };

    const handleEditRecord = () => {
        if (editMode.id !== null && editMode.title && editMode.description) {
            dispatch(editRecord({ id: editMode.id, title: editMode.title, description: editMode.description }));
            setEditMode({ id: null, title: '', description: '' });
        }
    };

    return (
        <div className={style.container}>
            <h2 className={style.title}>Мои записи</h2>
            <div className={style.form}>
                <input
                    className={style.input}
                    type="text"
                    placeholder="Название записи"
                    value={newRecord.title}
                    onChange={(e) => setNewRecord({ ...newRecord, title: e.target.value })}
                />
                <input
                    className={style.input}
                    type="text"
                    placeholder="Описание"
                    value={newRecord.description}
                    onChange={(e) => setNewRecord({ ...newRecord, description: e.target.value })}
                />
                <button className={style.button} onClick={handleAddRecord}>Добавить запись</button>
            </div>

            {records.length > 0 && (
                <ul className={style.recordsList}>
                    {records.map((record) => (
                        <li className={style.recordItem} key={record.id}>
                            {editMode.id === record.id ? (
                                <div className={style.record}>
                                    <input
                                        className={style.editInput}
                                        type="text"
                                        value={editMode.title}
                                        onChange={(e) => setEditMode({ ...editMode, title: e.target.value })}
                                    />
                                    <input
                                        className={style.editInput}
                                        type="text"
                                        value={editMode.description}
                                        onChange={(e) => setEditMode({ ...editMode, description: e.target.value })}
                                    />
                                    <button className={style.button} onClick={handleEditRecord}>Сохранить</button>
                                </div>
                            ) : (
                                <div className={style.record}>
                                    <h3 className={style.recordTitle}>{record.title}</h3>
                                    <p className={style.recordDescription}>{record.description}</p>
                                    <button className={style.editButton} onClick={() => setEditMode({ id: record.id, title: record.title, description: record.description })}>Редактировать</button>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default RecordsManager;
