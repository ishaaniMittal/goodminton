import React from "react";
import {View, Text, Button, ScrollView, TouchableHighlight} from "react-native";
import GuideArea from "../common/GuideArea";
import styles from "../common/styles";

class GuideScreen extends React.Component {

    static navigationOptions = {
        title: 'Guide',
    };


    constructor(props) {
        super(props);

        this.state = {
            guideArea: [
                {
                    "name": "Quantity of Steps",
                    "area_id": 1,
                    "description": "The number of steps taken to move to a particular corner should be the same as the number of steps taken to come back to the base",
                    "demo": "",
                    "benefits": "This has some benefits which you should know one"
                },
                {
                    "name": "Quantity of Steps",
                    "area_id": 2,
                    "description": "The number of steps taken to move to a particular corner should be the same as the number of steps taken to come back to the base",
                    "demo": "",
                    "benefits": "this also has some benefits which you should know two"
                },
                {
                    "name": "Quantity of Steps",
                    "area_id": 3,
                    "description": "The number of steps taken to move to a particular corner should be the same as the number of steps taken to come back to the base",
                    "demo": "",
                    "benefits": ""
                },
                {
                    "name": "Quantity of Steps",
                    "area_id": 4,
                    "description": "The number of steps taken to move to a particular corner should be the same as the number of steps taken to come back to the base",
                    "demo": "",
                    "benefits": ""
                },
                {
                    "name": "Quantity of Steps",
                    "area_id": 5,
                    "description": "The number of steps taken to move to a particular corner should be the same as the number of steps taken to come back to the base",
                    "demo": "",
                    "benefits": ""
                },
                {
                    "name": "Quantity of Steps",
                    "area_id": 6,
                    "description": "The number of steps taken to move to a particular corner should be the same as the number of steps taken to come back to the base",
                    "demo": "",
                    "benefits": ""
                },
                {
                    "name": "Quantity of Steps",
                    "area_id": 7,
                    "description": "The number of steps taken to move to a particular corner should be the same as the number of steps taken to come back to the base",
                    "demo": "",
                    "benefits": ""
                },
                {
                    "name": "Quantity of Steps",
                    "area_id": 8,
                    "description": "The number of steps taken to move to a particular corner should be the same as the number of steps taken to come back to the base",
                    "demo": "",
                    "benefits": ""
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
                                            onPress={() => navigate('GuideDetailsScreen', {area: area})}>
                            <GuideArea
                                name={area.name} description={area.description}/></TouchableHighlight></View>
                    })}
                </View>
                </ScrollView>

                );
                }
                }

                export default GuideScreen;