import React from "react";
import {ScrollView, Text, View} from "react-native";
import styles from "./styles";

class SessionCompleted extends React.Component {
    render() {
        return (
            <View style={{paddingBottom: 30,}}>
                <View style={styles.boundaryGuideArea}>
                    <Text style={styles.textHeader}>Session One</Text>
                    <View style={{flex: 1, flexDirection: 'row', marginTop: 15}}>
                        <View
                            style={{flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <View
                                style={styles.sessionCompletedCircle}><Text style={{fontSize: 40}}>4</Text></View>
                            <Text style={{
                                fontSize: 15,  opacity: 0.8, marginTop:5
                            }}>Motion Index</Text>
                        </View>
                        <View
                            style={{flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <View style={styles.sessionCompletedCircle}><Text style={{fontSize: 40}}>4</Text></View>
                            <Text style={{
                                fontSize: 15,  opacity: 0.8 , marginTop:5
                            }}>Speed Index</Text>
                        </View>
                        <View
                            style={{flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <View style={styles.sessionCompletedCircle}><Text style={{fontSize: 40}}>4</Text></View>
                            <Text style={{
                                fontSize: 15,  opacity: 0.8, marginTop:5
                            }}>Distance Index</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default SessionCompleted;