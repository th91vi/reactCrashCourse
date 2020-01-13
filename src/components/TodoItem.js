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

        // sintaxe curta para a condicional acima, usando operador ternario
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    //// sintaxe verbosa, antiga
    // markComplete(e){
    //     console.log(this.props)
    // } 

    markComplete = (e) => {
        console.log('Hello from TodoItem.js');
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
                    {/* linha de exemplo abaixo, caso queiramos usar "function(){}" ao inves de arrow functions */}
                    {/* <input type="checkbox" onChange={this.markComplete.bind(this)} /> {' '} */}
                    {/* props.markComplete naixo chama a prop respectiva em Todos */}
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)} /> {' '}
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
