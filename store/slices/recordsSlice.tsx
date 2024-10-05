import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Record {
    id: number;
    title: string;
    description: string;
}

interface RecordsState {
    records: Record[];
}

const initialState: RecordsState = {
    records: [],
};

const recordsSlice = createSlice({
    name: 'records',
    initialState,
    reducers: {
        addRecord: (state, action: PayloadAction<Omit<Record, 'id'>>) => {
            const newRecord = { id: Date.now(), ...action.payload };
            state.records.push(newRecord);
        },
        editRecord: (state, action: PayloadAction<Record>) => {
            const index = state.records.findIndex(record => record.id === action.payload.id);
            if (index !== -1) {
                state.records[index] = action.payload;
            }
        }
    }
});

export const { addRecord, editRecord } = recordsSlice.actions;
export default recordsSlice.reducer;
