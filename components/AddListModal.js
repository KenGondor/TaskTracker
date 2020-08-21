import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    KeyboardAvoidingView,
    TouchableNativeFeedback,
    TextInput,
} from "react-native";
import colors from "../colors";
import { AntDesign } from "@expo/vector-icons";

export default function AddListModal(props) {
    const pastelScheme = [
        "#e03e52",
        "#1c5253",
        "#54556c",
        "#115d76",
        "#d3b629",
        "#FF9AA2",
    ];

    const [listColor, setColor] = useState(colors.lightBlue);

    const [listname, setlistname] = useState("useless");

    const renderColors = () => {
        return pastelScheme.map((color) => {
            return (
                <TouchableNativeFeedback onPress={() => setColor(color)}>
                    <View
                        style={[
                            styles.colorSelector,
                            { backgroundColor: color },
                        ]}
                    ></View>
                </TouchableNativeFeedback>
            );
        });
    };

    const addList = () => {
        if (listColor == colors.lightBlue) {
            return;
        } else {
            let newL = { task: listname, color: listColor, todos: [] };
            props.addListFunction(newL);
            props.closeModal();
        }
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={{ alignSelf: "stretch" }}>
                <Text style={styles.title}>
                    Create ToDo<Text style={{ color: listColor }}>List </Text>
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="List Name"
                    onChangeText={(text) => setlistname(text)}
                />
            </View>

            <View style={styles.picker}>{renderColors()}</View>

            <View style={styles.buttonGroup}>
                <TouchableNativeFeedback onPress={() => props.closeModal()}>
                    <AntDesign name="close" size={30} />
                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={() => addList()}>
                    <AntDesign name="plus" size={30} />
                </TouchableNativeFeedback>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
    },
    title: {
        fontSize: 30,
        alignSelf: "center",
        fontWeight: "bold",
    },
    input: {
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 6,
        borderColor: colors.grey,
        height: 40,
        marginVertical: 10,
        marginHorizontal: 10,
        paddingHorizontal: 10,
    },
    picker: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    buttonGroup: {
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "flex-end",
        paddingRight: 30,
        marginTop: 10,
    },
    colorSelector: {
        height: 30,
        width: 30,
        borderRadius: 4,
    },
});
