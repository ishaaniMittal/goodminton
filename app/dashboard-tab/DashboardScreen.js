import React from "react";
import {View, Text, ScrollView, TouchableHighlight} from "react-native";
import styles from "../common/styles";
import AreaOfImprovement from "../common/AreaOfImprovement";
import DashboardIndexes from "../common/DasboardIndexes";
import {VictoryAxis, VictoryBar, VictoryChart} from "victory-native";
import {Switch} from "react-native-switch";

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
            stateOne: true,
            stateTwo: false,
            trueSwitchIsOn: true,
            falseSwitchIsOn: false,
            data: this.getData()
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


    render() {


        return (

            <ScrollView style={{flex: 1}}>
                <View>{this.getView()}</View>
            </ScrollView>
        );
    }

    getView() {
        if (this.state.stateOne) {
            return <View style={{flex: 1}}>
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
                        <Text onPress={() => someAction()} style={{color: '#1199EE'}}>Learn More</Text></Text>
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
        }
        else if (this.state.stateTwo) {
            return <View>
                <View style={{flex: 1, alignItems: 'center', marginTop: 30, paddingRight: 20}}>
                    <Text style={styles.textHeader}>Day 1 - Day 7</Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end', marginTop: 10, paddingRight: 20}}>
                    <Switch
                        value={true}
                        onValueChange={(val) => this.changeGraphData(val)}
                        disabled={false}
                        activeText={'On'}
                        inActiveText={'Off'}
                        circleSize={30}
                        barHeight={1}
                        circleBorderWidth={3}
                        backgroundActive={'green'}
                        backgroundInactive={'gray'}
                        circleActiveColor={'#30a566'}
                        circleInActiveColor={'#000000'}
                        changeValueImmediately={true}
                       // custom component to render inside the Switch circle (Text, Image, etc.)
                        changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                        innerCircleStyle={{
                            alignItems: "center",
                            justifyContent: "center"
                        }} // style for inner animated circle for what you (may) be rendering inside the circle
                        outerCircleStyle={{}} // style for outer animated circle
                        renderActiveText={false}
                        renderInActiveText={false}
                        switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                        switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                        switchWidthMultiplier={2} // multipled by the `circleSize` prop to calculate total width of the Switch
                        switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
                    />
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
        }
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
}

export default DashboardScreen;