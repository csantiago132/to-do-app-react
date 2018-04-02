import React from 'react';

class ToDo extends React.Component {
    
    render() {
        // obj. destructuring to avoid typing
        // 'this.props' all over
        const { isCompleted, description, toggleComplete } = this.props;
        
        return (
            <li>
                <input 
                    type="checkbox" 
                    checked={ isCompleted } 
                    onChange={ toggleComplete }
                />
                <span>{ description }</span>
            </li>
        );
    }
}

export default ToDo;