import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const HelloWorld = () => {
  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodos] = useState<string[]>([]);

  const addTodo = () => {
    setAllTodos([...allTodos, todo]);
    setTodo("")
  };

  return (
    <>
      <View>
        <View
          style={{
            padding: 40,
            display: "flex",
            gap: 15,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 30 }}>Todo App</Text>
          <TextInput
            value={todo}
            onChangeText={setTodo}
            style={{
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 5,
              padding: 7,
              width: 300,
            }}
            placeholder="Enter a Todo"
          />
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              padding: 15,
              borderRadius: 5,
              paddingHorizontal: 40,
            }}
            onPress={addTodo}
          >
            <Text style={{ color: "white" }}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={{display: "flex", gap: 10, alignItems: "center"}}>
          {allTodos.length > 0 ? (
            allTodos.map((todo, index) => (
              <Text key={todo + index} style={{fontSize: 18}}>{todo}</Text>
            ))
          ) : (
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 300,
              }}
            >
              <Text style={{ fontSize: 25 }}>No Todo Found</Text>
            </View>
          )}
        </View>
      </View>
    </>
  );
};

export default HelloWorld;
