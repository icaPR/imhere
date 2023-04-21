import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [participants, setParticipants] = useState<string[]>([]);

  function handleParticipantAdd(text: string) {
    if (participants.includes(text)) {
      Alert.alert(
        "Participante Existe",
        "Já existe um participante na lista com esse nome"
      );
      setText("");
      return;
    }
    if (text !== "") {
      setParticipants((participants) => [...participants, text]);
      setText("");
    }
  }
  function handleParticipantRemove() {
    console.log("Remove");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nome do Evento</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#00120B"
          onChangeText={setText}
          value={text}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleParticipantAdd(text)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={handleParticipantRemove}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
