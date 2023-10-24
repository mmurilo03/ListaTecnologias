import { TouchableOpacity } from "react-native"
import { styles } from "./styles";
import  Icon  from "react-native-vector-icons/FontAwesome5";

interface Props {
    check: boolean,
    index: number,
    func: (index: number) => void
}

const ButtonCheck = ({check, index, func}: Props) => {
    return (
        <TouchableOpacity onPress={() => func(index)}>
            {check ? <Icon name="check-circle" color={"#5E60CE"} size={25}></Icon> : <Icon name="dot-circle" color={"#4EA8DE"} size={25}></Icon>}
        </TouchableOpacity>
    )
}

export default ButtonCheck;