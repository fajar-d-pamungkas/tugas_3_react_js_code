import React, { Component } from 'react';

class MenuKontak extends Component {
  constructor(props) {
    super(props)
      this.state = {
      alamat:'Jl. Swadaya IV, Pd. Ranggon, Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13860',
      kontak: '081312345678'
    }
  }
  render(){
    return(
      <div>
        <center>
          <h4>{this.state.alamat}</h4>
          <h5>Kontak Kami : {this.state.kontak}</h5>
        </center>
      </div>
    )
  }
}

export default MenuKontak;
