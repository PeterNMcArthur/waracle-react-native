import React, { Component } from 'react';

export default class Example extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	
	componentDidMount() {
		fetch('https://dog.ceo/api/breeds/image/random')
			.then(res => res.json())
			.then(res => this.setState({ 
				uri: res.message,
			}))
	}
	render() {
		const { Comp } = this.props
		return <Comp
			text="message to render"
			uri={this.state.uri}
		/>
	}
}

