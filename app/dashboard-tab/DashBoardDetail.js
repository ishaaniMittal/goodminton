import {Text, View, ActionSheetIOS} from "react-native";
import React from "react";
import {Switch} from "react-native-switch";
import {VictoryAxis, VictoryBar, VictoryChart} from "victory-native";
import styles from "../common/styles";

class DashBoardDetail extends React.Component {

    data = [
        {quarter: 'Day 1', earnings: 13000},
        {quarter: 'Day 2', earnings: 16500},
        {quarter: 'Day 3', earnings: 14250},
        {quarter: 'Day 4', earnings: 19000},
        {quarter: 'Day 5', earnings: 16500},
        {quarter: 'Day 6', earnings: 14250},
        {quarter: 'Day 7', earnings: 19000}
    ];

    getData() {
        return this.data;
    }

    constructor() {
        super();
        this.state = {
            data: this.getData()
        };
    }

    changeGraphData(val) {
        if (val === true) {
            this.setState({
                ...this.state,
                data: [
                    {quarter: 'Day 1', earnings: 13000},
                    {quarter: 'Day 2', earnings: 16500},
                    {quarter: 'Day 3', earnings: 14250},
                    {quarter: 'Day 4', earnings: 19000},
                    {quarter: 'Day 5', earnings: 16500},
                    {quarter: 'Day 6', earnings: 14250},
                    {quarter: 'Day 7', earnings: 19000}
                ]
            })
        }
        else {
            this.setState({
                ...this.state,
                data: [
                    {quarter: 'Day 1', earnings: 130},
                    {quarter: 'Day 2', earnings: 160},
                    {quarter: 'Day 3', earnings: 140},
                    {quarter: 'Day 4', earnings: 190},
                    {quarter: 'Day 5', earnings: 160},
                    {quarter: 'Day 6', earnings: 140},
                    {quarter: 'Day 7', earnings: 190}
                ]
            })
        }
    }

    static showActionSheetIOS() {
        const BUTTONS = [
            'Option 0',
            'Option 1',
            'Option 2',
            'Cancel'
        ];

        const CANCEL_INDEX = 3;

        ActionSheetIOS.showActionSheetWithOptions(
            {
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX
            },
            (buttonIndex) => {
                if (buttonIndex === 1) {
                    /* destructive action */
                }
            },
        );
    }


    render() {
        return (
            <View>
                <View style={{flex: 1, alignItems: 'center', marginTop: 30, paddingRight: 20}}>
                    <Text style={styles.textHeader} onPress={() => this.showActionSheetIOS()}>Day 1 - Day 7</Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end', marginTop: 10, paddingRight: 20}}>
                    <Switch
                        value={true}
                        onValueChange={(val) => this.changeGraphData(val)}
                        disabled={false}
                        activeText={'On'}
                        inActiveText={'Off'}
                        backgroundActive={'green'}
                        backgroundInactive={'gray'}
                        circleActiveColor={'#30a566'}
                        circleInActiveColor={'#000000'}/>
                </View>
                <VictoryChart domainPadding={20} animate={{duration: 300}}>
                    <VictoryAxis

                    />
                    <VictoryAxis
                        dependentAxis
                        // tickFormat specifies how ticks should be displayed
                        tickFormat={(x) => (``)}
                    />
                    <VictoryBar
                        data={this.state.data}
                        style={{
                            data: {fill: "#007AFF", width: 12}
                        }}
                        animate={{
                            onExit: {
                                duration: 300,
                                before: () => ({
                                    _y: 0,
                                    fill: "#007AFF",
                                    label: "BYE"
                                })
                            }
                        }}
                        x="quarter"
                        y="earnings"
                    />
                </VictoryChart>
                <View style={styles.innerContainer}>
                    <Text style={styles.textHeader}>Recommendation</Text>
                    <Text style={styles.textBody}>Here is where the recommendation created by the algorithm will
                        come</Text>

                </View>
                <View style={styles.innerContainer}>
                    <Text style={styles.textHeader}>Description</Text>
                    <Text style={styles.textBody}>Here is where the description created by the algorithm will
                        come</Text>
                </View>
                <View style={styles.innerContainer}>
                    <Text style={styles.textHeader}>Demo</Text>
                </View>
                <View style={styles.innerContainer}>
                    <Text style={styles.textHeader}>Benefits</Text>
                    <Text style={styles.textBody}>Here is where the benefits created by the algorithm will
                        come</Text>
                </View>
            </View>
        );

    }
}

export default DashBoardDetail;