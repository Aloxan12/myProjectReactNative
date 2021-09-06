import React from "react";
import { NativeBaseProvider, Text, View } from "native-base";


enum University {
  Harvard,
  Oxford,
  Princeton,
  Massachusetts
}

type StudentType = {
  id: number,
  name: string,
  age: number,
  university: University
}
const students: StudentType[] = [
  {id: 2, name: 'Alex', age: 26, university: 0},
  {id: 3, name: 'Viktoria', age: 22, university: University.Princeton},
  {id: 4, name: 'Vlad', age: 24, university: University.Massachusetts},
  {id: 5, name: 'Miron', age: 32, university: University.Oxford},
]

export const StudentsList =()=>{
  return(
    <NativeBaseProvider>
      {students.map(s=>{
        return <View key={s.id}>
          <Text>{s.name}</Text>
          <Text>{s.age}</Text>
          <Text>{s.university}</Text>
        </View>
      })}
    </NativeBaseProvider>
  )
}
