import {StyleSheet} from "react-native";

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
        textHeader: {
            fontSize: 17,
            textAlign: 'left',
            paddingLeft: 15,
            fontFamily: "SFProText-Regular",
        },
        textBody: {
            fontSize: 15,
            textAlign: 'left',
            opacity: 0.8,
            marginTop: 10,
            paddingLeft: 15,
            paddingRight:15,
            fontFamily: "SFProText-Regular"
        },
        textBodyForCustomIndex: {
            fontSize: 15,
            textAlign: 'left',
            opacity: 0.8,
            marginTop: 10,
            paddingLeft: 15,
            marginBottom: 10,
            fontFamily: "SFProText-Regular"
        },
        textBodyFullOpacity: {
            fontSize: 15,
            textAlign: 'left',
            opacity: 1,
            marginTop: 10,
            paddingLeft: 15,
            marginLeft: 10,
            marginRight: 10,
            fontFamily: "SFProText-Regular"
        },
        textAreaOfImprovement: {
            fontSize: 34,
            fontWeight: '700',
            textAlign: 'right',
            color: 'black',
            paddingRight: 20,
            fontFamily: "SFProText-Regular"
        },
        innerContainer: {
            flex: 1,
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20
        },
        areaOfImprovementContainer: {
            flex: 1,
            paddingTop: 20,
            marginBottom: 20,
            paddingLeft: 20,
            paddingRight: 20
        },
        boundaryGuideArea: {
            flex: 1,
            paddingTop: 10,
            paddingBottom: 10,
            borderColor: '#e4e4e4',
            borderRadius: 5,
            borderStyle: 'solid',
            borderWidth: 1
        },
        dashBoardDayHeader: {
            textAlign: 'center',
            fontSize: 20,
            fontFamily: "SFProText-Regular"
        },
        circleForIndex: {
            flex: 1,
            paddingTop: 10,
            paddingBottom: 10,
            borderColor: '#e4e4e4',
            borderRadius: 70,
            borderStyle: 'solid',
            borderWidth: 1,
            marginLeft: 10,
            marginRight: 10
        },
        indexNumberInCircle: {
            fontSize: 28,
            textAlign: 'center',
            fontFamily: "SFProText-Regular"

        },
        borderForCustomIndexText: {
            marginTop: 20,
            borderColor: '#e4e4e4',
            borderWidth: 1,
            borderStyle: 'solid'

        },
        recordingButton: {
            marginTop: 30,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#e4e4e4",
            borderRadius: 5
        },
        sessionCompletedCircle: {
            width: 60, height: 60, borderRadius: 30,
            borderWidth: 1,
            borderColor: '#e4e4e4',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    })
;

export default styles;