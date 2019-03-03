import React from "react";
import {ScrollView, Text, View} from "react-native";
import styles from "./styles";


class GuideArea extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.boundaryGuideArea}
                      onPress={() => navigate('GuideDetailsScreen', {name: this.props.name})}>
                    <Text style={styles.textHeader}>{this.props.name}</Text>
                    <Text style={styles.textBody}>{this.props.description}</Text>
                </View>
            </View>
        );
    }
}

export default GuideArea;