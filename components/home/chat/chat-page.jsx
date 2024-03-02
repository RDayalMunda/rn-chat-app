// import { useEffect } from "react";
import { View, Text } from "react-native";

const ChatPage = ({ activeChatId }) => {

    // useEffect( ()=>{
    //     console.log('activeChatId', activeChatId)
    // }, [  ] )

    console.log('chatPage', activeChatId)

    return (
        <View >
            <Text>Chat mesages here</Text>
            <Text>{activeChatId}</Text>
        </View>
    )
}

export default ChatPage