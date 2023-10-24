import { Text, TouchableOpacity } from "react-native"
import { style } from "./styles";
import  Icon  from "react-native-vector-icons/FontAwesome";

const ButtonAdd = () => {
    return (
        <TouchableOpacity style={style.buttonAdd}>
            <Icon name="plus" color={"white"} size={20}></Icon>
            {/* <Text style={style.buttonText}>BBB</Text> */}
        </TouchableOpacity>
    )
}

export default ButtonAdd;