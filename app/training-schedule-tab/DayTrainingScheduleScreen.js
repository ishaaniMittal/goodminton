import React from "react";
import SegmentedControlTab from "react-native-segmented-control-tab";
import styles from "../common/styles";
import {Button, ScrollView, Text, View, Alert, TouchableHighlight} from "react-native";
import CountDown from 'react-native-countdown-component';
import SessionCompleted from "../common/SessionCompleted";
import DashboardIndexes from "../common/DasboardIndexes";
import AreaOfImprovement from "../common/AreaOfImprovement";
import GraphView from "../common/GraphView";


class DayTrainingScheduleScreen extends React.Component {


    static navigationOptions = ({ navigation }) => {
        return {
            title: "Schedule - " + navigation.getParam('title', 'Training Schedule'),
            headerStyle: {
                backgroundColor: '#f8f8f8',
            },
        };
    };

    constructor() {
        super();
        this.state = {
            selectedIndex: 0,
            stateOne: true,
            stateTwo: false,
            stateThree: false,
            stateFour: false,
            stateFive: false,
            stateStateSix: false,
            justCompletedSessionAnalyzed: false,
            selectedDrill: {},
            guideArea: [
                {
                    "name": "Quantity of Steps",
                    "area_id": 1,
                    "description": "Number of steps taken by a player to reach from base to a point and back the base should be same.",
                    "demo": "",
                    "benefits": "This helps reduce extra energy expended in returning to neutral position. Helps strengthen thigh muscles in both legs."
                },
                {
                    "name": "Feet Direction",
                    "area_id": 2,
                    "description": "Both the feet must always point in the direction of the shuttle",
                    "demo": "",
                    "benefits": "Makes shuttle retrieval easy, less chances of falling over"
                },
                {
                    "name": "Length of consecutive steps",
                    "area_id": 3,
                    "description": "The length of a player's final step in any movement should be the longest.",
                    "demo": "",
                    "benefits": "Lunging helps take less steps and generate most power. "
                },
                {
                    "name": "Split Step",
                    "area_id": 4,
                    "description": "Split step means that when the player is on the base, before moving in any direction to pick the shuttle, they should first take a split step - i.e. make their legs a bit wider and the move.",
                    "demo": "",
                    "benefits": "Body weight divided. Helps upper body stay stable."
                },
                {
                    "name": "End step",
                    "area_id": 5,
                    "description": "A player must always end their movement with the dominant feet in the front.",
                    "demo": "",
                    "benefits": "Stable base to generate most power."
                }

            ]

        };
    }


    componentDidMount() {
        const {navigation} = this.props;
        const day = navigation.getParam('day', {});
        this.setState({
            ...this.state,
            selectedDrill: day.drills[0],
            stateOne: true,
            stateTwo: false,
            stateThree: false,
            stateFour: false,
            stateFive: false,
            stateStateSix: false,
            justCompletedSessionAnalyzed: false

        });

    }


    render() {
        const {navigation} = this.props;
        const day = navigation.getParam('day', {});

        let handleIndexChange = (index) => {
            this.setState({
                ...this.state,
                selectedIndex: index,
                selectedDrill: day.drills[index]
            });

        };

        return (
            <ScrollView>
                <View style={styles.innerContainer}>
                    <SegmentedControlTab
                        values={['Drill One', 'Drill Two', 'Drill Three']}
                        selectedIndex={this.state.selectedIndex}
                        onTabPress={handleIndexChange}
                    />
                </View>
                <View>
                    {this.displayViewsBasedOnState()}</View>
            </ScrollView>
        );
    }

