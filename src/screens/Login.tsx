import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Token } from "../types/types";

interface IProps {
	updateToken(token: Token): void;
}

export default class Login extends React.Component<IProps> {
	public render() {
		return (
			<View style={styles.container}>
				<Text>Implement the Login</Text>
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
