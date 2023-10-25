import { Text, TextInput, View, useWindowDimensions } from "react-native"
import { styles } from "./styles"
import ButtonAdd from "../../components/ButtonAdd";
import { useState } from "react";
import TechNumer from "../../components/TechNumber";
import TechContainer from "../../components/TechContainer";

interface TechObj {
    name: string,
    check: boolean 
}

const Home = () => {

    const [techList, setTechList] = useState<TechObj[]>([] as TechObj[]);
    const [checkCount, setCheckCount] = useState<number>(0);

    const addTech = () => {
        const tech: TechObj = {name: techName, check: false};
        setTechList([tech, ...techList]);
    }

    const checkTech = (index: number) => {
        const techListTemp: TechObj[] = [...techList];
        const tech: TechObj = {name: techListTemp[index].name, check: techListTemp[index].check};
        
        tech.check = !tech.check;
        if (tech.check){
            techListTemp.splice(index, 1);
            techListTemp.push(tech)
        } else {
            techListTemp.splice(index, 1);
            techListTemp.unshift(tech)
        }
        countCheck(techListTemp);
        setTechList(techListTemp);
    }

    const deleteTech = (index: number) => {
        const techListTemp: TechObj[] = [...techList];
        techListTemp.splice(index, 1);
        countCheck(techListTemp);
        setTechList(techListTemp);
    }

    const countCheck = (list: TechObj[]) => {
        let checkedCount = 0;
        list.forEach(element => {
            if (element.check) checkedCount++
        });
        setCheckCount(checkedCount);
    }

    const [techName, setTechName] = useState<string>("");

    return (
        <>
        <View style={styles.containerBody}>
            <View style={[styles.containerTitle, { height: useWindowDimensions().height * 0.25}]}>
                <Text style={styles.title}>Minhas Tecnologias</Text>
            </View>
            <View style={styles.containerInput}>
                <TextInput onChangeText={text => setTechName(text)} style={styles.input} placeholder="Adicione uma nova tarefa" placeholderTextColor="#808080"/>
                <ButtonAdd func={addTech} />
            </View>
            <View style={styles.container}>
                <View style={styles.containerChecked}>
                    <View style={styles.textCreatedContainer}>
                        <Text style={styles.textCreated}>Criadas</Text>
                        <TechNumer num={techList.length} />
                    </View>
                    <View style={styles.textCreatedContainer}>
                        <Text style={styles.textChecked}>Concluidas</Text>
                        <TechNumer num={checkCount} />
                    </View>
                </View>
                <TechContainer checkFunc={checkTech} deleteFunc={deleteTech} techList={techList}/>
            </View>
        </View>
        </>
    )
}

export default Home;