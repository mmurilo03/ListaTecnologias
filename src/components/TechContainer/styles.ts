import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    textBold: {
        color: "#808080",
        fontSize: 14,
        fontWeight: "700",
        lineHeight: 19,
        textAlign: "center"
    },
    textNormal: {
        color: "#808080",
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 19,
        textAlign: "center"
    },
    techItemList: {
        width: "100%",
        gap: 8
    },
    techItem: {
        backgroundColor: "#333333",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 12,
        borderRadius: 8
    },
    techItemText: {
        color: "#F2F2F2"
    },
    techItemTextAndCheck: {
        flexDirection: "row",
        gap: 8
    }
})

export default styles;