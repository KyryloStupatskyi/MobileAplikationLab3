import { Button, Card } from "@rneui/themed";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { deleteProducts, fetchProducts } from '../http/productApi'
import { useState } from "react";

const List = ({ route }) => {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    try {
      const dataProducts = await fetchProducts()
      setProducts(dataProducts)
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(() => {
    getProducts()
  }, [products])

  return (
    products.map(({ id, product, price }) => (
      <Card key={id}>
        <Card.Title>{product}</Card.Title>
        <Card.Divider />
        <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignContent: 'center' }}>
          <Text>{price}zl.</Text>
          <Button title="Delete" color="error" onPress={() => deleteProducts(id)} />
        </View>
      </Card>
    ))
  )
}

export default List