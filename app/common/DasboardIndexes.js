import React from "react";
import {ScrollView, Text, View} from "react-native";
import styles from "./styles";
import ProgressCircle from 'react-native-progress-circle'

class DashboardIndexes extends React.Component {
    render() {
        return (
            <View style={{paddingBottom: 30}}>
                <View>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontFamily: "SFProText-Regular",
                            fontSize: 17,
                            textAlign: 'left', flex: 1

                        }}>Session One</Text>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', marginTop: 50}}>
                        <View
                            style={{flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <ProgressCircle
                                percent={60}
                                radius={30}
                                borderWidth={5}
                                color="#3399FF"
                                shadowColor="#f8f8f8"
                                bgColor="#ffffff"
                            >
                                <Text style={{ fontFamily: "SFProText-Regular",fontSize: 30 }}>{'3'}</Text>
                            </ProgressCircle>
                            <Text style={{fontFamily: "SFProText-Regular",
                                fontSize: 15, opacity: 0.8, marginTop: 5
                            }}>Motion Index</Text>
                        </View>
                        <View
                            style={{flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <ProgressCircle
                                percent={60}
                                radius={30}
                                borderWidth={5}
                                color="#3399FF"
                                shadowColor="#f8f8f8"
                                bgColor="#ffffff"
                            >
                                <Text style={{fontFamily: "SFProText-Regular", fontSize: 30 }}>{'3'}</Text>
                            </ProgressCircle>
                            <Text style={{fontFamily: "SFProText-Regular",
                                fontSize: 15, opacity: 0.8, marginTop: 5
                            }}>Speed Index</Text>
                        </View>
                        <View
                            style={{flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <ProgressCircle
                                percent={60}
                                radius={30}
                                borderWidth={5}
                                color="#3399FF"
                                shadowColor="#f8f8f8"
                                bgColor="#ffffff"
                            >
                                <Text style={{ fontFamily: "SFProText-Regular",fontSize: 30 }}>{'3'}</Text>
                            </ProgressCircle>
                            <Text style={{fontFamily: "SFProText-Regular",
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