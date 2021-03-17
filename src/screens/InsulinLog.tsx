import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Token } from "../types/types";

interface IProps {
	token: Token;
}

export default class InsulinLog extends React.Component<IProps> {
	public render() {
		return (
			<View style={styles.container}>
				<Text>Implement the List here</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: `#fff`,
		alignItems: `center`,
		justifyContent: `center`,
	},
});
