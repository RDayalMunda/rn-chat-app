import { View, Text, Pressable, StyleSheet, BackHandler } from "react-native";
import { RIPPLE_STYLE_LIGHT } from "../../../constants/styles";
import { useEffect } from "react";
const ChatPage = ({ activeChatId, closeChat }) => {


    function backHandlerFunction(){
        if (activeChatId){
            closeChat()
            return true
        }
        return false
    }

    useEffect( ()=>{
        const backHandlerListener = BackHandler.addEventListener('hardwareBackPress', backHandlerFunction)


        // return is the event when the component is unmounted
        return ()=>{
            backHandlerListener.remove()
        }
    }, [] )

    return (
        <View style={style.container}>
            <Pressable
            onPress={closeChat}
            style={style.button}
            android_ripple={RIPPLE_STYLE_LIGHT}
            >
                <Text  style={style.buttonText}>Close</Text>
            </Pressable>
            <Text style={{ color: 'black', fontSize: 25 }}>{activeChatId}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
    },
    button:{
        backgroundColor: 'black',
        padding: 10,
    },
    buttonText: {
        color: 'white'
    }
})


export default ChatPage