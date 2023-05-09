import {configureStore} from "@reduxjs/toolkit"
//importation pour configurer la store en utilsant redux-toolkit pour les slices 
import authReducer from './Redux/Slice/authSlice'
import cartReducer from './Redux/Slice/cartSlice'
import productsReducer from './Redux/Slice/productSlice'
export const store = configureStore({reducer: // export du store à travers son reducers
    {
        auth:authReducer,  
        cart:cartReducer,
        products:productsReducer,                    //définition des slice 
    }
}
    
    )