import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const HelloWorld = () => {
  const [counter, setCounter] = useState(0);
  const addCounter = () => {
    setCounter(counter + 1);
  };

  const minusCouter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <View style={{ padding: 20, display: "flex", gap: 20, justifyContent: "center", alignItems: "center"}}>
      <Text style={{ fontSize: 70, marginTop: 20 }}>{counter}</Text>
      <TouchableOpacity onPress={addCounter} style={{backgroundColor: "black", borderRadius: 10, padding: 10}}>
        <Text style={{ fontSize: 40, color: "white" }}>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={minusCouter} style={{backgroundColor: "black", borderRadius: 10, padding: 10}}>
        <Text style={{ fontSize: 40, color: "white" }}>Minus</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HelloWorld;
