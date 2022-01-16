import { connect } from 'react-redux'
import redux from 'redux'
import { buyCake, buyIcecream } from '../redux'

const GeneralContainer = (props) => {
    return(
        <div>
            <h2>Number of {props.cake ? 'cake_general' : 'icecream_general'} : {props.numOfItem}</h2>
            <button onClick={props.itemDispatch}>buy Item</button>
        </div>
    )
}

const mapStateToProps = (reduxState, ownProps) => {

    const itemState = ownProps.cake ? reduxState.cake.numberOfCakes : reduxState.icecream.numOfIcecream

    return {
        numOfItem : itemState // it overrides the props with same name passed to this component 
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

    const itemDispatch = ownProps.cake ? buyCake() : buyIcecream()

    return {
        itemDispatch : num =>  dispatch(itemDispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralContainer);