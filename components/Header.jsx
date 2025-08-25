import {Text, View} from "react-native";
import colors from "../Colors";

export default function Header() {
    return (
        <View>
            <Image source={require('../assets/logo.png')} />
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