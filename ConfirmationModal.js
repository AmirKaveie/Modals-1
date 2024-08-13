import React from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function ConfirmationModal({ visible, onConfirm, onCancel, animationType = "fade" }) {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType={animationType}
      onRequestClose={onCancel}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalInner}>
          <Text style={styles.modalText}>Are you sure?</Text>
          <TouchableOpacity onPress={onConfirm} style={styles.modalButton}>
            <Text style={styles.modalButtonText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onCancel} style={styles.modalButton}>
            <Text style={styles.modalButtonText}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

ConfirmationModal.defaultProps = {
  onRequestClose: () => {},
};
