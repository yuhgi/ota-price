import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    calendar:{
        
    },
    weekdays:{
        flexDirection:'row',
        backgroundColor:'#CCC'
    },
    weekdayItem:{
        flex:1,
        textAlign:'center'
    },
    month:{
        alignItems:'center'
    },
    dateTable:{
        paddingTop:10
    },
    dateRow:{
        flexDirection:'row'
    },
    dateCell:{
        flex:1,
        borderRadius:4,
        height:40,
        alignItems:'center',
        justifyContent:'center'
    },
    selectedCell:{
        backgroundColor:'#0088FF'
    }
});