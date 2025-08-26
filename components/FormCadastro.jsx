import {TouchableOpacity, View, TextInput, StyleSheet, Image} from "react-native";
import colors from "../design/colors";
import sizes from "../design/sizes";

export default function FormCadastro () {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={"Adicione uma nova tarefa"}/>
            <TouchableOpacity style={styles.btn}>
                <Image style={styles.img} source={require('../assets/add.png')}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 10,
        height: 60,
        marginHorizontal: sizes.margin_horizontal,
        marginTop: -30
    },
    input: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.gray_330,
        borderRadius: sizes.border_radius,
        colors: colors.gray_500,
        fontSize: sizes.size_title,
        padding: sizes.padding_medium,
        width: "78%",
        elevation: 2
    },
    btn: {
      backgroundColor: colors.purple_dark,
      borderRadius: sizes.border_radius,
      width: "20%",
      justifyContent: "center",
      alignItems: "center",
    },
    img: {
        width: 25,
        height: 25,
        resizeMode: "contain",
    }
})