import React from "react";
import {ScrollView, Text, View} from "react-native";
import styles from "./styles";

class TrainingDay extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.boundaryGuideArea}>
                    <Text style={styles.textHeader}>{this.props.dayName}</Text>
                    <View style={{paddingTop: 10}}/>
                        <Text style={styles.textBody}>Approx Time: {this.props.approxTime}</Text>
                        <Text style={styles.textBody}>Drill One: {this.props.drillOne}</Text>
                        <Text style={styles.textBody}>Drill Two: {this.props.drillTwo}</Text>
                        <Text style={styles.textBody}>Drill Three: {this.props.drillThree}</Text>
                    </View>
                </View>
                );
                }
                }

                export default TrainingDay;