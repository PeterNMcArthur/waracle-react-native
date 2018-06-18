import React  from 'react';
import { render } from 'react-dom';
import Example from './Example';
import ShowMessage from './components/ShowMessage'; 

const App = () => (
	<div>
		<Example Comp={ShowMessage} />
	</div>
)

render(<App />, document.getElementById('app'))
