import { Text, View } from "react-native"
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome5";
import ButtonCheck from "../ButtonCheck";
import ButtonDelete from "../ButtonDelete";

interface TechObj {
    name: string,
    check: boolean 
}

interface Props {
    techList: TechObj[],
    checkFunc: (index: number) => void,
    deleteFunc: (index: number) => void
}

const TechContainer = ({techList, checkFunc, deleteFunc}: Props) => {
    return (
        <>
            {techList.length === 0 ? <View style={styles.container}>
                <Icon name="clipboard-list" color={"#808080"} size={50}></Icon>
                <Text style={styles.textBold}>Você ainda não tem tecnologias cadastradas</Text>
                <Text style={styles.textNormal}>Crie tarefas e organize seus itens a fazer</Text>
            </View> : <View style={styles.techItemList}>
                {techList.map((element, key) => {
                return(
                    <View style={styles.techItem} key={key}>
                        <View style={styles.techItemTextAndCheck}>
                            <ButtonCheck index={key} func={checkFunc} check={element.check} />
                            <Text style={[styles.techItemText, {textDecorationLine: element.check ? "line-through" : "none"}]}>{element.name}</Text>
                        </View>
                        <View>
                            <ButtonDelete index={key} func={deleteFunc}/>
                        </View>
                    </View>
                )
            })}
            </View> }
        </>
    )
}

export default TechContainer;