import {ScrollView, View, StyleSheet} from "react-native";
import Header from "../components/Header";
import FormCadastro from "../components/FormCadastro";
import BtnCount from "../components/BtnCount";
import EmptyList from "../components/EmptyList";
import Search from "../components/Search";
import Card from "../components/Card";
import sizes from "../design/sizes";
import colors from "../design/colors";

export default function HomeScreen() {

    return (
        <ScrollView>
            <Header/>
            <FormCadastro/>

            <View style={styles.containerBotoes}>
                <BtnCount titulo={"Tarefas criadas"} numero={"12"}/>
                <BtnCount titulo={"Concluídas"} numero={"5"} isGreen={true}/>
            </View>

            <Search/>
            <EmptyList/>
            <Card/>
            <Card ativo={true}/>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    containerBotoes: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: sizes.margin_horizontal,
        marginTop: sizes.padding_large,
        paddingBottom: sizes.padding_large,
        borderBottomWidth: 2,
        borderBottomColor: colors.gray_330
    }
})