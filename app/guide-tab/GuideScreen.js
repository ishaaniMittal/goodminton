import React from "react";
import {View, Text, Button, ScrollView, TouchableHighlight} from "react-native";
import GuideArea from "../common/GuideArea";
import styles from "../common/styles";

class GuideScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: "Guide",
            headerStyle: {
                backgroundColor: '#f8f8f8',
            },
        };
    };


    constructor(props) {
        super(props);

        this.state = {
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
        }
        ;
    }

    /* componentDidMount() {
         fetch('https://api.mydomain.com')
             .then(response => response.json())
             .then(data => this.setState({guideArea: data.guideArea}));
     }*/


    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView style={styles.innerContainer}>

                <View style={{flex: 1, marginBottom: 30}}>
                    {this.state.guideArea.map((area, key) => {
                        return <View key={key} style={{paddingBottom: 30}}><TouchableHighlight underlayColor='#f8f8f8'
                                            onPress={() => navigate('GuideDetailsScreen', {area: area, title:area.name})}>
                            <GuideArea
                                name={area.name} description={area.description}/></TouchableHighlight></View>
                    })}
                </View>
                </ScrollView>

                );
                }
                }

                export default GuideScreen;