import { Text, TouchableOpacity } from "react-native"
import { styles } from "./styles";
import  Icon  from "react-native-vector-icons/FontAwesome5";

interface Props {
    index: number,
    func: (index: number) => void
}
const ButtonDelete = ({index, func}: Props) => {
    return (
        <TouchableOpacity onPress={() => func(index)}>
            <Icon name="trash-alt" color={"#808080"} size={25}></Icon>
        </TouchableOpacity>
    )
}

export default ButtonDelete;