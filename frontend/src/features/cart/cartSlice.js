import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    open : false,
    cart: [],
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers : {
        open(state,action){
            state.open = action.payload;
        },
        addItem(state,action){
            const item = state.cart.find((product) => product.sku === action.payload.sku);
            if(item){
                item.qty++;
                item.totalPrice = item.price * item.qty;
            }
            else {
                state.cart.push(action.payload)
            }
            
            state.open = true;    
            
        },

        deleteItem(state,action){
            state.cart = state.cart.filter((product)=>product.sku !== action.payload.sku);

        },
        increaseQuantity(state,action){
            const item = state.cart.find((item)=> item.sku===action.payload.sku);
            item.qty++;
            item.totalPrice = item.price * item.qty;
        },
        decreaseQuantity(state,action){
            const item = state.cart.find((item)=> item.sku===action.payload.sku);
            item.qty--;
            item.totalPrice = item.price * item.qty;

            if(item.qty===0) cartSlice.caseReducers.deleteItem(state,action);

        },
    }
})


export const {open,addItem,deleteItem,increaseQuantity,decreaseQuantity} = cartSlice.actions;

export default cartSlice.reducer;

export function getCartOpenStatus(store){
    return store.cart.open;
}

export const getCart = (store)=> store.cart.cart;

export const getTotalCartPrice = (store)=> store.cart.cart.length>0 ? store.cart.cart.reduce((total,item)=> total + item.totalPrice,0) :0 ;

export const getCartItemQuantity = (store)=> store.cart.cart.length;















