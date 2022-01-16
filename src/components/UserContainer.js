import React from 'react'
import {connect} from 'react-redux'
import { requestUser } from '../redux'

const UserContainer = (props) => {
    // numberOfCakes is 20 but it got override by mapStateToProps below to 10(i.e reduxState value)
    return(
        <div>
            <button onClick={props.requestUser}>Request User</button>
            {props.user.data.map(i => <p>{i}</p>)}
        </div>
    )
}

const mapStateToProps = reduxState => {
    return {
        ...reduxState.user,
        user : reduxState.user // it overrides the props with same name passed to this component 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestUser : () =>  dispatch(requestUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);