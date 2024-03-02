import { TouchableOpacity, Image, StyleSheet, Platform } from "react-native";

const ImageBtn = ({ iconUrl, handlePress, dimension }) => {
    const styles = StyleSheet.create({
        btnContainer: {
            width: 40,
            height: 40,
            backgroundColor: '#ffffff',
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            marginEnd: Platform.OS=='web'?16:0,
        },
        btnImg: (dimension) => ({
            width: dimension,
            height: dimension,
            borderRadius: 10,
        }),
    });
    return (
        <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
            <Image
                source={{ uri: "http://192.168.56.212:8081/assets/images/burger.png" }}
                // source={{ uri: "http://192.168.56.212:8081/assets/images/profile.webp" }}
                resizeMode="cover"
                style={styles.btnImg(dimension)}
            />
        </TouchableOpacity>
    )
}

export default ImageBtn