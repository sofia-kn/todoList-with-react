import React, { Component } from 'react'

export default class Todo extends Component {

    render() {
        return (
            // 'completed' class for completed todos
            <div className='complete' style={{ display: 'flex' }}>
                <li className="todo-item">title</li>

                <button className="check-btn">
                    <i className="fas fa-check" aria-hidden="true"></i>
                </button>

                <button className="trash-btn">
                    <i className="fas fa-trash" aria-hidden="true"></i>
                </button>
            </div>
        )
    }
}