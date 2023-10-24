import { Text } from "react-native"
import styles from "./styles";


interface Props {
    num: number
}

const TechNumer = ({num}: Props) => {
    return (
        <Text style={styles.text}>{num}</Text>
    )
}

export default TechNumer;