    displayViewsBasedOnState() {

        if (this.state.stateOne) {
            return <View style={styles.innerContainer}>
                <View style={styles.recordingButton}>
                    <Button title="Start Recording" onPress={() => this.onStartRecordingPress()}/>
                </View>
                <View style={{marginTop: 30}}>
                    <Text style={{
                        fontSize: 17,
                        textAlign: 'left'
                    }}>{this.state.selectedDrill.name}</Text>
                    <Text style={{
                        fontSize: 15,
                        textAlign: 'left',
                        opacity: 0.8,
                        marginTop: 10
                    }}>{this.state.selectedDrill.description}</Text>
                    <View style={{paddingTop: 30}}>
                        <Text style={{
                            fontSize: 17,
                            textAlign: 'left'
                        }}>Demo</Text>
                    </View>
                    <View style={{paddingTop: 350}}>
                        <Text style={{
                            fontSize: 17,
                            textAlign: 'left'
                        }}>Benefits</Text>
                    </View>
                    <Text style={{
                        fontSize: 15,
                        textAlign: 'left',
                        opacity: 0.8,
                        marginTop: 10
                    }}>{this.state.selectedDrill.benefits}</Text>
                </View>
            </View>;
        } else if (this.state.stateTwo) {
            return <View style={styles.innerContainer}>
                <CountDown
                    until={5}
                    size={100}
                    onFinish={() => this.countDownOver()}
                    digitStyle={{backgroundColor: '#FFF'}}
                    digitTxtStyle={{color: '#007AFF'}}
                    timeToShow={['S']}
                    timeLabels={{s: ''}}
                /></View>
        } else if (this.state.stateThree) {
            return <View style={styles.innerContainer}>
                <View styles={{}}>
                    <Text style={{fontSize: 28, color: '#EE4444'}}>Recording Data ...</Text>
                </View>
                <View style={styles.recordingButton}>
                    <Button title="Stop Recording" onPress={() => this.stopRecordingButtonPressed()}/>
                </View>
                <View style={{marginTop: 30}}>
                    <Text style={{
                        fontSize: 17,
                        textAlign: 'left'
                    }}>{this.state.selectedDrill.name}</Text>
                    <Text style={{
                        fontSize: 15,
                        textAlign: 'left',
                        opacity: 0.8,
                        marginTop: 10
                    }}>{this.state.selectedDrill.description}</Text>
                    <View style={{paddingTop: 30}}>
                        <Text style={{
                            fontSize: 17,
                            textAlign: 'left'
                        }}>Demo</Text>
                    </View>
                    <View style={{paddingTop: 350}}>
                        <Text style={{
                            fontSize: 17,
                            textAlign: 'left'
                        }}>Benefits</Text>
                    </View>
                    <Text style={{
                        fontSize: 15,
                        textAlign: 'left',
                        opacity: 0.8,
                        marginTop: 10
                    }}>{this.state.selectedDrill.benefits}</Text>
                </View>
            </View>;
        } else if (this.state.stateFour) {
            return <View style={styles.innerContainer}>
                <Text style={{
                    fontSize: 17,
                    textAlign: 'left'
                }}>
                    Last Completed Session</Text>
                <View>{this.showLastAnalyzedSession()}</View>
                <View style={styles.recordingButton}>
                    <Button title="Record Another Session" onPress={() => this.recordAnotherSessionButtonPressed()}/>
                </View>
                <Text
                    style={{fontSize: 17, textAlign: 'left', marginTop: 30}}>
                    Other Completed Sessions</Text>
                <View style={{marginTop: 30}}>
                    <TouchableHighlight underlayColor='#f8f8f8'
                                        onPress={() => this.viewSessionDetails()}><SessionCompleted/>
                    </TouchableHighlight>
                </View>
            </View>;
        } else if (this.state.stateFive) {
            return <View>
                <View style={{
                    paddingTop: 10,
                    paddingBottom: 20,
                    paddingLeft: 20,
                    paddingRight: 20
                }}>
                    <DashboardIndexes/>
                </View>
                <View style={styles.borderForCustomIndexText}>
                    <Text style={styles.textBodyForCustomIndex}>Custom indexes to help you analyze your game better!
                        <Text onPress={() => this.openInformationOnIndexes()} style={{color: '#1199EE'}}>Learn
                            More</Text></Text>
                </View>
                <View style={styles.areaOfImprovementContainer}>
                    {this.state.guideArea.map((area, key) => {
                        return <View key={key} style={{paddingBottom: 30}}><TouchableHighlight underlayColor='#f8f8f8'
                                                                                               onPress={() => navigate('Details', {})}>
                            <AreaOfImprovement
                                name={area.name} score="7/10"/></TouchableHighlight></View>
                    })}



                </View>
            </View>
        } else if (this.state.stateSix) {
            return <View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{
                        fontSize: 17,
                        textAlign: 'left', flex: 1

                    }}>Quantity of Steps</Text>
                    <GraphView/>
                </View>
            </View>
        }
    }

    viewSessionDetails() {
        this.setState({
            ...this.state,
            stateOne: false,
            stateTwo: false,
            stateThree: false,
            stateFour: false,
            stateFive: true
        })
    }

    showLastAnalyzedSession() {
        if (this.state.justCompletedSessionAnalyzed) {
            return <SessionCompleted/>
        }
        else {
            return <Text style={{fontSize: 28, color: '#22AA99', marginTop: 30}}>Analyzing Data ... </Text>;
        }
    }

    onStartRecordingPress() {
        this.setState({
            ...this.state,
            stateOne: false,
            stateTwo: true,
            stateThree: false
        })
    }

    countDownOver() {
        this.setState({
            ...this.state,
            stateOne: false,
            stateTwo: false,
            stateThree: true
        })
    }

    stopRecordingButtonPressed() {
        Alert.alert(
            'Stop Recording',
            'The sensors will now stop recording the data. Would you like to proceed the action?',
            [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},

                {text: 'OK', onPress: () => this.stopRecordingConfirmed()},
            ],
            {cancelable: false},
        );
    }

    stopRecordingConfirmed() {
        this.setState({
            ...this.state,
            stateOne: false,
            stateTwo: false,
            stateThree: false,
            stateFour: true,
            stateFive: false

        })
    }

    recordAnotherSessionButtonPressed() {
        Alert.alert(
            'Record Another Session',
            'Would you like to record another session of the same drill?',
            [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},

                {text: 'OK', onPress: () => this.onStartRecordingPress()},
            ],
            {cancelable: false},
        );
    }

    openInformationOnIndexes() {
        Alert.alert(
            'Custom Indexes',
            '\n\nMotion Index: Fraction of time on the court for which a player is moving. Less Motion Index correlates with superior anticipation and dominating skills.' +
            '\n\n Distance Index: Distance traveled by a player. Usually represents skill of player. Some rallies may be long, but with good court coverage and finishes, they can reduce this value.  \n\n Time Index: Time taken by a player to finish drills. Gives better estimate of stamina, flexibility and how long one can play optimally. ',
            [
                {text: 'Ok', onPress: () => console.log('Cancel Pressed')}
            ],
            {cancelable: false},
        );
    }

    showGraphs() {
        this.setState({
            ...this.state,
            stateOne: false,
            stateTwo: false,
            stateThree: false,
            stateFour: false,
            stateFive: false,
            stateSix: true

        })
    }
}


export default DayTrainingScheduleScreen;