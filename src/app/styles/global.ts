import { StyleSheet } from "react-native";

export const colors = {
    background: '#f7f7f8',
    header: '#0909ee',
    surface: '#b3b3f7',
    primary: '#0909ee',
    text: '#0808f4',
    textSecondary: '#01016a',
    warn: '#fe2508',
}

export const globalStyles = StyleSheet.create({
    home:{
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: 60,
        paddingHorizontal: 20,

    },
    title:{
        fontSize: 56,
        fontWeight: 'bold',
        color: colors.text,
    },
    sectionTitle:{
        fontSize: 18,
        fontWeight: '600',
        color: colors.textSecondary,
        marginTop: 10,
    },
    calibrateText:{
        fontSize: 25,
        fontWeight: '600',
        color: colors.textSecondary,
        marginTop: 5,
    },
    typeText:{
        fontSize: 15,
        fontWeight: '600',
        color: colors.text,
        textAlign: 'left',
    },
})