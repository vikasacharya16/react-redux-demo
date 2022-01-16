import React from "react";
import { useSelector, useDispatch } from  'react-redux'
import { buyCake } from "../redux";

const HooksCakeContainer = () => {
    // here props.numberOfCakes will not override
    const reduxState = useSelector(state => state)
    const dispatch = useDispatch()

    return(
        <div>
            <h2>Hooks Number of Cakes : {reduxState.cake.numberOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>buy cake</button>
        </div>
    )

}

export default HooksCakeContainer;