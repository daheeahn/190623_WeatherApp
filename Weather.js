import React, {Component} from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
// import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// FontAwesome 도 import 가능
import PropTypes from "prop-types";

const weatherCases = {
    Rain: {
        colors: ['#00C6FB', '#005BEA'],
        title: "Raining like a MF",
        subtitle: "For more info look outside",
        // icon: 'ios-rainy',
        icon: 'weather-rainy'
    },
    Clear: {
        colors: ['#FEF253', '#FF7300'],
        title: "Sunny as fuck",
        subtitle: "Go get your ass burnt",
        // icon: 'ios-sunny',
        icon: 'weather-sunny'
    },
    Thunderstorm: {
        colors: ['#00ECBC', '#007ADF'],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house",
        // icon: 'ios-thunderstorm',
        icon: 'weather-lightning'
    },
    Clouds: {
        colors: ['#D7D2CC', '#304354'],
        title: "Clouds",
        subtitle: "I know, fucking boring",
        // icon: 'ios-cloudy',
        icon: 'weather-cloudy'
    },
    Snow: {
        colors: ['#7DE2FC', '#B9B6E5'],
        title: "Cold as balls",
        subtitle: "Do you wanna build a snowman? Fuck no.",
        // icon: 'ios-snow',
        icon: 'weather-snowy'
    },
    Drizzle: {
        colors: ['#89F7FE', '#66A6FF'],
        title: "Drizzle",
        subtitle: "Drizzle~~~",
        // icon: 'ios-rainy-outline',
        icon: 'weather-hail'
    },
    Haze: {
        colors: ['#89F7FE', '#66A6FF'],
        title: "Haze",
        subtitle: "oh~~~",
        icon: 'weather-hail'
    },
    Mist: {
        colors: ['#D7D2CC', '#304352'],
        title: "Mist",
        subtitle: "안개가~~~~~~",
        // icon: 'ios-rainy-outline',
        icon: 'weather-fog'
    }
}

function Weather({ weatherName, temp }) {
    // console.log("ddd" + weatherName);
    return (
        <LinearGradient
            colors={weatherCases[weatherName].colors}
            style={styles.container}>

            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon} />
                <Text style={styles.temp}>{temp}°</Text>
            </View>

            <View style={styles.lower}>
                <Text style={styles.title} >{weatherCases[weatherName].title}</Text>
                <Text style={styles.subTitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>


        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    upper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent" // 이걸 해야 아이콘이 보임 그래야 child인 icon이 보이는거.
    },

    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },

    temp: {
        fontSize: 48,
        backgroundColor: "transparent",
        marginBottom: 24,
        marginTop: 10,
        color: "white"
    },

    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        marginBottom: 10,
        color: "white",
        fontWeight: "normal"
    },

    subTitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        marginBottom: 24,
        color: "white"
    }
});