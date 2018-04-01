import React from 'react';

class ToDo extends React.Component {
    render() {
        return (
            <li>
                <input type="checkbox" checked={ this.props.isCompleted } />
                <span>{ this.props.description }</span>
            </li>
        );
    }
}

export default ToDo;