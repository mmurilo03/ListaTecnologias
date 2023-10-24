import { Text, TextInput, View } from "react-native"
import { styles } from "./styles"
import ButtonAdd from "../../components/ButtonAdd";
import { useState } from "react";
import TechNumer from "../../components/TechNumber";

interface TechObj {
    name: string,
    check: boolean 
}

const Home = () => {

    const [techList, setTechList] = useState<TechObj[]>([] as TechObj[]);

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
                <View style={styles.containerChecked}>
                    <View style={styles.textCreatedContainer}>
                        <Text style={styles.textCreated}>Criadas</Text>
                        <TechNumer num={techList.length} />
                    </View>
                    <View style={styles.textCreatedContainer}>
                        <Text style={styles.textChecked}>Concluidas</Text>
                        <TechNumer num={3} />
                    </View>
                </View>
            </View>
        </>
    )
}

export default Home;