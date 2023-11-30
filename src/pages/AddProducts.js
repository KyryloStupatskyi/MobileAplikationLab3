import { Button, Input } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { createProduct, updateProduct } from "../http/productApi";

const AddProducts = ({ navigation }) => {
  const [name, setName] = useState()
  const [price, setPrice] = useState()
  const [id, setId] = useState()


  const addProduct = async () => {
    try {
      const data = await createProduct(name, price)
      navigation.navigate('List')
    } catch (error) {
      alert(response.data.error.message)
    }
  }

  const update = async () => {
    try {
      await updateProduct(id, name, price)
      navigation.navigate('List')
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <View>
      <Input placeholder="Put product`s id to change" onChangeText={text => setId(text)} />
      <Input placeholder="Put product`s name" onChangeText={text => setName(text)} />
      <Input placeholder="Put product`s price" onChangeText={text => setPrice(text)} />

      <Button title="Add product to List" onPress={addProduct} />
      <Button title="Edit product" onPress={update} style={{ marginTop: 20 }} />
    </View>
  )
}
export default AddProducts