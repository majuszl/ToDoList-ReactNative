import {View, StyleSheet, Image} from "react-native";
import colors from "../design/colors";

export default function Header() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/Logo.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.gray_330
    }
})