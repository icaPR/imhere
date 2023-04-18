import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export default function Home() {
  function handleParticipantAdd() {
    console.log("Add");
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
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Participant name="José" onRemove={handleParticipantRemove} />
      <Participant name="Carlos" onRemove={handleParticipantRemove} />
      <Participant name="Oliver" onRemove={handleParticipantRemove} />
    </View>
  );
}
