import React from "react";
import SegmentedControlTab from "react-native-segmented-control-tab";
import styles from "../common/styles";
import {Button, ScrollView, Text, View, Alert, TouchableHighlight} from "react-native";
import CountDown from 'react-native-countdown-component';
import SessionCompleted from "../common/SessionCompleted";
import DashboardIndexes from "../common/DasboardIndexes";
import AreaOfImprovement from "../common/AreaOfImprovement";


class DayTrainingScheduleScreen extends React.Component {


    constructor() {
        super();
        this.state = {
            selectedIndex: 0,
            selectedDrill: {},
            stateOne: true,
            stateTwo: false,
            stateThree: false,
            stateFour: false,
            stateFive: false,
            stateStateSix: false,
            justCompletedSessionAnalyzed: false
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
            stateThree: false
        });

    }

    stateOne() {
        return (<View>
            <View style={styles.recordingButton}>
                <Button title="Start Recording"/>
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
        </View>);
    }

    render() {
        const {navigation} = this.props;
        const day = navigation.getParam('day', {});
        console.log('Initial state',this.state.stateOne);

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
                <View>{this.displayViewsBasedOnState()}</View>
            </ScrollView>
        );
    }

    displayViewsBasedOnState() {

        if (this.state.stateOne) {
            console.log('DisplayView 1');
            return <View style={styles.innerContainer}>
                <View style={styles.recordingButton}>
                    <Button onPress={this.onStartRecordingPress()} title="Start Recording"/>
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
                /></View>;
        } else if (this.state.stateThree) {
            return <View style={styles.innerContainer}>
                <View styles={{}}>
                    <Text style={{fontSize: 28, color: '#EE4444'}}>Recording Data ...</Text>
                </View>
                <View style={styles.recordingButton}>
                    <Button title="Stop Recording" onPress={this.stopRecordingButtonPressed()}/>
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
                    <Button title="Record Another Session" onPress={this.recordAnotherSessionButtonPressed()}/>
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
                    <TouchableHighlight underlayColor='#f8f8f8'
                                        onPress={() => this.showGraphs()}><AreaOfImprovement
                        name="Quantity of Steps" score="7/10"/></TouchableHighlight>
                    <AreaOfImprovement name="Quantity of Steps" score="7/10"/>
                    <AreaOfImprovement name="Quantity of Steps" score="7/10"/>
                    <AreaOfImprovement name="Quantity of Steps" score="7/10"/>
                    <AreaOfImprovement name="Quantity of Steps" score="7/10"/>
                    <AreaOfImprovement name="Quantity of Steps" score="7/10"/>
                    <AreaOfImprovement name="Quantity of Steps" score="7/10"/>

                </View>
            </View>
        } else if (this.state.stateSix) {
            return <View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{
                        fontSize: 17,
                        textAlign: 'left', flex: 1

                    }}>Quantity of Steps</Text>
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
            'Record Another Session',
            'Would you like to record another session of the same drill?',
            [
                {text: 'OK', onPress: () => console.log('ok pressed')}
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