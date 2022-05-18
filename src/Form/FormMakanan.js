import React, { Component } from "react"

class FormMakanan extends Component {
  constructor(props){
    super(props);
    this.state = { pesanan: "", jumlah: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeJumlah = this.handleChangeJumlah.bind(this);
    this.pesanan = React.createRef();
  };

  handleChange(e){
    this.setState({ pesanan: e.target.value})
  };

  handleChangeJumlah(e){
    this.setState({ jumlah: e.target.value})
  };

  handleSubmit(event){
    this.setState(event.target.value)
    alert(
      "Pesanan Anda adalah : " + this.state.pesanan + " | Jumlah Pesanan : " + this.state.jumlah
    );
    this.setState({ pesanan: "", jumlah: ""});
    this.pesanan.current.focus();
  }

  render(){
    return(
      <div>
        <center>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Masukan Pesanan Anda" onChange={this.handleChange} value={this.state.pesanan} ref={this.pesanan}/>
            <input type="number" placeholder="Masukan Jumlah Pesanan" value={this.state.jumlah} onChange={this.handleChangeJumlah}/>
            <br/>
            <br/>
            <input type="submit" value="pesan"/>
          </form>
        </center>
      </div>
    )
  }
}

export default FormMakanan;
