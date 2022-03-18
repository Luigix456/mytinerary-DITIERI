import React from "react";
import { connect } from 'react-redux';
import userActions from '../../redux/actions/userActions';
import './styleSign.css'

function Container(props) {

	function SignOut() {
		props.SignOutUser(props.user.email)
	}

	return (
		<>
			{props.user ? <><h1>User Connected {props.user.fullName} desde {props.user.from[0]}</h1>
				<div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
					<button onClick={SignOut} className="btn btn-primary btn-block" style={{ maxWidth: 400 }}> SignOut </button>
				</div>
			</>
				: <h1>No user connected</h1>}

		</>
	)

}
const mapStateToProps = (state) => {
	return {
		user: state.userReducer.user,
	}
}
const mapDispatchToProps = {
	SignOutUser: userActions.SignOutUser,

}



export default connect(mapStateToProps, mapDispatchToProps)(Container)