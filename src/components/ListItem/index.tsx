import { Text, View } from "react-native";
import ButtonCheck from "../ButtonCheck";
import ButtonDelete from "../ButtonDelete";
import styles from "./styles";

interface TechObj {
    name: string;
    check: boolean;
}
 
interface Props {
    tech: TechObj,
    index: number,
    checkFunc: (index: number) => void,
    deleteFunc: (index: number) => void
}

const ListItem = ({ tech, index, checkFunc, deleteFunc }: Props) => {
    return (
        <><View
        style={[
          styles.techItem,
          {
            borderWidth: 1,
            borderColor: tech.check ? "#262626" : "#333333",
          },
        ]}
        key={index}
      >
        <View style={styles.techItemTextAndCheck}>
          <ButtonCheck
            index={index}
            func={checkFunc}
            check={tech.check}
          />
          <Text
            style={[
              styles.techItemText,
              {
                textDecorationLine: tech.check
                  ? "line-through"
                  : "none",
                color: tech.check ? "#808080" : "#F2F2F2",
              },
            ]}
          >
            {tech.name}
          </Text>
        </View>
        <View>
          <ButtonDelete index={index} func={deleteFunc} />
        </View>
      </View>
        </>
    )
}

export default ListItem;