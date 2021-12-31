import React from "react";
import { useSelector, useDispatch } from  'react-redux'
import { buyCake } from "../redux";

const HooksCakeContainer = () => {
    const numberOfCakes = useSelector(state => state.numberOfCakes)
    const dispatch = useDispatch()

    return(
        <div>
            <h2>Hooks Number of Cakes : {numberOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>buy cake</button>
        </div>
    )

}

export default HooksCakeContainer;