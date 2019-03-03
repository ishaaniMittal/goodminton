import React from "react";
import {View, Text, Button, ScrollView, TouchableHighlight} from "react-native";
import styles from "../common/styles";
import TrainingDay from "../common/TrainingDay";

class TrainingScheduleScreen extends React.Component {


    static navigationOptions = {
        title: 'Training Schedule',
    };

    constructor(props) {
        super(props);

        this.state = {
            trainingDays: [
                {
                    "dayName": "Day One",
                    "dayNumber": 1,
                    "approxTime": "20 minutes",
                    "drills": [{
                        "drillId": 1,
                        "name": "My name is drill one",
                        "description": "This is drill One in description",
                        "demo": "demo url",
                        "benefits": "these are the benefits"
                    }, {
                        "drillId": 2,
                        "name": "My name is drill two",
                        "description": "This is drill One in description",
                        "demo": "demo url",
                        "benefits": "these are the benefits"
                    }, {
                        "drillId": 3,
                        "name": "My name is drill three",
                        "description": "This is drill One in description",
                        "demo": "demo url",
                        "benefits": "these are the benefits"
                    }
                    ],

                }

            ]
        }
        ;
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView style={styles.innerContainer}>
                <View style={{flex: 1, marginBottom: 30}}>
                    <View style={{flex: 1, marginBottom: 30}}>
                        {this.state.trainingDays.map((day, key) => {
                            return <View key={key} style={{paddingBottom: 30}}><TouchableHighlight
                                underlayColor='#f8f8f8'
                                onPress={() => navigate('DayTrainingSchedule', {day: day})}>
                                <TrainingDay dayName={day.dayName}
                                             approxTime={day.approxTime}
                                             drillOne={day.drills[0].name}
                                             drillTwo={day.drills[1].name}
                                             drillThree={day.drills[2].name}/></TouchableHighlight></View>
                        })}
                    </View>


                </View>
            </ScrollView>
        );
        /*return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
                <Button
                    title="Go to Settings"
                    onPress={() => this.props.navigation.navigate('Settings')}
                />
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );*/
    }
}

export default TrainingScheduleScreen;