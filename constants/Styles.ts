import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    page: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#1A1A1A',
        alignContent: "center",
    },

    text: {
        fontSize: 15,
        color: 'white',
        fontWeight: 700,
        textAlign: 'center',
        zIndex: 10,
    },

    header: {
        width: "100%", // Center the text horizontally
        textAlign: "center",
        fontSize: 30,
        color: "white",
        fontWeight: "700",
        zIndex: 10,
    },

    input: {
        width: 300,
        height: 60,
        padding: 10,
        margin: 12,
        borderRadius: 20,
        overflow: "hidden",
        color: "white",
        fontWeight: 700,
        fontSize: 30,
        borderColor: "white",
        borderWidth: 2,
    },

    form: {
        backgroundColor: "#080808",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 170
    },

    navbar: {
        backgroundColor: "green",
        height: 70,
        zIndex: 1,
        borderRadius: 15,
        padding: 20,
        display: "flex",
        justifyContent: "center",
        margin: 12,
        gap: 17,
    },
    profile: {
        position: "absolute",
        textAlign: "center",
        fontSize: 30,
        color: "white",
        fontWeight: "700",
        zIndex: 10,
        margin: 12,
    },

    games: {
        width: 500,
        height: 2600,
        padding: 20,
        margin: 12,
        borderRadius: 20,
    },
});