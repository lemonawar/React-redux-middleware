import React, { Component } from 'react';
import User from './User';

class UserList extends Component {
    style = {
        marginBottom: '16px'
    }

    componentDidMount() {
        //console.log(this.props)
        this.props.fetch()
    }

    onEdit = user => {
        this.props.onEdit(user)
    }

    onDelete = user => {
        this.props.onDelete(user)
    }

    render() {
        const { isFetching } = this.props
        //console.log(this.props.user)
        const userList = this.props.users.map(user => (
            <User data={user}
                key={user.id}
                onEdit={this.onEdit}
                onDelete={this.onDelete}
            />
        ))
        return (
            <div style={this.style}>
                {userList}
                {isFetching ? 'Loading...' : ''}
            </div>
        )
    }
}

export default UserList;