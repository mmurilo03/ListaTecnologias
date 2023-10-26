import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
        textAlign: "justify"
    },
    techItemTextAndCheck: {
        alignItems: "center",
        flexShrink: 1,
        flexDirection: "row",
        gap: 8
    }
});

export default styles;