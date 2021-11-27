import { StyleSheet } from "react-native";

const style=StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'white',
      margin:10
      },
      gambar: {
        width:20,
        height:20,
        margin:10,
      },
      gambarProfil: {
        width:80,
        height:80,
        borderRadius:80/2
      },
      textProfil: {
        fontWeight:'bold',
        fontSize:25,
        // textAlign:'center'
      },
      keteranganProfil: {
        fontSize:15
      },
      textBio: {
        fontSize:13,
        color:'blue'
      },
      viewRow: {
        backgroundColor:'white',
        flex:1,
        flexDirection:'row'
      },
      viewGambar: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
      gridGambar: {
        width:87,
        height:87,
        borderColor:'black'
      }
    });

  export {style};