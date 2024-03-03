import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import { RIPPLE_STYLE_DARK } from "../../../constants/styles";
const ChatList = ({ chatItems, openChat }) => {

    const styles = StyleSheet.create({
        container: {
            height: '100%'
        },
        chatItem: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
        },
        leftContent: {
            flexDirection: 'column',
            flex: 1,
            marginRight: 10,
        },
        chatName: {
            fontSize: 16, // default fontSize is 14
            marginBottom: 5,
        },
        lastMessage: {
            flexWrap: 'wrap',
        },
        rightContent: {
            minWidth: 20, // Adjust the width as needed
        },
        unseenCountText: {
        },
    })

    return (
        <ScrollView style={styles.container}>
            {
                chatItems.map(item => (
                    <Pressable
                    key={item._id}
                    style={styles.chatItem}
                    onPress={() => { openChat(item?._id) }}
                    android_ripple={RIPPLE_STYLE_DARK}
                    >
                        <View style={styles.leftContent}>
                            <Text style={styles.chatName}>{item.name}</Text>
                            <Text style={styles.lastMessage}>{item.lastMessage}</Text>
                        </View>
                        <View style={styles.rightContent}>
                            <Text style={styles.unseenCountText}>{item?.unseenCount ? item?.unseenCount : ''}</Text>
                        </View>
                    </Pressable>
                ))
            }

        </ScrollView>
    )
}

export default ChatList