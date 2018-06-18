import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Example from './app/Example';
import ShowMessage from './app/components/ShowMessage.native';

export default class App extends React.Component {
  render() {
    return (
			<View style={styles.container}>
				<Example Comp={ShowMessage} />
			</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
