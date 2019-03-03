import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import {createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation';

import TrainingScheduleScreen from './app/training-schedule-tab/TrainingScheduleScreen';
import DashboardScreen from './app/dashboard-tab/DashboardScreen';
import GuideScreen from './app/guide-tab/GuideScreen';
import GuideDetailsScreen from './app/guide-tab/GuideDetailsScreen'
import DayTrainingScheduleScreen from "./app/training-schedule-tab/DayTrainingScheduleScreen";

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Details!</Text>
            </View>
        );
    }
}


const TrainingScheduleStack = createStackNavigator({
    TrainingSchedule: {screen: TrainingScheduleScreen},
    DayTrainingSchedule: {screen: DayTrainingScheduleScreen},
}, /*{
    defaultNavigationOptions: {
        title: 'Dashboard',
        tabBarIcon: ({tintColor}) => <Icon
            name="users"
            size={30}
            type="entypo"
            color={tintColor}
        />
    }
}*/);

const DashboardStack = createStackNavigator({
        Settings: {screen: DashboardScreen},
        Details: {screen: DetailsScreen},
    }/*,
    {
        defaultNavigationOptions: {
            title: 'Settings',
            tabBarIcon: ({tintColor}) => <Icon
                name="users"
                size={30}
                type="entypo"
                color={tintColor}
            />
        },
    }*/
);

const GuideStack = createStackNavigator({
    GuideScreen: {screen: GuideScreen},
    GuideDetailsScreen: {screen: GuideDetailsScreen}
});

const App = createBottomTabNavigator(
    {
        TrainingSchedule: {screen: TrainingScheduleStack},
        Dashboard: {screen: DashboardStack},
        Guide: {screen: GuideStack}
    },
    /*{
        tabBarOptions: {
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
        },
    }*/
);

export default createAppContainer(App);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
