import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { IUser } from '../../interfaces/user';



const initialState: IUser = {
    email: '', name: '', phone: '', avatarUrl: '', role: ''
}

export const authenSlice = createSlice({
    name: 'authen',
    initialState,
    reducers: {
        setAuthen: (state, action: PayloadAction<IUser>) => {
            return {
                ...state,
                ...action.payload
            }
        },
        clearAuthen: () => {
            return initialState;
        }
    }
})

export const { setAuthen, clearAuthen } = authenSlice.actions
export default authenSlice.reducer