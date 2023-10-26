import { ScrollView, Text, View, useWindowDimensions } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome5";
import ButtonCheck from "../ButtonCheck";
import ButtonDelete from "../ButtonDelete";
import ListItem from "../ListItem";

interface TechObj {
  name: string;
  check: boolean;
}

interface Props {
  techList: TechObj[];
  checkFunc: (index: number) => void;
  deleteFunc: (index: number) => void;
}

const TechContainer = ({ techList, checkFunc, deleteFunc }: Props) => {
  return (
    <>
      {techList.length === 0 ? (
        <View style={styles.container}>
          <Icon name="clipboard-list" color={"#808080"} size={50}></Icon>
          <Text style={styles.textBold}>
            Você ainda não tem tecnologias cadastradas
          </Text>
          <Text style={styles.textNormal}>
            Crie tarefas e organize seus itens a fazer
          </Text>
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={styles.techItemList}
          style={[
            styles.techItemListStyle,
            { height: useWindowDimensions().height * 0.5 },
          ]}
        >
          {techList.map((element, key) => {
            return (
              <ListItem checkFunc={checkFunc} deleteFunc={deleteFunc} index={key} tech={element} />
            );
          })}
        </ScrollView>
      )}
    </>
  );
};

export default TechContainer;
