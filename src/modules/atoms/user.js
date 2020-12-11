import { atom } from 'recoil'

export const user_data = atom({
    key: 'user_data',
    default: {}
})

export const users = atom({
    key: 'users',
    default: []
})