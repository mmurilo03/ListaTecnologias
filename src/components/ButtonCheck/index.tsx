import { TouchableOpacity } from "react-native"
import IconF from "react-native-vector-icons/FontAwesome5";
import IconE from "react-native-vector-icons/Entypo";

interface Props {
    check: boolean,
    index: number,
    func: (index: number) => void
}

const ButtonCheck = ({check, index, func}: Props) => {
    return (
        <TouchableOpacity onPress={() => func(index)}>
            {check ? <IconF name="check-circle" color={"#5E60CE"} size={25}></IconF> : <IconE name="circle" color={"#4EA8DE"} size={25}></IconE>}
        </TouchableOpacity>
    )
}

export default ButtonCheck;