import { Text, TouchableOpacity } from "react-native"
import { styles } from "./styles";
import  Icon  from "react-native-vector-icons/FontAwesome";

const ButtonAdd = () => {
    return (
        <TouchableOpacity style={styles.buttonAdd}>
            <Icon name="plus" color={"white"} size={20}></Icon>
        </TouchableOpacity>
    )
}

export default ButtonAdd;