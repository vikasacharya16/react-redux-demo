import { combineReducers } from "redux";
import CakeReducer from "./cake/CakeReducer";
import IcecreamReducer from "./icecream/IcecreamReducer";
import UserReducer from "./user/UserReducer";

const RootReducer = combineReducers({
    cake : CakeReducer,
    icecream : IcecreamReducer,
    user : UserReducer
})

export default RootReducer;