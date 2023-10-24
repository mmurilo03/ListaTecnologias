import { Text, TextInput, View } from "react-native"
import { styles } from "./styles"
import ButtonAdd from "../../components/ButtonAdd";


const Home = () => {
    return (
        <>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Minhas Tecnologias</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.containerInput}>
                    <TextInput style={styles.input} placeholder="AAAAAAAAAAAA" placeholderTextColor="#808080"/>
                    <ButtonAdd></ButtonAdd>
                </View>
            </View>
        </>
    )
}

export default Home;