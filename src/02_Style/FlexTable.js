import type { Node } from "react";
import React from "react";
import { StyleSheet, Text, View } from "react-native";


export const FlexTable: () => Node = () => {
  return (
    <View style={styles.table}>
      <View style={styles.row}>
        <View style={styles.column}><Text>Столб</Text></View>
        <View style={styles.column}><Text>Столб</Text></View>
        <View style={styles.column}><Text>Столб</Text></View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}><Text>Столб текст</Text></View>
        <View style={styles.column}><Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aliquid aspernatur debitis iste repudiandae tenetur unde? Alias aliquid aspernatur eaque excepturi facere fugit illo modi quaerat quam quia, tempora ullam unde veritatis. Accusantium cupiditate deleniti eum labore praesentium reiciendis sit. Culpa doloribus, sequi. Consectetur minus omnis recusandae repellat! Ducimus, sapiente.</Text></View>
        <View style={styles.column}><Text>Столб тексь</Text></View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}><Text>Последняя колонка</Text></View>
        <View style={styles.column}><Text>Последняя колонка</Text></View>
        <View style={styles.column}><Text>Последняя колонка</Text></View>
      </View>
    </View>
  )
    ;
};

const styles = StyleSheet.create({
  table: {
    flex: 1,
    flexDirection: "row",
  },
  row: {
    flex: 1,
    flexDirection: "column",
  },
  column:{
    flex: 1,
    backgroundColor: 'red',
  }
});
