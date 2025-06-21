import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type AuthenState = {
    email: string; name: string; phone: string; avatarUrl: string; role: string;
}

const initialState: AuthenState = {
    email: '', name: '', phone: '', avatarUrl: '', role: ''
}

export const authenSlice = createSlice({
    name: 'authen',
    initialState,
    reducers: {
        setAuthen: (state, action: PayloadAction<AuthenState>) => {
            state.email = action.payload.email;
            state.name = action.payload.name;
            state.phone = action.payload.phone;
            state.avatarUrl = action.payload.avatarUrl;
            state.role = action.payload.role;
        },
        clearAuthen: () => {
            return initialState;
        }
    }
})

export const { setAuthen, clearAuthen } = authenSlice.actions
export default authenSlice.reducer