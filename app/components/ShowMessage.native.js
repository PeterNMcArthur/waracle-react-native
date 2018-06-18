import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default ({ text, uri }) => (
	<View>
		<Text>{text}</Text>
		 <Image
          style={{width: 250, height: 250}}
          source={{uri: uri}}
        />
	</View>
);
