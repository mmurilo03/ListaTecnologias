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
        gap: 8
    },
    techItemListStyle: {
        width: "100%",
    },
    techItem: {
        backgroundColor: "#262626",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 12,
        borderRadius: 8,
        gap: 8
    },
    techItemText: {
        flexShrink: 1,
        color: "#F2F2F2",
        textAlign: "justify"
    },
    techItemTextAndCheck: {
        alignItems: "center",
        flexShrink: 1,
        flexDirection: "row",
        gap: 8
    }
})

export default styles;