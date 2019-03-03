import React from "react";
import {ScrollView, Text, View} from "react-native";
import styles from "./styles";

class DashboardIndexes extends React.Component {
    render() {
        return (
            <View style={{paddingBottom: 30}}>
                <View>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{
                            fontSize: 17,
                            textAlign: 'left', flex: 1

                        }}>Session One</Text>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', marginTop: 50}}>
                        <View
                            style={{flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <View
                                style={styles.sessionCompletedCircle}><Text style={{fontSize: 40}}>4</Text></View>
                            <Text style={{
                                fontSize: 15, opacity: 0.8, marginTop: 5
                            }}>Motion Index</Text>
                        </View>
                        <View
                            style={{flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <View style={styles.sessionCompletedCircle}><Text style={{fontSize: 40}}>4</Text></View>
                            <Text style={{
                                fontSize: 15, opacity: 0.8, marginTop: 5
                            }}>Speed Index</Text>
                        </View>
                        <View
                            style={{flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <View style={styles.sessionCompletedCircle}><Text style={{fontSize: 40}}>4</Text></View>
                            <Text style={{
                                fontSize: 15, opacity: 0.8, marginTop: 5
                            }}>Distance Index</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default DashboardIndexes;