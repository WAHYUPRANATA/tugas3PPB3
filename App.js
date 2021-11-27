import React, { Component } from "react";
import { View, Text, Image, Button} from "react-native";
import tambah from './img/tambah.png';
import list from './img/list.png';
import account from './img/account.png';
import yaa from './img/yaa.png';
import ya from './img/ya.png';
import feed from './img/feed.png';
import tag from './img/tag.png';
import reels from './img/reels.png';
import singa from './img/singa.png';
import lion from './img/lion.png';
import loin from './img/loin.png';
import home from './img/home.png';
import s from './img/s.png';
import shop from './img/shop.png';
import { style } from "./style";

const App = () => {
  return (
    <View style={style.container}>
      <View style={{flex:1, backgroundColor:'white', flexDirection:'row'}}>
        <View style={{flex:6, backgroundColor:'white',
          justifyContent:'center'}}>
            <Text style={{fontSize:20}}>instagram</Text>
          </View>
          <TampilanGambar simbol={tambah} />
          <TampilanGambar simbol={list} />
      </View>
      <View style={{flex:2, backgroundColor:'white',
        flexDirection:'row'}}>
          <View style={style.viewGambar}>
            <Image source={account} style={{width:80,
              height:80, borderRadius:80/2}} />
      </View>
          <CardProfile angka="100" keterangan="Postingan" />
          <CardProfile angka="1.010" keterangan="Pengikut" />
          <CardProfile angka="100" keterangan="Mengikuti" />
      </View>
      <View style={{flex:2, backgroundColor:'white'}}>
        <Text style={{fontSize:20}}>Wahyu Pranata</Text>
        <Text style={style.textBio}>Keterangan Pertama</Text>
      </View>
      <View style={{flex:1, backgroundColor:'white',
        flexDirection:'row'}}>
          <View style={{flex:7, backgroundColor:'white'}}>
            <Button title="Edit Profil" ></Button>
          </View>
          <View style={{flex:1, backgroundColor:'white'}}>
            <Button title="v" style={{borderRadius:5}} ></Button>
          </View>
      </View>
      <View style={{flex:2, backgroundColor:'white', flexDirection:'row'}}>
        <Sorotan gambar={yaa} keteranganSorotan="indanya" />
        <Sorotan gambar={ya} keteranganSorotan="siluet" />
      </View>
        <View style={{flex:1, backgroundColor:'white', flexDirection:'row' }}>
          <TampilanGambar simbol={feed} />
          <TampilanGambar simbol={tag} />
          <TampilanGambar simbol={reels} />
        </View>
        <View style={{flex:1, backgroundColor:'white', flexDirection:'row'}}>
          <Foto seed={singa} />
          <Foto seed={lion} />
          <Foto seed={loin} /> 
        </View>
        <View style={{flex:1, backgroundColor:'white', flexDirection:'row'}}>
          <TampilanGambar simbol={home} />
          <TampilanGambar simbol={s} />
          <TampilanGambar simbol={reels}/>
          <TampilanGambar simbol={shop} />
          <View style={style.viewGambar}>
            <Image source={account} style={{width:20,
              height:20, borderRadius:80/2}} />
      </View>
        </View>
    </View>
         
  )
}

const TampilanGambar = (props) => {
  return (
    <View style={style.viewGambar}>
      <Image source={props.simbol} style={style.gambar} />
    </View>
  )
}

const CardProfile = (props) => {
  return (
    <View style={style.viewGambar}>
      <Text style={style.textProfil}>{props.angka}</Text>
      <Text style={style.keteranganProfil}>
        {props.keterangan}</Text>
    </View>
  )
}

const Sorotan = (props) => {
  return (
    <View style={style.viewGambar}>
      <Image source={props.gambar} style=
      {style.gambarProfil} />
      <Text>{props.keteranganSorotan}</Text>
    </View>
  )
  }
  
  const Foto = (props) => {
    return (
      <View style={style.viewRow}>
        <Image source={props.seed} style={style.gridGambar} />
      </View>
    )
  }

export default App;