import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableNativeFeedback,
    Modal,
} from "react-native";
import TaskModal from "./TaskModal";

export default function TaskList({ list }) {
    const completedCount = list.todos.filter((item) => {
        item.completed;
    }).length;
    const remainingCount = list.todos.length - completedCount;

    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <TouchableNativeFeedback onPress={() => toggleDetails()}>
            <View style={[styles.container, { backgroundColor: list.color }]}>
                <Modal
                    animationType="fade"
                    visible={showDetails}
                    onRequestClose={() => toggleDetails()}
                >
                    <TaskModal todoList={list} closeModal={toggleDetails} />
                </Modal>

                <View style={styles.title}>
                    <Text style={styles.titleText} >
                        {list.task}{" "}
                    </Text>
                </View>

                <View>
                    <View style={{ alignItems: "center" }}>
                        <Text style={styles.count}>{remainingCount}</Text>
                        <Text style={styles.subtitle}>Remaining</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <Text style={styles.count}>{completedCount}</Text>
                        <Text style={styles.subtitle}>Completed</Text>
                    </View>
                </View>
            </View>
        </TouchableNativeFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 25,
        paddingHorizontal: 10,
        borderRadius: 6,
        marginHorizontal: 13,
        width: 200,
        alignItems: "center",
    },
    title: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "white",
        alignSelf: 'stretch'
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
    },
    modalContainer: {
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#000000",
        borderWidth: 4,
        flex: 1,
    },
    modalButton: {
        borderColor: "grey",
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
    },
    count: {
        color: "white",
        fontSize: 40,
    },
    subtitle: {
        color: "white",
    },
});
