import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#b9d7ea",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "black",
  },

  name: {
    flex: 1,
    color: "#2A2B2A",
    fontSize: 18,
    marginLeft: 16,
  },
  button: {
    width: 55,
    height: 55,
    borderRadius: 5,
    backgroundColor: "#E85E65",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  buttonText: {
    fontSize: 25,
  },
});
