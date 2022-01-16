import React from 'react'
import {connect} from 'react-redux'
import { buyIcecream } from '../redux'

const IcecreamContainer = (props) => {
    // numberOfCakes is 20 but it got override by mapStateToProps below to 10(i.e reduxState value)
    return(
        <div>
            <h2>Number of Icecream = {props.numOfIcecream}</h2>
            <button onClick={props.buyIcecream}>buy Icecream</button>
        </div>
    )
}

const mapStateToProps = reduxState => {
    return {
        ...reduxState.icecream,
        numOfIcecream : reduxState.icecream.numOfIcecream // it overrides the props with same name passed to this component 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIcecream : () =>  dispatch(buyIcecream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer);