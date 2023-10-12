
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: null,
    isLoading: false,
    hasError: false
}
// & coffee mummy => await 5min leke jaana
// ^5 min requirement fulfilled
// & async
// ~ node js event loop [fulfilled,reject] | async await |
// ^ api available fetch time 0.02ms js fast sync lang async=>event loop

//?  fulfilled | pending | rejected

// ~creating api for fetching

export const apiFetch = createAsyncThunk('apiFetch', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
})


export const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {

   },
    extraReducers: (builder) => {
       
        builder.addCase(apiFetch.fulfilled, (state, action) => {
            console.log('request been fulfilled');
            state.data = action.payload;
           state.isLoading = false;
       })
       
        builder.addCase(apiFetch.pending, (state, action) => {
           console.log('in pending state')
           state.isLoading = true;
       })
       
        builder.addCase(apiFetch.rejected, (state, action) => {
            console.log('====================================');
            console.log(action.payload);
            console.log('====================================');
           state.hasError = true;     
       })
   }
  
})

// Action creators are generated for each case reducer function

export default apiSlice.reducer