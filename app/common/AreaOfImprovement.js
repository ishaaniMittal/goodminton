import React from "react";
import {ScrollView, Text, View} from "react-native";
import styles from "./styles";

class AreaOfImprovement extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.boundaryGuideArea}>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
                        <Text style={styles.textHeader}>{this.props.name}</Text>
                        <Text style={styles.textAreaOfImprovement}>{this.props.score}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default AreaOfImprovement;