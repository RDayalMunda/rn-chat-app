import { View, StyleSheet } from "react-native";
import ChatList from "./chat-list";
import ChatPage from "./chat-page";
import { useState } from "react";


const Chats = () => {
    let styles = StyleSheet.create({
        container: {
            marginTop: 10,
        }
    })

    const [activeChatId, setActiveChat] = useState("")
    const [chatItems, setChatItems] = useState([])
    setTimeout(() => {
        setChatItems(
            [
                { "_id": "65e335e79cda0d6e0f2b685a", "name": "Kidd Case", "lastMessage": "Laboris excepteur minim amet laborum adipisicing magna.", "lastMessageType": "text", "unseenCount": 2 },
                { "_id": "65e335e708485ea8d5d942f4", "name": "Bridgette Pruitt", "lastMessage": "Do ex ex adipisicing quis eu.", "lastMessageType": "text", "unseenCount": 4 },
                { "_id": "65e335e75e2ffc01c24205ac", "name": "Susanna Gordon", "lastMessage": "Et id mollit Lorem excepteur labore velit dolore esse ipsum velit nulla magna labore deserunt.", "lastMessageType": "text", "unseenCount": 5 },
                { "_id": "65e335e7f52184b3c60866ee", "name": "Rachel Moody", "lastMessage": "Eiusmod nulla proident consectetur aliqua ex aliqua velit.", "lastMessageType": "text", "unseenCount": 3 },
                { "_id": "65e335e7b5a584b99ff8eff3", "name": "Marshall Brock", "lastMessage": "Ex nisi ipsum sunt anim aliqua non commodo est sit minim et.", "lastMessageType": "text", "unseenCount": 5 },
                { "_id": "65e335e750dd9642eea0f760", "name": "Mcclure Simon", "lastMessage": "Amet ex ullamco sunt nisi minim mollit laboris veniam duis qui irure.", "lastMessageType": "text", "unseenCount": 3 },
                { "_id": "65e335e7ab6e02d6176c9978", "name": "Alexis Dunn", "lastMessage": "Magna est eu deserunt eu dolore ad.", "lastMessageType": "text", "unseenCount": 0 },
                { "_id": "65e335e7835c95817ed12891", "name": "Elvira Vincent", "lastMessage": "Deserunt eu consequat esse ea deserunt dolor consequat nostrud.", "lastMessageType": "text", "unseenCount": 5 },
                { "_id": "65e335e7c4e2a762aef92aec", "name": "Kelly Moreno", "lastMessage": "Est reprehenderit enim adipisicing id tempor.", "lastMessageType": "text", "unseenCount": 7 },
                { "_id": "65e335e70e4730e06450b012", "name": "Patrice Langley", "lastMessage": "Cillum non amet esse irure ullamco et eu aliquip adipisicing ex velit cillum dolore enim.", "lastMessageType": "text", "unseenCount": 2 },
                { "_id": "65e335e7201e2902c2b47948", "name": "Lula Reed", "lastMessage": "Nulla est qui mollit duis minim laboris ullamco.", "lastMessageType": "text", "unseenCount": 8 },
                { "_id": "65e335e7d2b0d9ca8b508822", "name": "Parsons Kerr", "lastMessage": "Mollit deserunt fugiat consequat laboris velit eiusmod deserunt laboris.", "lastMessageType": "text", "unseenCount": 0 },
                { "_id": "65e335e7789a044adbb25464", "name": "Connie Browning", "lastMessage": "Qui nulla et qui tempor pariatur laboris quis esse quis dolore laborum sint est.", "lastMessageType": "text", "unseenCount": 10 },
                { "_id": "65e335e745a37cbf8ee93342", "name": "Carolyn Maldonado", "lastMessage": "Dolor commodo eiusmod anim magna laboris et.", "lastMessageType": "text", "unseenCount": 3 },
                { "_id": "65e335e7bb992aef13eb8cc4", "name": "Mia Hayden", "lastMessage": "Exercitation voluptate tempor veniam eu commodo anim magna.", "lastMessageType": "text", "unseenCount": 0 },
                { "_id": "65e335e70b01ca0873b31be9", "name": "Concepcion Bush", "lastMessage": "Culpa sint veniam nulla aliqua amet commodo eiusmod cupidatat qui nostrud deserunt do amet.", "lastMessageType": "text", "unseenCount": 3 },
                { "_id": "65e335e7c4296ade7e38c18c", "name": "Haley Erickson", "lastMessage": "Nulla amet commodo do elit in.", "lastMessageType": "text", "unseenCount": 3 },
                { "_id": "65e335e779e63c160178ca2a", "name": "Celina Cash", "lastMessage": "Proident eiusmod dolor eu consequat et labore ex anim ut magna duis fugiat est aliqua.", "lastMessageType": "text", "unseenCount": 6 },
                { "_id": "65e335e783531520cd6e3424", "name": "Kerr Buchanan", "lastMessage": "Aliqua qui consectetur laboris deserunt consectetur reprehenderit consectetur consectetur et.", "lastMessageType": "text", "unseenCount": 5 },
                { "_id": "65e335e7adb61caef61ab1e8", "name": "Etta Hinton", "lastMessage": "Et ullamco tempor consectetur eiusmod ad.", "lastMessageType": "text", "unseenCount": 0 },
                { "_id": "65e335e7dda0963345101450", "name": "Schmidt Lawson", "lastMessage": "Cillum consequat amet elit ex magna.", "lastMessageType": "text", "unseenCount": 3 },
                { "_id": "65e335e799c2b8dbc46530be", "name": "Penelope Rose", "lastMessage": "Dolore Lorem in sit ex deserunt cupidatat nisi labore.", "lastMessageType": "text", "unseenCount": 6 },
                { "_id": "65e335e7e0c7b0741bee6604", "name": "Christensen Burch", "lastMessage": "Fugiat reprehenderit incididunt aute nostrud incididunt cillum irure velit culpa voluptate.", "lastMessageType": "text", "unseenCount": 6 },
                { "_id": "65e335e73d9d615d5741b234", "name": "Ramos Curtis", "lastMessage": "Consectetur culpa officia magna proident deserunt consequat ullamco non adipisicing ea excepteur commodo ad.", "lastMessageType": "text", "unseenCount": 4 },
                { "_id": "65e335e73dcc204c627f8126", "name": "Augusta Mcclain", "lastMessage": "Enim in ullamco id sit eiusmod cillum elit.", "lastMessageType": "text", "unseenCount": 6 },
                { "_id": "65e335e7d35754a2df86e333", "name": "Juliet Clayton", "lastMessage": "Adipisicing tempor esse in qui Lorem consequat aliquip cupidatat voluptate ea sunt.", "lastMessageType": "text", "unseenCount": 1 },
                { "_id": "65e335e7d45135b4ded52e68", "name": "Calhoun Castillo", "lastMessage": "Duis deserunt aute id reprehenderit.", "lastMessageType": "text", "unseenCount": 3 },
                { "_id": "65e335e7d07bc171eeedc9eb", "name": "Hubbard Barnett", "lastMessage": "Reprehenderit amet dolor mollit officia.", "lastMessageType": "text", "unseenCount": 0 },
                { "_id": "65e335e7194e453e80c361f9", "name": "Fernandez Figueroa", "lastMessage": "Nulla officia ad adipisicing fugiat ad sit Lorem dolor voluptate eiusmod.", "lastMessageType": "text", "unseenCount": 1 }
            ]
        )
    }, 100)

    return (
        <View style={styles.container}>
            <ChatList chatItems={chatItems} />
            <ChatPage activeChatId={activeChatId} />
        </View>
    )
}

export default Chats