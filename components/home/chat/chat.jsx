import { View, Text } from "react-native";
import ChatList from "./chat-list";
import ChatPage from "./chat-page";


const ChatComponent = () => {

    return (
        <View >
            <Text >Chat Component</Text>
            <ChatList />
            <ChatPage />
        </View>
    )
}

export default ChatComponent