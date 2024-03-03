import { Text, TouchableOpacity } from "react-native";

const ChatPage = ({ activeChatId, closeChat }) => {

    console.log('chatPage', activeChatId)



    return (
        <>
            <TouchableOpacity onPress={closeChat} style={{ backgroundColor: 'white' }}>
                <Text>Close</Text>
            </TouchableOpacity>
            <Text style={{ color: 'white', fontSize: 25 }}>{activeChatId}</Text>
        </>
    )
}



export default ChatPage