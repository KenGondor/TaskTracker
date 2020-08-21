import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableNativeFeedback,
    FlatList,
    Modal,
} from "react-native";
import colors from "./colors";
import { AntDesign } from "@expo/vector-icons";
import TaskList from "./components/TaskList";
import tempdata from "./tempdata";
import AddListModal from "./components/AddListModal";

export default function App() {
    const [modalVisible, setModal] = useState(false);

    const [list, setList] = useState(tempdata);

    const addList = newLst => {
      setList([...list, {task: newLst.task, color: newLst.color, todos: []}]);
    };

    const toggleModal = () => {
        setModal(!modalVisible);
    };

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => toggleModal()}
            >
                <AddListModal closeModal={toggleModal} addListFunction={addList}/>
            </Modal>

            <View style={{ flexDirection: "row" }}>
                <View style={styles.divider} />
                <Text style={styles.title}>
                    ToDo
                    <Text
                        style={{
                            fontWeight: "normal",
                            color: colors.lightBlue,
                        }}
                    >
                        List
                    </Text>
                </Text>
            </View>

            <View style={{ marginVertical: 20 }}>
                <TouchableNativeFeedback onPress={() => toggleModal()}>
                    <View style={styles.addIcon}>
                        <AntDesign name="plus" size={20} color={colors.blue} />
                    </View>
                </TouchableNativeFeedback>

                <Text style={styles.addText}>Add Task</Text>
            </View>

            <View style={{ height: 270 }}>
                <FlatList
                    data={list}
                    horizontal={true}
                    keyExtractor={(item) => item.task}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <TaskList list={item} />}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    divider: {
        backgroundColor: colors.grey,
        height: 1,
        flex: 1,
        alignSelf: "center",
    },
    title: {
        fontSize: 38,
        fontWeight: "bold",
        color: colors.black,
        paddingHorizontal: 50,
    },
    addIcon: {
        alignItems: "center",
        padding: 15,
    },
    addText: {
        justifyContent: "center",
        alignItems: "center",
    },
});
