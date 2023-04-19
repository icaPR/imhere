import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#769fcd",
    padding: 24,
  },
  title: {
    color: "#00120B",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  input: {
    flex: 1,
    height: 55,
    backgroundColor: "#d6e6f2",
    borderRadius: 5,
    padding: 16,
    fontSize: 18,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  button: {
    width: 55,
    height: 55,
    borderRadius: 5,
    backgroundColor: "#50F7C7",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  buttonText: {
    fontSize: 25,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },
});
