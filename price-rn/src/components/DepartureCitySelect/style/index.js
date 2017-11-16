import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFF'
    },
    header:{
        flexDirection:'row',
        backgroundColor:'#0088ff',
        justifyContent:'center',
        alignItems:'center',
        height:40
    },
    headerTitle:{
        color:'#FFF',
        fontSize:22
    },
    return:{
        position:'absolute',
        left:0,
        marginLeft:20,
        alignSelf:'center',
        justifyContent:'center'
    },
    returnText:{
        fontSize:22,
        color:'#FFF'
    }
});