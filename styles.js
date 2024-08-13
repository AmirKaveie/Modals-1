import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "ghostwhite",
  },

  button: {
    backgroundColor: "lightsteelblue",
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  modalInner: {
    backgroundColor: "azure",
    padding: 20,
    borderWidth: 1,
    borderColor: "lightsteelblue",
    borderRadius: 10,
    alignItems: "center",
  },

  modalText: {
    fontSize: 18,
    margin: 10,
    color: "slategrey",
  },

  modalButton: {
    backgroundColor: "lightsteelblue",
    padding: 10,
    borderRadius: 5,
    margin: 10,
    width: 100,
    alignItems: "center",
  },

  modalButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
