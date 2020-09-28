import React, { Component } from 'react';

class MenuTentangKami extends Component {
  constructor(props) {
    super(props)
      this.state = {
      tentang:'Warung Nusantara Adalah Restoran Yang Bernuansa Makanan Nusantara, Kami Ada Untuk Membuat Anda Menikmati Makanan Khas Dari Nusantara'
    }
  }
  render(){
    return(
      <div>
        <center>
        <h5>Tentang Kami</h5>
        <h5>{this.state.tentang}</h5>
        </center>
      </div>
    )
  }
}

export default MenuTentangKami;
