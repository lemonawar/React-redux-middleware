import React from 'react'
import { connect } from 'react-redux'
import './EditUser.css'
import { editUser, setEditUser } from '../../store/modules/user'

class EditUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ...this.props.user
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            ...nextProps.user
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state)
        this.props.onCancel()
    }

    onCancel = (e) => {
        e.preventDefault()
        this.props.onCancel()
    }

    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
        console.log(this.state)
    }

    render() {

        const { name } = this.state
        const { id } = this.props.user

        return this.props.isEditing ? (
            <div className="EditUser">
                <div className="EditUser-modal-mask">
                    <div className="EditUser-modal-wrapper">
                        <div className="EditUser-modal-container">
                            <form onSubmit={this.onSubmit}>
                                <div>
                                    <label>ID: {id}</label>
                                </div>
                                <div>
                                    <label>Name:</label>
                                    <input type='text'
                                        autoFocus
                                        autoComplete='off'
                                        value={name}
                                        onChange={this.onChangeName}
                                    />
                                </div>
                                <div>
                                    <button type='submit'>Save</button>
                                    <button onClick={this.onCancel}>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        ) : ''
    }
}

const mapStateToProps = (state) => ({
    isEditing: state.user.isEditing,
    user: state.user.editingUser
})

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (user) => {
        console.log(user)
        dispatch(editUser(user))
    },
    onCancel: () => {
        dispatch(setEditUser(false))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditUser)