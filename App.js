import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ConfirmationModal from "./ConfirmationModal";
import ConfirmationAlert from "./ConfirmationAlert";
import styles from "./styles";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const toggleAlert = () => {
    setIsAlertVisible(!isAlertVisible);
  };

  return (
    <View style={styles.container}>
      <ConfirmationModal
        animationType="fade"
        visible={isModalVisible}
        onConfirm={toggleModal}
        onCancel={toggleModal}
      />
      <ConfirmationAlert
        title="Are you sure?"
        message="For real?"
        visible={isAlertVisible}
        buttons={[
          { text: "No", onPress: toggleAlert },
          { text: "Yes", onPress: toggleAlert },
        ]}
      />
      <TouchableOpacity onPress={toggleModal} style={styles.button}>
        <Text style={styles.buttonText}>Show Confirmation Modal</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleAlert} style={styles.button}>
        <Text style={styles.buttonText}>Show Confirmation Alert</Text>
      </TouchableOpacity>
    </View>
  );
}
