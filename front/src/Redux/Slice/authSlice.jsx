/* import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFail, logout } = authSlice.actions;

export const login = (userData, isUserAdmin) => async (dispatch) => {
  dispatch(loginStart());
  const endpoint = isUserAdmin ? 'admin' : 'user';
  try {
    const response = await axios.post(`/api/${endpoint}/login`, userData);
    dispatch(loginSuccess(response.data));
    toast.success('Logged in successfully!');
  } catch (error) {
    const message = error.response?.data?.message || 'Something went wrong!';
    dispatch(loginFail(message));
    toast.error(message);
  }
};

export default authSlice.reducer;
 */


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
const user = JSON.parse(localStorage.getItem('user'));
const admin =JSON.parse(localStorage.getItem('admin'))

const initialState = {
    user: user?user:null,
    loading:false,
    error:false,
    message:"",
    success:false
}

export const register = createAsyncThunk('auth/register',
async(user,ThunkAPI)=>{
    try{
        const res= await axios.post('http://localhost:8080/api/cosm/user/register',user)

        if (res.data){
            localStorage.setItem('user',JSON.stringify(res.data))
          
        }
return res.data 
        }catch(error){
            ThunkAPI.rejectWithValue(error.res.data)
        }
    

})
export const login = createAsyncThunk('auth/login',
async(user,ThunkAPI)=>{
    try{
        const res= await axios.post('http://localhost:8080/api/cosm/user/login',user)

        if (res.data){
            localStorage.setItem('user',JSON.stringify(res.data))
          
        }
return res.data 
        }catch(error){
            ThunkAPI.rejectWithValue(error.res.data)
        }

      })        
export const loginAdmin = createAsyncThunk('auth/login',
        async(user,ThunkAPI)=>{
            try{
                const res= await axios.post('http://localhost:8080/api/cosm/admin/login',user)
        
                if (res.data){
                    localStorage.setItem('user',JSON.stringify(res.data))
                  
                }
        return res.data 
                }catch(error){
                    ThunkAPI.rejectWithValue(error.res.data)
                }  

})
export const logout = createAsyncThunk('auth/logout',async(user,ThunkAPI)=>{
    localStorage.removeItem('user')
    return null

})

export const authSlice =createSlice({
    name:"auth",
    initialState,

reducer:{
    reset:(state)=>{
        state.loading =false
        state.message=""
        state.success=false
        state.error=false
       
        }

},

extraReducers :(builder)=>{
    builder.addCase(register.pending,(state)=> {
                state.loading = true;
            })
           .addCase(register.fulfilled, (state, action)=> {
                state.loading = false;
                state.error = null;
                state.success=true;
                state.user=action.payload
                state.message="Successfully registered"



        })
       .addCase(register.rejected, (state, action)=> {
            state.loading = false;  
            state.error = action.payload;
            state.success=false;
            state.message="registration failed";

            })
            .addCase(login.pending,(state)=> {
                state.loading = true;
            })
           .addCase(login.fulfilled, (state, action)=> {
                state.loading = false;
                state.error = null;
                state.success=true;
                state.user=action.payload
                state.message="login Successfully "



        })
       .addCase(login.rejected, (state, action)=> {
            state.loading = false;  
            state.error = action.payload;
            state.success=false;
            state.message="login failed";

            }).addCase(logout.pending,(state)=> {
                state.loading = true;
            })
           .addCase(logout.fulfilled, (state, action)=> {
                state.loading = false;
                state.error = null;
                state.success=true;
                state.user=null
                state.message="Logout Successfully"



        })
       .addCase(logout.rejected, (state, action)=> {
            state.loading = false;  
            state.error = action.payload;
            state.success=false;
            state.message="Logout Failed";

            })
        
        
        
        
        }

})


export const {reset}=authSlice.actions;
export default authSlice.reducer 
