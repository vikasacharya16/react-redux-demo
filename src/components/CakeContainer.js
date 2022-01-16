import React from 'react'
import {connect} from 'react-redux'
import { buyCake } from '../redux'

const CakeContainer = (props) => {
    // numberOfCakes is 20 but it got override by mapStateToProps below to 10(i.e reduxState value)
    return(
        <div>
            <h2>Number of Cakes {props.numberOfCakes}</h2>
            <button onClick={props.buyCake}>buy cake</button>
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
        buyCake : () =>  dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);