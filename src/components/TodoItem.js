import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    getStyle = () => {
        // if(this.props.todo.completed){
        //     return {
        //         background: '#f4f4f4',
        //         padding: '10px',
        //         borderBottom: '1px #ccc dotted',
        //         textDecoration: 'line-through'
        //     }
        // } else {
        //     return {
        //         background: '#f4f4f4',
        //         padding: '10px',
        //         borderBottom: '1px #ccc dotted',
        //         textDecoration: 'none'
        //     }
        // }

        // sintaxe curta para a condicional acima, isando operador ternario
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        return (
            //// exemplo de estilo inline
            // <div style={{ backgroundColor: '#f4f4f4'}}> 
            //// exemplo de estilo com variaveis
            // <div style={ itemStyle }> 
            //// exemplo de estilo com funcao
            <div style={ this.getStyle() }> 
                <p>
                    
                    { this.props.todo.title }
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = { 
    todo: PropTypes.object.isRequired
}

//// variavel para deifnir estilo do elemento com variavel
// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }

export default TodoItem
