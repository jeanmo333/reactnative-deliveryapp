/** @format */

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import { CustomTextInput } from "../../../../components/CustomTextInput";
import { ModalPickImage } from "../../../../components/ModalPickImage";
import { RoundedButton } from "../../../../components/RoundedButton";
import styles from "./Styles";
import useViewModel from "./ViewModel";
import CustomLoadingButtom from "../../../../components/CustomLoadingButtom";

export const AdminCategoryCreateScreen = () => {
  const {
    name,
    description,
    responseMessage,
    loading,
    image,
    onChange,
    takePhoto,
    pickImage,
    createCategory,
  } = useViewModel();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (responseMessage !== "") {
      ToastAndroid.show(responseMessage, ToastAndroid.LONG);
    }
  }, [responseMessage]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => setModalVisible(true)}>
        {image == "" ? (
          <Image
            style={styles.image}
            source={require("../../../../../../assets/image_new.png")}
          />
        ) : (
          <Image source={{ uri: image }} style={styles.image} />
        )}
      </TouchableOpacity>

      <View style={styles.form}>
        <CustomTextInput
          placeholder='Nombre de la categoria'
          image={require("../../../../../../assets/categories.png")}
          keyboardType='default'
          property='name'
          value={name}
          onChangeText={onChange}
        />
        <CustomTextInput
          placeholder='Descripcion'
          image={require("../../../../../../assets/description.png")}
          keyboardType='default'
          property='description'
          value={description}
          onChangeText={onChange}
        />
      </View>

      <View style={styles.buttonContainer}>
        <RoundedButton
          text={loading ? <CustomLoadingButtom /> : "CREAR CATEGORIA"}
          onPress={() => createCategory()}
        />
      </View>

      <ModalPickImage
        openGallery={pickImage}
        openCamera={takePhoto}
        modalUseState={modalVisible}
        setModalUseState={setModalVisible}
      />
    </View>
  );
};
