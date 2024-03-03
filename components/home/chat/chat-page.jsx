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
        <>
        
            <View style={styles.container}>
                <Pressable
                onPress={closeChat}
                style={styles.button}
                android_ripple={RIPPLE_STYLE_LIGHT}
                >
                    <Text  style={styles.buttonText}>Close</Text>
                </Pressable>
                <Text style={{ color: 'black', fontSize: 25 }}>Chat-{activeChatId}-Id</Text>
            </View>
            
            <View style={styles.stickyContainer}>
                <Pressable onPress={closeChat}>
                    <Text>Back</Text>
                </Pressable>
                <Text style={styles.stickyText}>TAB TQWO: Sticky Text at the Bottom</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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