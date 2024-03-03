import { SafeAreaView} from "react-native";
import { Stack } from "expo-router"
import ImageBtn from "../components/header/image-btn";

import HomeComponent from "../components/home/home";

export default function Home() {
    const mainStyle = {
        flex: 1,
        backgroundColor: '#f2f5ff'
    }
    return (
        <SafeAreaView style={mainStyle}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: '#e1e1f1', paddingHorizontal: 20 },
                    headerShadowVisible: true,
                    headerRight: ()=>(
                        <ImageBtn dimension={'70%'}/>
                    ),
                    title: 'Chat App', // this by default is "index".
                }}
            />
            <HomeComponent />
        </SafeAreaView>
    )
}

/**
 * <Stack.screen /> is the container you see on the top of the page where you see "index"; no matter its position while coding. It will show on the very top on the UI
 */