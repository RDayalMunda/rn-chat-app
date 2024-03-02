import { View, Text } from "react-native";
import ChatList from "./chat-list";
import ChatPage from "./chat-page";


const Chats = () => {

    return (
        <View>
            <Text>Chats Page</Text>
            <ChatList />
            <ChatPage />
        </View>
    )
}

export default Chats