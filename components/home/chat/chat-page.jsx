import { View, Text, Pressable, StyleSheet, BackHandler, TextInput, ScrollView, Image } from "react-native";
import { COLORS, NAVIGATION_IMG_BTN, RIPPLE_STYLE_LIGHT } from "../../../constants/styles";
import { useEffect, useState } from "react";
import { BACK_ARROW_CIRCLE } from "../../../constants/images";
const ChatPage = ({ activeChatId, closeChat }) => {


  let userData = {
    _id: "65e4636424d3d33ce2d75625",
    name: "Mcintosh Branch",
  }

  let chatData = {
    _id: "65e4636424d3d33ce2ef2351",
    name: "Serpent Valley"
  }
  let [messages, setMessages] = useState([
    { "_id": "65e46364a645d9885cbf1fdd", "message": "Aute id laborum.", "senderOid": "65e4636424d3d33ce2d75625", "senderName": "Mcintosh Branch" },
    { "_id": "65e463648e6ba75ba353de0f", "message": "Aliquip cupidatat ipsum cillum proident irure anim do officia magna voluptate. Aliquip cupidatat ipsum cillum proident irure anim do officia magna voluptate.", "senderOid": "65e4636409f846145cfdb0d7", "senderName": "Kramer Cote" },
    { "_id": "65e46364072c8ddcdebb5f50", "message": "Minim reprehenderit nisi est consequat velit ex dolore in et sunt exercitation reprehenderit sint.", "senderOid": "65e4636424d3d33ce2d75625", "senderName": "Mcintosh Branch" },
    { "_id": "65e4636445941ab89eb450ad", "message": "consectetur occaecat consequat ipsum.", "senderOid": "65e46364356868538f819830", "senderName": "England Morrison" },
    { "_id": "65e463646bee7b7c13cb5609", "message": "Consectetur deserunt tempor est adipisicing nulla irure.", "senderOid": "65e4636452272d1507e63e74", "senderName": "Brandy Levy" },
    { "_id": "65e46364b0006d2b7a97274e", "message": "Dolore aliqua aliqua amet tempor voluptate anim aliquip.", "senderOid": "65e4636424d3d33ce2d75625", "senderName": "Mcintosh Branch" },
    { "_id": "65e46364d15d1b2374aca3c5", "message": "eiusmod officia non.", "senderOid": "65e46364251059891cdc263d", "senderName": "Snyder Gilmore" },
    { "_id": "65e46364f12077bbb982b5f8", "message": "Aute non culpa exercitation sunt irure sint deserunt ut qui labore.", "senderOid": "65e46364e759203d59673024", "senderName": "Mckee Patton" },
    { "_id": "65e46364db2542902bc666d9", "message": "Ea enim in dolore duis consectetur magna elit labore dolor elit reprehenderit commodo proident.", "senderOid": "65e463641f546f190d68c8a1", "senderName": "Claudia Nolan" },
    { "_id": "65e4636445ba514cb811fd2b", "message": "Et aliqua magna ex nostrud Lorem Lorem.", "senderOid": "65e4636424d3d33ce2d75625", "senderName": "Mcintosh Branch" },
    { "_id": "65e46364e8a2f672d503abd1", "message": "Ad fugiat magna quis sunt.", "senderOid": "65e4636424d3d33ce2d75625", "senderName": "Mcintosh Branch" },
    { "_id": "65e46364d03d501e69bdc377", "message": "Nulla irure quis consequat duis ex est reprehenderit.", "senderOid": "65e463647174cb7e771148c0", "senderName": "Cote Serrano" },
    { "_id": "65e46364b37603a16747d060", "message": "Veniam cillum esse exercitation laborum aute velit.", "senderOid": "65e463643c1254d238e2c765", "senderName": "Susan Trujillo" },
    { "_id": "65e46364d397b68c68b5e74e", "message": "Aute nulla exercitation dolor cupidatat ullamco non labore elit.", "senderOid": "65e46364db3458c5a81688e0", "senderName": "Janna Vasquez" },
    { "_id": "65e463642e2764929ba5c2fa", "message": "Ad aliqua commodo cupidatat quis cillum irure ipsum consequat reprehenderit nisi qui Lorem cupidatat sint.", "senderOid": "65e46364ebf091eadeffab5f", "senderName": "Velez Alexander" },
    { "_id": "65e463648192fe8e3b38e02a", "message": "Veniam aliquip dolor non exercitation cillum magna commodo ex amet fugiat laboris do.", "senderOid": "65e463647d09dea5fde2cd2f", "senderName": "Marylou Roman" },
    { "_id": "65e463643e2345241983df24", "message": "Eiusmod sint mollit consectetur culpa consequat reprehenderit enim laborum veniam nulla adipisicing culpa et.", "senderOid": "65e4636488834b6022ed7731", "senderName": "Myrtle Conner" },
    { "_id": "65e4636431a677eccf404e00", "message": "Ut deserunt ullamco ea exercitation excepteur aliquip eiusmod sit sunt.", "senderOid": "65e4636424d3d33ce2d75625", "senderName": "Mcintosh Branch" },
    { "_id": "65e463640cc916925fda8310", "message": "Ipsum aute ex reprehenderit occaecat id eiusmod nulla sunt ut aute consequat deserunt dolor.", "senderOid": "65e4636477d615278345f89a", "senderName": "Mendoza Park" },
    { "_id": "65e4636417fa1332111b6e37", "message": "Non mollit laboris consectetur qui ut consectetur mollit duis dolore mollit nostrud irure sint dolore.", "senderOid": "65e46364d8f36698e1fdb54f", "senderName": "Brittney Reid" },
    { "_id": "65e4636428b1898cdf3b4160", "message": "Do sunt ad proident ut est non aute eu deserunt occaecat adipisicing.", "senderOid": "65e4636424d3d33ce2d75625", "senderName": "Mcintosh Branch" },
    { "_id": "65e463647c5de94ae94573d1", "message": "Consectetur eiusmod mollit veniam proident nulla ut proident reprehenderit nulla voluptate dolore qui laboris.", "senderOid": "65e463649557ef3ccd9d17d4", "senderName": "Guzman Blair" },
    { "_id": "65e46364978719e33ba44b40", "message": "Ea nisi enim esse eiusmod labore cupidatat veniam tempor.", "senderOid": "65e4636428afd9a190e32d83", "senderName": "Wise Haynes" },
    { "_id": "65e46364c86528e6426ac7cf", "message": "Do magna proident proident nostrud aliqua ipsum deserunt.", "senderOid": "65e4636434f90c01258c2391", "senderName": "Lee Owens" },
    { "_id": "65e463647bca5415b2280c0a", "message": "Magna officia minim laborum nostrud occaecat.", "senderOid": "65e46364a359d1599e63545b", "senderName": "Roman Orr" },
    { "_id": "65e4636484b43cde83b66641", "message": "Occaecat do fugiat excepteur enim reprehenderit aliquip et ipsum.", "senderOid": "65e4636487bd0323b8ec598b", "senderName": "Porter Kent" },
    { "_id": "65e46364b5d88a98ed30ab2d", "message": "Consequat reprehenderit aute est officia eiusmod qui tempor irure laboris incididunt aliqua magna officia aute.", "senderOid": "65e463646033c184fdff3bec", "senderName": "Helga Bryant" },
    { "_id": "65e46364a8183521b42a5eef", "message": "Excepteur ullamco elit ea dolore esse velit ex officia minim ut sint ullamco.", "senderOid": "65e4636424d3d33ce2d75625", "senderName": "Mcintosh Branch" },
    { "_id": "65e46364c68d70cb11e5ef31", "message": "Consequat sunt minim minim esse sunt aute ipsum in minim.", "senderOid": "65e46364fd126f0965a3cad9", "senderName": "Carissa Walton" },
    { "_id": "65e4636432613b766969f18c", "message": "Officia id culpa non labore ipsum ipsum dolore.", "senderOid": "65e4636424d3d33ce2d75625", "senderName": "Mcintosh Branch" },
    { "_id": "65e46364eb36c777ae3115cf", "message": "Adipisicing pariatur adipisicing velit culpa elit est.", "senderOid": "65e463644cc5e64fb8589b1b", "senderName": "Guthrie Patel" }
  ])

  function backHandlerFunction() {
    if (activeChatId) {
      closeChat()
      return true
    }
    return false
  }

  useEffect(() => {
    const backHandlerListener = BackHandler.addEventListener('hardwareBackPress', backHandlerFunction)
    // return is the event when the component is unmounted
    return () => {
      backHandlerListener.remove()
    }
  })

  return (
    <>

      <View style={styles.header}>
        <Pressable
          onPress={closeChat}
          style={styles.button}
          android_ripple={RIPPLE_STYLE_LIGHT}
        >
          <Image
          style={NAVIGATION_IMG_BTN}
          source={BACK_ARROW_CIRCLE}
          />
        </Pressable>
        <View>
          <Text style={styles.userName}>{chatData?.name}</Text>
          <Text style={styles.userActivity}>Online</Text>
        </View>
        
      </View>

      <View style={styles.container}>
        <ScrollView>
          {messages.map((item) => (
            <View
            key={item?._id}
            style={[styles.message, userData?._id==item?.senderOid?styles.messageSend:styles.messageReceived]}
            >
              <Text
              style={[styles.messageText, userData?._id==item?.senderOid?styles.messageTextSend:styles.messageTextReceived]}
              >
                {item.message}
              </Text>
              <View style={[ styles.tail, userData?._id==item?.senderOid?styles.sentTail:styles.receivedTail ]}></View>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.toolbar}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TextInput style={styles.input} placeholder="type message"/>
          <Pressable style={styles.sendButton} android_ripple={RIPPLE_STYLE_LIGHT}><Text>Send</Text></Pressable>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: COLORS.activeBg
  },
  userName: {
    fontSize: 20,
    textAlign: 'right'
  },
  userActivity: {
    fontSize: 16,
    textAlign: 'right'
  },
  message: {
    flexDirection: 'row',
    flex: 1,
    margin: 5,
  },
  messageSend: {
    justifyContent: 'flex-end',
  },
  messageReceived: {
    justifyContent: 'flex-start',
  },
  messageText: {
    color: '#ffffff',
    padding: 10,
    flexWrap: 'nowrap'
  },
  messageTextSend: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: COLORS.sentMessage,
    marginLeft: 50,
    marginRight: 20,
  },
  messageTextReceived: {
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: COLORS.receivedMessage,
    marginRight: 50,
    marginLeft: 20,
  },
  tail: {
    position: 'absolute',
    width: 0,
    height: 0,
    borderTopColor: 'transparent',
    borderBottomWidth: 10,
    borderBottomColor: 'transparent',
  },
  sentTail: {
    borderLeftWidth: 15,
    borderLeftColor: COLORS.sentMessage,
    right: 6,
  },
  receivedTail: {
    borderRightWidth: 15,
    borderRightColor: COLORS.receivedMessage,
    left: 6,
  },
  button: {
    justifyContent: 'center'
  },
  sendButton: {
    backgroundColor: '#7edc85',
    padding: 10,
    borderRadius: 10,
    marginLeft: 10,
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white'
  },
  toolbar: {
    flexDirection: 'row',
    alignItems: 'baseline',
    padding: 10,
    backgroundColor: COLORS.inactive
  },
  input: {
    flex: 1,
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#ffffff',
    width: '100%'
  },
})


export default ChatPage