import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:'auth',
    initialState:{
        user: null,
        isLoggedIn: false,
        isLoading:true,
    },
    reducers:{
        setUser: (state , action)=>{        
            const {password, ...userWithoutPassword} = action.payload;// destructured payload to not save user data with password field in LocalStorage
                
            state.user = action.payload // set data of user data coming from signup  
            state.isLoading = false;
            state.isLoggedIn = true; // set true when signup is complete
            localStorage.setItem("user",JSON.stringify(userWithoutPassword)); // storing user data in local storage
        },
        removeUser: (state)=>{},
    }
})

export const { setUser, removeUser} = authSlice.actions;

export default authSlice.reducer