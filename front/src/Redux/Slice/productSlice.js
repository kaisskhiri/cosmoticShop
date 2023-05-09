import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get('/api/cosm/products');
    return response.data;
  }
);

export const addProduct = createAsyncThunk('products/addProduct',
async(products,ThunkAPI)=>{
    try{
        const res= await axios.post('http://localhost:8080/api/cosm/product/add',products)
       
        return res.data 

        }catch(error){
            ThunkAPI.rejectWithValue(error.res.data)
        }
    

})

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (products, thunkAPI) => {
  console.log('deleteProduct productId:', products._id)
  try {
    /* if (!products._id) {
      console.log("productId is undefined or null");} */
    const res = await axios.delete(`http://localhost:8080/api/cosm/product/delete/${products._id}`);
    console.log(res)
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});


const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      })
      
        .addCase(addProduct.pending, (state) => {
        state.isLoading = true;
      })
        .addCase(addProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      })
      
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error=false;
        state.products = state.products.filter(
          (products) =>products._id !== action.payload
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
}});

export default productSlice.reducer;
// state.products = state.products.filter(  (product) => product._id !== action.payload.productId  );