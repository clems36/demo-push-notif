import React, { useEffect } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import * as Notifications from "expo-notifications";

export default class App extends React.Component {
  componentDidMount() {
    registerForPushNotificationsAsync();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const registerForPushNotificationsAsync = async () => {
  const token = await Notifications.getExpoPushTokenAsync();
  console.log("token", token);
  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }
};
