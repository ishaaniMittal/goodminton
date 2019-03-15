import React from "react";
import {View, Text, ScrollView, TouchableHighlight, ActionSheetIOS, Alert} from "react-native";
import styles from "../common/styles";
import AreaOfImprovement from "../common/AreaOfImprovement";
import DashboardIndexes from "../common/DasboardIndexes";
import GraphView from "../common/GraphView";

class DashboardScreen extends React.Component {

    data = [
        {quarter: 'Day 1', earnings: 13000},
        {quarter: 'Day 2', earnings: 16500},
        {quarter: 'Day 3', earnings: 14250},
        {quarter: 'Day 4', earnings: 19000},
        {quarter: 'Day 5', earnings: 16500},
        {quarter: 'Day 6', earnings: 14250},
        {quarter: 'Day 7', earnings: 19000}
    ];

    static navigationOptions = ({ navigation }) => {
        return {
            title: "Dashboard",
            headerStyle: {
                backgroundColor: '#f8f8f8',
            },
        };
    };

    componentDidMount() {
        this.setStateInterval = window.setInterval(() => {
            this.setState({
                data: this.getData()
            });
        }, 3000);
    }

    componentWillUnmount() {
        window.clearInterval(this.setStateInterval);
    }

    constructor() {
        super();
        this.state = {
            session: false,
            day: true,
            trueSwitchIsOn: true,
            falseSwitchIsOn: false,
            clicked: 'none',
            data: this.getData(),
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
                    "name": "Consecutive Steps Length",
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

    getData() {
        return this.data;
    }

    showGraphs() {
        this.setState({
            ...this.state,
            stateOne: false,
            stateTwo: true
        })
    }


    showIndexInformation(){
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

    render() {
        const {navigate} = this.props.navigation;

        return (

            <ScrollView style={{flex: 1}}>
                <View>
                    <View style={{flex: 1}}>
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
                                <Text onPress={() => this.showIndexInformation()} style={{color: '#1199EE'}}> Learn More</Text></Text>
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
                </View>
            </ScrollView>
        );
    }


}

export default DashboardScreen;