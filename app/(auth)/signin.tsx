import { Text, View, StyleSheet, Image } from "react-native";
import { useRef } from "react";
import { Stack, useRouter } from "expo-router";
import { Button, Input } from "@rneui/themed";
import { appSignIn, fakeSignIn } from "#configs/authStore";
import { LinearGradient } from "expo-linear-gradient";

export default function SignIn() {
	const router = useRouter();
	const emailRef = useRef("");
	const passwordRef = useRef("");

	const signIn = async () => {
		const { user } = await appSignIn(emailRef.current, passwordRef.current);
		if (user) {
			router.push("/events");
		}
	};

	return (
		<View style={styles.screen}>
			<Image
				style={{ width: "135%", height: "100%", position: "absolute" }}
				source={{
					uri: "https://media.tenor.com/8dTD4BUZfS8AAAAC/%CE%B2%CE%B5%CF%81%CF%84%CE%B7%CF%82-yton.gif",
				}}
			/>
			<Text style={styles.title}>VOLUNTIX</Text>
			<Stack.Screen options={{ title: "Sign In" }} />
			<Input
				placeholder="email"
				nativeID="email"
				onChangeText={(text) => {
					emailRef.current = text;
				}}
				style={styles.textInput}
				inputContainerStyle={{ borderBottomWidth: 0 }}
			/>
			<Input
				placeholder="password"
				secureTextEntry={true}
				nativeID="password"
				onChangeText={(text) => {
					passwordRef.current = text;
				}}
				style={styles.textInput}
				containerStyle={{ borderWidth: 0 }}
				inputContainerStyle={{ borderBottomWidth: 0 }}
			/>
			<Button
				type="outline"
				title={"Sign In"}
				titleStyle={{
					color: "white",
					fontSize: 22.5,
				}}
				ViewComponent={LinearGradient} // Don't forget this!
				linearGradientProps={{
					colors: ["#4CAF50", "#2196F3"],
					start: { x: 0, y: 0.5 },
					end: { x: 1, y: 0.5 },
				}}
				containerStyle={{
					width: 200,
					marginHorizontal: 60,
					marginVertical: 10,
				}}
				buttonStyle={{
					borderWidth: 0,
					borderColor: "white",
					borderRadius: 12.5,
				}}
				onPress={async () => signIn()}
			/>
			<Text
				style={styles.textLink}
				onPress={() => {
					router.push("/signup");
				}}
			>
				No account? Sign Up
			</Text>
			<Text style={styles.textLink}>Nonprofit? Click here</Text>
		</View>
	);
}

export const styles = StyleSheet.create({
	title: {
		fontSize: 48,
		fontWeight: "bold",
		color: "#FFFFFF",
		marginBottom: 24,
	},
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%",
		paddingHorizontal: 35,
	},
	textLink: {
		fontSize: 20,
		color: "#FFFFFF",
		paddingTop: "2%",
	},
	textInput: {
		minWidth: 250,
		width: 250,
		borderWidth: 0,
		borderRadius: 12.5,
		color: "white",
		paddingHorizontal: 8,
		paddingVertical: 4,
		marginBottom: 8,
	},
});
