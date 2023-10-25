import { Text, View } from "react-native"
import styles from "./styles";


interface Props {
    num: number
}

const TechNumer = ({num}: Props) => {
    return (
        <View style={styles.textContainer}>
            <Text style={styles.text}>{num}</Text>
        </View>
    )
}

export default TechNumer;