import React from 'react'
import {connect} from 'react-redux'
import { buyCake } from '../redux'

const CakeContainer = (props) => {
    //console.log(props) // disadvantage is props will get override if it is same `numberOfCakes`
    return(
        <div>
            <h2>Number of Cakes - {props.numberOfCakes}</h2>
            <button onClick={props.buyCake}>buy cake</button>
        </div>
    )
}

const mapStateToProps = reduxState => {
    return {
        numberOfCakes : reduxState.numberOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake : () =>  dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);