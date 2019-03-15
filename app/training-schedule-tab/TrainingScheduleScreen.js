import React from "react";
import {View, Text, Button, ScrollView, TouchableHighlight} from "react-native";
import styles from "../common/styles";
import TrainingDay from "../common/TrainingDay";


class TrainingScheduleScreen extends React.Component {


    static navigationOptions = ({ navigation }) => {
        return {
            title: "Training Schedule",
            headerStyle: {
                backgroundColor: '#f8f8f8',
            },
        };
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
                        "name": "Shadow (Footwork exercise)",
                        "description": "\nFront Court:\n\n" + "Step 1: Start at center of court and visit forehand drop corner, come back to center corner and visit backhand drop corner.\n\n" +
                        "Step 2: For the first 5 times do drop action, for 5th-10th time do tap/net kill action, for 10th-15th times do drive.\n\n\n" +
                        "Back Court:\n\n" +
                        "Step 1: Start at the center of court, visit backhand baseline corner, come back to center corner, visit forehand baseline corner.\n\n" +
                        "Step 2: For the first 5 times do clear action, for 5th-10th times do smash, for 10th-15th times do cross court drop action.\n\n\n" +
                        "Optional: Repeat twice per day",
                        "demo": "demo url",
                        "benefits": "Body flexibility, increase of stamina, strengthening of legs"
                    }, {
                        "drillId": 2,
                        "name": "Picking Up shuttle (Footwork exercise)",
                        "description": "\nHave 7 shuttles ready. \n\n" +
                        "Choose 1 of 7 corners: 4 diagonal corners, 2 points in the middle of the side lines, 1 geographical center of the court.\n\n" +
                        "Step 1: Pick up all 7 shuttles and one by one, carry them to each corner and leave it there, run back to original corner empty handed.\n\n" +
                        "Step 2: Continue till each corner is marked by a shuttle.\n\n" +
                        "Step 3: Repeat in reverse so that all shuttles are placed in original corner. \n" +
                        "\n\n" +
                        "Optional: Repeat 3 times per day, choosing 1 starting corner on baseline, 1 in center of court and 1 in the front 2 corners.",
                        "demo": "demo url",
                        "benefits": "Body flexibility, weight shift/transfer among legs"
                    }, {
                        "drillId": 3,
                        "name": "Front and Back court running",
                        "description": "\nStep 1: Start from back end of court, run all the way till the net. \n\n" +
                        "Step 2: Dominant foot should touch net line at this position, bend and touch foot. \n\n" +
                        "Step 3: Jog back safely while still facing the net (without looking back) - must end with dominant foot slightly outside back court line. \n\n" +
                        "Step 4: Measure times for Step 1 and Step 3 the first time you do it. \n\n" +
                        "Note: Step 3 time should be no more than 3-4 seconds than Step 1 time for beginners.\n\n" +
                        "For intermediate and advanced, Step 3 time should be no more than 2 seconds than Step 3 time. \n\n" +
                        "Do 10 front-back cycles/set and repeat 3 sets/day.",
                        "demo": "demo url",
                        "benefits": "Proper footwork routine, reduces excess steps"
                    }
                    ],

                },
                {
                    "dayName": "Day Two",
                    "dayNumber": 2,
                    "approxTime": "20 minutes",
                    "drills": [{
                        "drillId": 1,
                        "name": "Picking Up shuttle (Footwork exercise)",
                        "description": "\nHave 7 shuttles ready. \n\n" +
                        "Choose 1 of 7 corners: 4 diagonal corners, 2 points in the middle of the side lines, 1 geographical center of the court.\n\n" +
                        "Step 1: Pick up all 7 shuttles and one by one, carry them to each corner and leave it there, run back to original corner empty handed.\n\n" +
                        "Step 2: Continue till each corner is marked by a shuttle.\n\n" +
                        "Step 3: Repeat in reverse so that all shuttles are placed in original corner. \n" +
                        "\n\n" +
                        "Optional: Repeat 3 times per day, choosing 1 starting corner on baseline, 1 in center of court and 1 in the front 2 corners.",
                        "demo": "demo url",
                        "benefits": "Body flexibility, weight shift/transfer among legs"
                    }, {
                        "drillId": 2,
                        "name": "Random moves practice",
                        "description": "\nStep 1: Mark 7 corners of court with 7 shuttles. Choose any 2 corners. \n\n" +
                        "Step 2: No matter the distance between the chosen corners, stand slightly leaned forward with non dominant in the front and take odd number of steps to reach chosen destination corner. \n\n" +
                        "Step 3: Mix and match, see all combinations (42) are covered. \n\n" +
                        "Step 4: Repeat backwards, switch positions of dominant and non-dominant foot  \n\n" +
                        "\n" +
                        "Do 2 sets/day - one with racket and swinging and another with just hands.",
                        "demo": "demo url",
                        "benefits": "Flexible movements, leg positioning, footwork"
                    }, {
                        "drillId": 3,
                        "name": "Practice following steps (for accuracy)",
                        "description": "\nStep 1: Start from back line with small steps, end with a lunge. After first week, practice a swing/lift along with lunge move. \n\n" +
                        "Step 2: Choose diagonal corners, run with medium length steps with upper body pointing in alternate directions after every two steps. \n\n" +
                        "Step 3: Scissor Kick. Jump where you are or slightly push back before jump and interchange position of dominant/non-dominant feet in midair.\n\n" +
                        "Step 4: Side by steps. Facing the same direction, run sideways in both directions. Start slow with high jumps and end with quick, low jumps.\n\n" +
                        "\n" +
                        "Do 15 repetitions in each step. Finish 3 sets a day.",
                        "demo": "demo url",
                        "benefits": "Right number of steps during rallies, return to neutral position, preparation for next stroke "
                    }
                    ],

                },
                {
                    "dayName": "Day Three",
                    "dayNumber": 3,
                    "approxTime": "20 minutes",
                    "drills": [{
                        "drillId": 1,
                        "name": "Front and Back court running",
                        "description": "\nStep 1: Start from back end of court, run all the way till the net. \n\n" +
                        "Step 2: Dominant foot should touch net line at this position, bend and touch foot. \n\n" +
                        "Step 3: Jog back safely while still facing the net (without looking back) - must end with dominant foot slightly outside back court line. \n\n" +
                        "Step 4: Measure times for Step 1 and Step 3 the first time you do it. \n\n" +
                        "Note: Step 3 time should be no more than 3-4 seconds than Step 1 time for beginners.\n\n" +
                        "For intermediate and advanced, Step 3 time should be no more than 2 seconds than Step 3 time. \n\n" +
                        "Do 10 front-back cycles/set and repeat 3 sets/day.",
                        "demo": "demo url",
                        "benefits": "Proper footwork routine, reduces excess steps"
                    }, {
                        "drillId": 2,
                        "name": "Practice following steps (for accuracy)",
                        "description": "\nStep 1: Start from back line with small steps, end with a lunge. After first week, practice a swing/lift along with lunge move. \n\n" +
                        "Step 2: Choose diagonal corners, run with medium length steps with upper body pointing in alternate directions after every two steps. \n\n" +
                        "Step 3: Scissor Kick. Jump where you are or slightly push back before jump and interchange position of dominant/non-dominant feet in midair.\n\n" +
                        "Step 4: Side by steps. Facing the same direction, run sideways in both directions. Start slow with high jumps and end with quick, low jumps.\n\n" +
                        "\n" +
                        "Do 15 repetitions in each step. Finish 3 sets a day.",
                        "demo": "demo url",
                        "benefits": "Right number of steps during rallies, return to neutral position, preparation for next stroke "
                    }, {
                        "drillId": 3,
                        "name": "Random moves practice",
                        "description": "\nStep 1: Mark 7 corners of court with 7 shuttles. Choose any 2 corners. \n\n" +
                        "Step 2: No matter the distance between the chosen corners, stand slightly leaned forward with non dominant in the front and take odd number of steps to reach chosen destination corner. \n\n" +
                        "Step 3: Mix and match, see all combinations (42) are covered. \n\n" +
                        "Step 4: Repeat backwards, switch positions of dominant and non-dominant foot  \n\n" +
                        "\n" +
                        "Do 2 sets/day - one with racket and swinging and another with just hands.",
                        "demo": "demo url",
                        "benefits": "Flexible movements, leg positioning, footwork"
                    }
                    ],

                },
                {
                    "dayName": "Day Four",
                    "dayNumber": 4,
                    "approxTime": "20 minutes",
                    "drills": [{
                        "drillId": 1,
                        "name": "Practice following steps (for accuracy)",
                        "description": "\nStep 1: Start from back line with small steps, end with a lunge. After first week, practice a swing/lift along with lunge move. \n\n" +
                        "Step 2: Choose diagonal corners, run with medium length steps with upper body pointing in alternate directions after every two steps. \n\n" +
                        "Step 3: Scissor Kick. Jump where you are or slightly push back before jump and interchange position of dominant/non-dominant feet in midair.\n\n" +
                        "Step 4: Side by steps. Facing the same direction, run sideways in both directions. Start slow with high jumps and end with quick, low jumps.\n\n" +
                        "\n" +
                        "Do 15 repetitions in each step. Finish 3 sets a day.",
                        "demo": "demo url",
                        "benefits": "Right number of steps during rallies, return to neutral position, preparation for next stroke"
                    }, {
                        "drillId": 2,
                        "name": "Practice following steps (for increasing speed)",
                        "description": "\nStep 1: Set up zig zag course with medium height cones/circles from back to front to side to back to side.  \n\n" +
                        "Step 2: Set up a ladder strip on ground. Start with both feet on one side, and with each step criss cross through all rungs of ladder.\n\n" +
                        "Step 3: Set up ladder strip on ground. With body and one leg staying on one side of ladder only, use other leg/foot to cover 3 positions for each rung. \n\n" +
                        "\n" +
                        "Repeat no more than twice a day.",
                        "demo": "demo url",
                        "benefits": "Faster gameplay, fluid movements, strengthening leg muscle.  "
                    }, {
                        "drillId": 3,
                        "name": "Random moves practice",
                        "description": "\nStep 1: Mark 7 corners of court with 7 shuttles. Choose any 2 corners. \n\n" +
                        "Step 2: No matter the distance between the chosen corners, stand slightly leaned forward with non dominant in the front and take odd number of steps to reach chosen destination corner. \n\n" +
                        "Step 3: Mix and match, see all combinations (42) are covered. \n\n" +
                        "Step 4: Repeat backwards, switch positions of dominant and non-dominant foot  \n\n" +
                        "\n" +
                        "Do 2 sets/day - one with racket and swinging and another with just hands.",
                        "demo": "demo url",
                        "benefits": "Flexible movements, leg positioning, footwork"
                    }
                    ],

                },
                {
                    "dayName": "Day Five",
                    "dayNumber": 5,
                    "approxTime": "20 minutes",
                    "drills": [{
                        "drillId": 1,
                        "name": "Random moves practice",
                        "description": "\nStep 1: Mark 7 corners of court with 7 shuttles. Choose any 2 corners. \n\n" +
                        "Step 2: No matter the distance between the chosen corners, stand slightly leaned forward with non dominant in the front and take odd number of steps to reach chosen destination corner. \n\n" +
                        "Step 3: Mix and match, see all combinations (42) are covered. \n\n" +
                        "Step 4: Repeat backwards, switch positions of dominant and non-dominant foot  \n\n" +
                        "\n" +
                        "Do 2 sets/day - one with racket and swinging and another with just hands.",
                        "demo": "demo url",
                        "benefits": "Flexible movements, leg positioning, footwork"
                    }, {
                        "drillId": 2,
                        "name": "Shadow (Footwork exercise)",
                        "description": "\nFront Court:\n\n" + "Step 1: Start at center of court and visit forehand drop corner, come back to center corner and visit backhand drop corner.\n\n" +
                        "Step 2: For the first 5 times do drop action, for 5th-10th time do tap/net kill action, for 10th-15th times do drive.\n\n\n" +
                        "Back Court:\n\n" +
                        "Step 1: Start at the center of court, visit backhand baseline corner, come back to center corner, visit forehand baseline corner.\n\n" +
                        "Step 2: For the first 5 times do clear action, for 5th-10th times do smash, for 10th-15th times do cross court drop action.\n\n\n" +
                        "Optional: Repeat twice per day",
                        "demo": "demo url",
                        "benefits": "Body flexibility, increase of stamina, strengthening of legs"
                    }, {
                        "drillId": 3,
                        "name": "Practice following steps (for increasing speed)",
                        "description": "\nStep 1: Set up zig zag course with medium height cones/circles from back to front to side to back to side.  \n\n" +
                        "Step 2: Set up a ladder strip on ground. Start with both feet on one side, and with each step criss cross through all rungs of ladder.\n\n" +
                        "Step 3: Set up ladder strip on ground. With body and one leg staying on one side of ladder only, use other leg/foot to cover 3 positions for each rung. \n\n" +
                        "\n" +
                        "Repeat no more than twice a day.",
                        "demo": "demo url",
                        "benefits": "Faster gameplay, fluid movements, strengthening leg muscle."
                    }
                    ],

                },
                {
                    "dayName": "Day Six",
                    "dayNumber": 6,
                    "approxTime": "20 minutes",
                    "drills": [{
                        "drillId": 1,
                        "name": "Practice following steps (for increasing speed)",
                        "description": "\nStep 1: Set up zig zag course with medium height cones/circles from back to front to side to back to side.  \n\n" +
                        "Step 2: Set up a ladder strip on ground. Start with both feet on one side, and with each step criss cross through all rungs of ladder.\n\n" +
                        "Step 3: Set up ladder strip on ground. With body and one leg staying on one side of ladder only, use other leg/foot to cover 3 positions for each rung. \n\n" +
                        "\n" +
                        "Repeat no more than twice a day.",
                        "demo": "demo url",
                        "benefits": "Faster gameplay, fluid movements, strengthening leg muscle."
                    }, {
                        "drillId": 2,
                        "name": "Front and Back court running",
                        "description": "\nStep 1: Start from back end of court, run all the way till the net. \n\n" +
                        "Step 2: Dominant foot should touch net line at this position, bend and touch foot. \n\n" +
                        "Step 3: Jog back safely while still facing the net (without looking back) - must end with dominant foot slightly outside back court line. \n\n" +
                        "Step 4: Measure times for Step 1 and Step 3 the first time you do it. \n\n" +
                        "Note: Step 3 time should be no more than 3-4 seconds than Step 1 time for beginners.\n\n" +
                        "For intermediate and advanced, Step 3 time should be no more than 2 seconds than Step 3 time. \n\n" +
                        "Do 10 front-back cycles/set and repeat 3 sets/day.",
                        "demo": "demo url",
                        "benefits": "Proper footwork routine, reduces excess steps"
                    }, {
                        "drillId": 3,
                        "name": "Practice following steps (for accuracy)",
                        "description": "\nStep 1: Start from back line with small steps, end with a lunge. After first week, practice a swing/lift along with lunge move. \n\n" +
                        "Step 2: Choose diagonal corners, run with medium length steps with upper body pointing in alternate directions after every two steps. \n\n" +
                        "Step 3: Scissor Kick. Jump where you are or slightly push back before jump and interchange position of dominant/non-dominant feet in midair.\n\n" +
                        "Step 4: Side by steps. Facing the same direction, run sideways in both directions. Start slow with high jumps and end with quick, low jumps.\n\n" +
                        "\n" +
                        "Do 15 repetitions in each step. Finish 3 sets a day.",
                        "demo": "demo url",
                        "benefits": "Right number of steps during rallies, return to neutral position, preparation for next stroke"
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
                                onPress={() => navigate('DayTrainingSchedule', {day: day, title: day.dayName})}>
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