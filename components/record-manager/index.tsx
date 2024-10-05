import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { addRecord, editRecord } from '../../store/slices/recordsSlice';

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
        <div>
            <h2>Мои записи</h2>
            <div>
                <input
                    type="text"
                    placeholder="Название записи"
                    value={newRecord.title}
                    onChange={(e) => setNewRecord({ ...newRecord, title: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Описание"
                    value={newRecord.description}
                    onChange={(e) => setNewRecord({ ...newRecord, description: e.target.value })}
                />
                <button onClick={handleAddRecord}>Добавить запись</button>
            </div>

            {records.length > 0 && (
                <ul>
                    {records.map((record) => (
                        <li key={record.id}>
                            {editMode.id === record.id ? (
                                <div>
                                    <input
                                        type="text"
                                        value={editMode.title}
                                        onChange={(e) => setEditMode({ ...editMode, title: e.target.value })}
                                    />
                                    <input
                                        type="text"
                                        value={editMode.description}
                                        onChange={(e) => setEditMode({ ...editMode, description: e.target.value })}
                                    />
                                    <button onClick={handleEditRecord}>Сохранить</button>
                                </div>
                            ) : (
                                <div>
                                    <h3>{record.title}</h3>
                                    <p>{record.description}</p>
                                    <button onClick={() => setEditMode({ id: record.id, title: record.title, description: record.description })}>Редактировать</button>
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
