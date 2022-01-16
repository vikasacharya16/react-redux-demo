import { combineReducers } from "redux";
import CakeReducer from "./cake/CakeReducer";
import IcecreamReducer from "./icecream/IcecreamReducer";

const RootReducer = combineReducers({
    cake : CakeReducer,
    icecream : IcecreamReducer
})

export default RootReducer;