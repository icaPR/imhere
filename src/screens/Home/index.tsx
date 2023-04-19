import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export default function Home() {
  const participants = [
    "joao",
    "paulo",
    "noe",
    "lucas",
    "junior",
    "joao1",
    "paulo1",
    "noe1",
    "lucas1",
    "junior1",
    "noe11",
    "lucas11",
    "junior11",
    "joao11",
    "paulo11",
    "noe111",
    "lucas111",
    "junior",
  ];
  //const [participant, setParticipant] = useState([]);
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
