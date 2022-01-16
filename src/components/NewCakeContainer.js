import React, { useState } from 'react'
import {connect} from 'react-redux'
import { buyCake } from '../redux'

const NewCakeContainer = (props) => {

    const [number, setNumber] = useState(1)

    return(
        <div>
            <h2>Number of Cakes | {props.numberOfCakes}</h2>
            <input text={number} onChange={(e) => setNumber(e.target.value) } />
            <button onClick={() => props.buyCake(number)}>buy {number} cake</button>
        </div>
    )
}

const mapStateToProps = reduxState => {
    return {
        ...reduxState.cake,
        numberOfCakes : reduxState.cake.numberOfCakes // it overrides the props with same name passed to this component 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake : num =>  dispatch(buyCake(num))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);