
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUser } from '../../store/modules/user'

class AddUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputName: ''
        }
    }

    onChangeInput = (e) => {
        this.setState({
            inputName: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
        const { inputName } = this.state
        this.props.dispatch(addUser(inputName))
        this.setState({
            inputName: ''
        })
    }

    render() {


        return (
            <form onSubmit={this.onSubmit}>
                <input type='text'
                    name='userName'
                    placeholder='Input user name'
                    autoComplete='off'
                    value={this.state.inputName}
                    onChange={this.onChangeInput}
                />
                <button type='submit'>Add</button>
            </form>
        )
    }
}


export default connect()(AddUser)