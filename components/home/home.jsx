import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { COLORS, GAP } from "../../constants/styles";

import Chats from "./chat/chat";
import About from "./about/about";

const HomeComponent = () => {

    let routeList = ["Chats", "About"]
    const [ activeRoute, setActiveRoute ] = useState("Chats")
    const styles = StyleSheet.create({
        container: {
            width: "100%",
        },
        tabsContainer: {
            width: "100%",
            marginTop: 16,
        },
        tab: (activeItem, item) => ({
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: activeItem === item ? COLORS.activeBorder : COLORS.inactiveBorder,
            backgroundColor: activeItem === item ? COLORS.activeBg : COLORS.inactiveBg,
        }),
        tabText: (activeItem, item) => ({
            color: activeItem === item ? COLORS.activeText : COLORS.inactiveText,
        }),
        tabContent: (activeItem, item)=>({
            backgroundColor: activeItem===item?COLORS.activeBg:COLORS.inactiveBg
        })
    });

    return (
        <View
        style={styles.tabsContainer}>
            <Text >Home Component</Text>
            <FlatList
            data={routeList}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity
                    style={styles.tab(activeRoute, item )}
                    onPress={()=>{ setActiveRoute(item) }}
                    >
                        <Text
                        style={styles.tabText(activeRoute, item )}
                        >
                            {item}
                        </Text>
                    </TouchableOpacity>
                )
            }}
            keyExtractor={item => item}
            contentContainerStyle={{columnGap: GAP.small}}
            horizontal
            />
            {
                activeRoute==='Chats'?(<Chats styles={styles.tabContent(activeRoute, 'About')}/>):
                activeRoute==='About'?(<About styles={styles.tabContent(activeRoute, 'About')}/>):
                ""
            }
            
        </View>
    )
}

export default HomeComponent