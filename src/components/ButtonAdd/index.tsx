import { TouchableOpacity } from "react-native"
import { styles } from "./styles";
import  Icon  from "react-native-vector-icons/FontAwesome";

interface Props {
    func : () => void;
}

const ButtonAdd = ({func}: Props) => {
    return (
        <TouchableOpacity onPress={func} style={styles.buttonAdd}>
            <Icon name="plus" color={"white"} size={20}></Icon>
        </TouchableOpacity>
    )
}

export default ButtonAdd;