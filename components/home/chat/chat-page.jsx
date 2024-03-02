import { View, Text } from "react-native";

const ChatPage = ({activeChatId}) => {

    return (
        <View >
            <Text>Chat mesages here</Text>
            <Text>{activeChatId}</Text>
        </View>
    )
}

export default ChatPage