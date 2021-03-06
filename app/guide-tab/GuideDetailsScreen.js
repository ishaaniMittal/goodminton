import React from "react";
import {ScrollView, Text, View} from "react-native";
import styles from "../common/styles";

class GuideScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: "Guide - " + navigation.getParam('title', 'Guide'),
            headerStyle: {
                backgroundColor: '#f8f8f8',
            },
        };
    };

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        /* this.state.name = this.state.guideArea[this.areaId].name;
         this.state.selectedArea = this.state.guideArea[this.areaId];*/
    }

    render() {
        const {navigation} = this.props;
        const area = navigation.getParam('area', {});
        return (
            <ScrollView style={styles.innerContainer}>
                <View style={{flex: 1, marginBottom: 30}}>

                    <Text style={styles.textBody}>{area.description}</Text>

                    <View style={{paddingTop: 30}}>
                        <Text style={styles.textHeader}>Demo</Text>
                    </View>
                    <View style={{paddingTop: 350}}>
                    <Text style={styles.textHeader}>Benefits</Text>
                    </View>
                    <Text style={styles.textBody}>{area.benefits}</Text>
                </View>
            </ScrollView>
        );
    }
}

export default GuideScreen;