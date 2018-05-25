import React, {Component} from 'react';

class ToDo extends Component {
	render() {
		return (
			<li>
				<input type="checkbox" checked={ this.props.isCompleted } onChange={this.props.toggleComplete} /> 
				<span>{this.props.description} : {this.props.isCompleted}</span>
				<button type="submit" onClick={ this.props.deleteToDo }>Delete Item</button>
			</li>
		);
	}
}

export default ToDo;