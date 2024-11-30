import {createSlice} from '@reduxjs/toolkit'

const ChangeColor = createSlice({
    name:'ChangeColor',
    initialState:{
        color:'#000'
    },
    reducers:{
        ChangeColorToColor (state,action){
            state.color = `#eb4034`
        }
    }
})