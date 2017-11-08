import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        marginLeft:10,
        marginRight:10,
        marginTop:10,
        height:30,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#DDD'
    },
    city:{
        flexDirection:'row'
    },
    departureCity:{
        borderRightWidth:1,
        borderRightColor:'#666',
        paddingLeft:10,
        paddingRight:20,
        alignItems:'flex-end'
    },
    departureCityText:{
        color:'#333',
        fontSize:14
    },
    destinationCity:{
        flex:1,
        alignItems:'center'
    },
    destinationCityText:{
        color:'#AAA',
        fontSize:14
    }
});