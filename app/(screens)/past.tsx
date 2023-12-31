import volunteeringData from "assets/server/events.json";
import { View, Image, ScrollView, Text } from "react-native";
import styles from "#app/styles";
import { UserStore } from "#configs/userStore";

const Past = () => {
	const volunteering = volunteeringData;
	const completedEvents = UserStore.useState((s) => s.completedEvents);

	return (
		<View
			style={{
				backgroundColor: "white",
				paddingTop: "5%",
				flex: 1,
			}}
		>
			<ScrollView
				contentContainerStyle={{
					display: "flex",
					gap: 20,
				}}
			>
				{volunteering.map(
					(event, eventid) =>
						completedEvents.find(
							(completedEvent) => completedEvent.id === eventid
						) && <PastCard key={eventid} event={event} />
				)}
			</ScrollView>
		</View>
	);
};

export const PastCard = ({
	event,
}: {
	event: {
		image: string;
		title: string;
		location: string;
		date: string;
		points: number;
	};
}) => (
	<View
		style={{
			flexDirection: "row",
			paddingRight: 10,
			alignItems: "center",
			flex: 1,
		}}
	>
		{/* <Card containerStyle={styles.pastcard}> */}
		<View style={{ flexDirection: "row", alignItems: "center" }}>
			<Image
				style={{ ...styles.image, marginLeft: 10 }}
				source={{ uri: event.image }}
			></Image>
			<View style={{ flexDirection: "column" }}>
				<Text style={styles.text}>{event.title}</Text>
				<Text style={styles.date}>{event.date}</Text>
			</View>
		</View>
		<View
			style={{
				flexDirection: "column",
				marginLeft: "auto",
				marginRight: 10,
			}}
		>
			<Text
				style={{
					fontSize: 16,
					fontFamily: "Arial",
					marginLeft: "auto",
					marginRight: "auto",
				}}
			>
				{event.points}
			</Text>
			<Text style={{ fontSize: 16, marginLeft: "auto", marginRight: "auto" }}>
				Points
			</Text>
		</View>
	</View>
);

export default Past;
