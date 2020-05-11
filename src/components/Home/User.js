import React, { Component } from 'react'
import './User.css'

class User extends Component {
    static defaultProps = {
        data: {
            id: 0,
            name: 'User Name',
            onDelete: () => console.log('NOP'),
            onEdit: () => console.log('NOP')
        }
    }

    onEdit = (e) => {
        this.props.onEdit(this.props.data)
    }
    onDelete = (e) => {
        this.props.onDelete(this.props.data)
    }

    render() {
        const {id, name} = this.props.data
        //console.log(id, name)
        return (
            <div className="User">
                <div className="User-id">{id}</div>
                <div className="User-name">{name}</div>
                <div className="User-controls">
                    <ul>
                        <li>
                            <button onClick={this.onEdit}>Edit</button>
                            <button onClick={this.onDelete}>Delete</button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default User