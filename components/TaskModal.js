import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableNativeFeedback,
    FlatList,
    CheckBox,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function TaskModal({ todoList, closeModal }) {
    const taskCount = todoList.todos.length;
    const completedCount = todoList.todos.filter((item) => {
        item.completed;
    }).length;

    return (
        <View style={styles.container}>
            <View style={[styles.title, { borderBottomColor: todoList.color }]}>
                <View>
                    <Text style={styles.header}>{todoList.task}</Text>
                </View>

                <View style={styles.count}>
                    <Text style={styles.subtitle}>
                        {completedCount} out of {taskCount} completed.
                    </Text>
                </View>
            </View>
            <View style={styles.list}>
                <FlatList
                    data={todoList.todos}
                    keyExtractor={(item) => item.title}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.checkboxContainer}>
                                <View>
                                    <CheckBox
                                        value={item.completed}
                                        onValueChange={() => {
                                            item.completed = !item.completed;
                                        }}
                                    ></CheckBox>
                                </View>
                                <View style={styles.todo}>
                                    <Text
                                        style={{
                                            textDecorationLine: item.completed
                                                ? "line-through"
                                                : "none",
                                        }}
                                    >
                                        {item.title}
                                    </Text>
                                </View>
                            </View>
                        );
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: "black",
        borderWidth: 5,
        flex: 1,
        alignItems: "center",
    },
    title: {
        borderBottomWidth: 3,
        justifyContent: "flex-end",
        marginLeft: 65,
        alignSelf: "stretch",
    },
    header: {
        fontSize: 35,
        fontWeight: "bold",
    },
    count: {
        marginVertical: 2,
    },
    subtitle: {
        fontSize: 12,
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: 'center'
    },
    list: {
        marginRight: 130,
        marginTop: 20,
    },
    todo: {

    }
});
