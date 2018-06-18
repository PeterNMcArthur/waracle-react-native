import React from 'react'

export default ({ text, uri }) => (
	<div>
		<p>{text}</p>
		<img src={uri} alt="" />
	</div>
)
