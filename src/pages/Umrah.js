import React, { Component } from "react";
import { connect } from "react-redux";
import { UmrahAction } from "../redux/actions/UmrahAction";
// import { FormattedMessage } from "react-intl";
import { Modal, Button, Glyphicon, FormGroup, Table, Form } from "react-bootstrap";
import imgBurger from "../assets/images/burger-menu.svg";
import imgUmrah from "../assets/images/logo-kasiumrah-white.png";
import umrahBlue from "../assets/images/logo-kasiumrah-blue.png";
import imgTitleUmrah from "../assets/images/title-umrah.png";
import fotoUmrah from "../assets/images/foto-umrah.png";
import imgGlass from "../assets/images/ic-glass.png";
import imgPlane from "../assets/images/plane.gif";
import imgSaudi from "../assets/images/ic-saudi.png";
import imgFree from "../assets/images/ic-free.png";
import imgTrain from "../assets/images/train.gif";
import icTrain from "../assets/images/ic-train.png";
import hotel1 from "../assets/images/hotel1.jpg";
import star1 from "../assets/images/ic-start-gold.svg"
import star2 from "../assets/images/ic-start-grey.svg"
import avatarone from "../assets/images/ustadz.jpg"
import avatartwo from "../assets/images/founder.jpg"
import icCamel from "../assets/images/ic-camel.png"
import icDiamond from "../assets/images/ic-diamond.png"
import cPlane from "../assets/images/color-plane.png"
import cVisa from "../assets/images/color-visa.png"
import cInsurance from "../assets/images/color-insurance.png"
import cManasik from "../assets/images/color-manasik.png"
import cRaudhoh from "../assets/images/color-raudhoh.png"
import cZamzam from "../assets/images/color-zamzam.png"
import cEquipment from "../assets/images/color-equipment.png"
import ig from "../assets/images/instagram.svg"
import tiktok from "../assets/images/tiktok.svg"
import whatsapp from "../assets/images/whatsapp.svg"
import poster from "../assets/images/poster.png"




class Umrah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nullData : {
        namaLengkap: "",
        jenisKelamin: "",
        noHp: "",
        email: "",
        domisili:"",
        paket:"",
        paspor:""
      },
      formdataTest : {
        namaLengkap: "",
        jenisKelamin: "",
        noHp: "",
        email: "",
        domisili:"",
        paket:"",
        paspor:"",
      },
    };

    this.handleFormShow = this.handleFormShow.bind(this);
    this.handleFormClose = this.handleFormClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleSubmitForm(event) {
    event.preventDefault();
    let data = {
      namaLengkap: this.state.formdataTest.namaLengkap,
      jenisKelamin: this.state.formdataTest.jenisKelamin,
      noHp: this.state.formdataTest.noHp,
      email: this.state.formdataTest.email,
      domisili: this.state.formdataTest.domisili,
      paket: this.state.formdataTest.paket,
      paspor: this.state.formdataTest.paspor
    };
    this.props.dispatch(
      UmrahAction.fetchSave(
        data,
        () => {
        },
        () => {
          this.setState({
            formdataTest: this.state.nullData,
          });
          alert("SUKSES DAFTAR")
          this.forceUpdate();
          this.handleFormClose();
        }
      )
    );
  }

  handleChange = (event) => {
    let formdataTest = Object.assign({}, this.state.formdataTest);
    let name = event.target.name;
    let value = event.target.value;
    formdataTest[name] = value;
    this.setState({
      formdataTest: formdataTest,
    }, ()=>{
      console.log('TESTT', formdataTest)
    });
  };

  handleFormClose() {
    // this.forceUpdate();
    // this.setState({ formdataTest: this.state.formdataTest });
    this.props.dispatch(UmrahAction.closeForm());
  }

  handleFormShow(data = this.state.formdataTest) {
    this.setState(
      {
        formdataTest: data,
      },
      () => {
        this.props.dispatch(UmrahAction.openForm());
      }
    );
  }


  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div className="new-content-umrah">
          <div
            className="col-md-6 home-table-wrapper"
          >
              <div className="content-umrah">
                <div className="col-md-12 box-head">
                    <div className="col-md-6">
                      <img
                        className="ic-logo"
                        src={imgUmrah}
                      /></div>
                    <div className="col-md-6">
                      <img
                        className="ic-burger"
                        src={imgBurger}
                      />
                    </div>
                </div>
                <div className="col-md-12 section-1">
                    <img
                        className="ic-title-umrah"
                        src={imgTitleUmrah}
                    />
                    <div className="text-umrah">
                        Pastinya ini menjadi momen penting dan spesial buat kamu dengan keluarga/pasangan tercinta, kalau berangkat umrah di bulan November
                    </div>
                    <div className="content-button">
                        <Button
                            className="btn-register"
                            onClick={() => this.handleFormShow()}
                          >
                          DAFTAR SEKARANG
                        </Button>
                    </div>
                </div>
                <div className="col-md-12 umrah-pad">
                  <img
                      className="foto-umrah"
                      src={fotoUmrah}
                  />
                </div>
                <div className="col-md-12 section-2">
                  <div className="text-umrah-sectwo">
                    HUBUNGAN KAMU SAMA ISTRI/SUAMI RENGGANG KARENA KURANG QUALITY TIME ?
                  </div>
                  <span className="span-umrah">INI 5 AKIBATNYA:</span>
                  <div className="content-sectwo">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="bg-sectwo height-sectwo">
                          <label className="label-one">1.</label>
                          <label className="label-two">Bisa sering salah paham</label>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="bg-sectwo height-sectwo">
                          <label className="label-one">2.</label>
                          <label className="label-two">Terciptanya Jarak Emosional</label>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="bg-sectwo height-sectwo">
                          <label className="label-one">3.</label>
                          <label className="label-two">Kurangnya Perhatian & Komunikasi</label>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="bg-sectwo height-sectwo">
                          <label className="label-one">4.</label>
                          <label className="label-two">Meningkatkan Rasa Bosan & Stress</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 section-3">
                  <div className="text-umrah-sectwo">
                    DAN KAMU MUNGKIN BERTANYA TANYA
                  </div>
                  <span className="span-umrah">Adakah tempat healing bersama pasangan biar makin harmonis?</span>
                  <div className="row">
                      <div className="bg-secthree">
                        <span>Penelitian menunjukkan quality time penting banget untuk menjaga keutuhan rumah tangga. Umrah adalah jawaban dari semua permasalahan kamu bersama pasangan. Selain ibadah, kamu juga bisa deeptalk di Al-Ula, seru-seruan di Taif naik toboggan dan gak usah berlama-lama perjalanan Makkah dan Madinah karena udah pakai kereta cepat.</span>
                      </div>
                      <div className="">
                        <img
                          className="ic-glass"
                          src={imgGlass}
                        />
                      </div>
                  </div>
                </div>
                <div className="col-md-12 section-4">
                  <div className="text-umrah-secfour">
                    KASIUMRAH PUNYA SEMUANYA!
                  </div>
                  <div className="span-umrah-secfour">
                    PESAWAT <i>Direct</i> JEDDAH
                  </div>
                  <div className="span-secfour">
                    Terbang dengan pesawat <i style={{fontWeight:'bold', color:'#0A6937'}}>saudia airlines</i> langsung dari <i>JAKARTA</i> ke <i>JEDDAH</i>.
                  </div>
                  <div className="row">
                      <img
                        className="ic-gift"
                        src={imgPlane}
                      />
                      <img
                        className="ic-brand"
                        src={imgSaudi}
                      />
                      <img
                        className="ic-free"
                        src={imgFree}
                      />
                  </div>
                  <div className="text-umrah-secfive">
                    KERETA <i>CEPAT</i> HARAMAIN EXPRESS
                  </div>
                  <div className="span-secfour">
                    Kereta cepat haramain express menembus 300 km/jam. Dengan jarak Makkah ke Madinah yang diperkirakan mencapai 350 km bisa ditempuh dalam 2,5jam.
                  </div>
                  <div className="row">
                      <img
                        className="ic-gift"
                        src={imgTrain}
                      />
                      <img
                        className="ic-brand"
                        src={icTrain}
                      />
                  </div>
                </div>
                <div className="col-md-12 section-content">
                  <div className="text-umrah-secfive">
                      HOTEL MAKKAH & MADINAH
                  </div>
                  <div className="span-secfour">
                    Hotel tanpa shuttle bus, turun lift langsung pelataran, ini sangat membantu jamaah agar fokus ibadah di masjid tanpa harus capek jalan kaki jika ada kebutuhan mendadak balik ke hotel
                  </div>
                  <div className="row content-row">
                      <div className="col-md-6">
                        <div className="bg-sectwo">
                          <img className="hotel1" src={hotel1}></img>
                          <label className="label-three">
                            Hotel <i>Makkah</i> Pullman Zamzam
                          </label>
                          <div className="row">
                            <div className="col-sm-1">
                              <img className="star1" src={star1}></img>
                            </div>
                            <div className="col-md-1">
                              <img className="star1" src={star1}></img>
                            </div>
                            <div className="col-md-1">
                              <img className="star1" src={star1}></img>
                            </div>
                            <div className="col-md-1">
                              <img className="star1" src={star1}></img>
                            </div>
                            <div className="col-md-1">
                              <img className="star1" src={star1}></img>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="bg-sectwo">
                        <img className="hotel2" src={hotel1}></img>
                        <label className="label-three">
                          Hotel <i>Madinah</i> Golden Tulip Al Zahabi
                        </label>
                        <div className="row">
                            <div className="col-sm-1">
                              <img className="star1" src={star1}></img>
                            </div>
                            <div className="col-md-1">
                              <img className="star1" src={star1}></img>
                            </div>
                            <div className="col-md-1">
                              <img className="star1" src={star1}></img>
                            </div>
                            <div className="col-md-1">
                              <img className="star1" src={star1}></img>
                            </div>
                            <div className="col-md-1">
                              <img className="star1" src={star2}></img>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="col-md-12 section-content">
                  <div className="text-umrah-secfive">
                    INSYAALLAH BERSAMA DAN DIBIMBING OLEH
                  </div>
                  <div className="row content-row">
                      <div className="col-md-6">
                        <div className="bg-sectwo" style={{textAlign:"center"}}>
                          <img className="avatar" src={avatarone}></img>
                          <label className="label-three">
                            Ustadz Abu Salma
                          </label>
                          <div className="row">
                            <span>Partner</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="bg-sectwo" style={{textAlign:"center"}}>
                        <img className="avatar" src={avatartwo}>
                        </img>
                        <label className="label-three">
                          Deryansha
                        </label>
                        <div className="row">
                          <span>Founder @kasisolusi</span>
                        </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="col-md-12 section-content">
                  <div className="text-umrah-secfive">
                    KAJIAN DAN SHARING ILMU DISELA-SELA IBADAH
                  </div>
                  <div className="row content-row">
                      <div className="col-md-6">
                        <div className="bg-sectwo height-secthree">
                        <img className="ic-avatar" src={icCamel}></img>
                        <div className="row" style={{padding:"20px 20px 0px 20px"}}>
                          <label className="label-four">Kajian ilmiah Sirah Nabawiyah</label>
                        </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="bg-sectwo height-secthree">
                        <img className="ic-avatar" src={icDiamond}></img>
                        <div className="row" style={{padding:"20px 20px 0px 20px"}}>
                          <label className="label-four">Sharing ilmu Bisnis, Branding, Marketing & Social Media</label>
                        </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="col-md-12 section-content">
                  <div className="text-umrah-secfive">
                    BERKUNJUNG KE TEMPAT WISATA
                  </div>
                  <div className="row content-row">
                      <div className="col-md-12 bg-tour-one" >
                        <div className="row col-md-12 content-tour">
                          <div className="row col-md-12">
                            <label className="label-five">Al-Ula</label>
                          </div>
                          <div className="row col-md-12">
                            <span style={{color:"#ffffff"}}>Old Town Market, Elephant Rock & Key Cafe</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 bg-tour-two" >
                        <div className="row col-md-12 content-tour">
                          <div className="row col-md-12">
                            <label className="label-five">Taif</label>
                          </div>
                          <div className="row col-md-12">
                            <span style={{color:"#ffffff"}}>Kereta Gantung/Cable Train</span>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="col-md-12 section-content">
                  <div className="text-umrah-secfive">
                    PROGRAM UMRAH 10 HARI
                  </div>
                  <div className="row content-row">
                      <div className="col-md-4">
                        <div className="bg-program program-one">
                          <label className="label-six">45.9 JT/pax</label>
                          <label className="label-seven">TRIPLE</label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="bg-program program-central">
                          <label className="label-central-1">43.9 JT/pax</label>
                          <label className="label-central-2">QUAD</label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="bg-program program-two">
                          <label className="label-six">49.9 JT/pax</label>
                          <label className="label-seven">DOUBLE</label>
                        </div>
                      </div>
                  </div>
                  <div className="row">
                    <span className="span-umrah">
                      Semua paket diatas all in include:
                    </span>
                  </div>
                  <div className="row content-row">
                    <div className="col-md-3 package-content">
                      <img className="color-avatar" src={cPlane}></img>
                      <div className="row package-span">
                        <span>Pesawat</span>
                        <div className="row">
                          <i style={{fontSize:"14px"}}>Saudi Airlines Direct Jeddah PP</i>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 package-content">
                      <img className="color-avatar" src={cVisa}></img>
                      <div className="row package-span">
                        <span>Visa Umrah</span>
                      </div>
                    </div>
                    <div className="col-md-3 package-content">
                      <img className="color-avatar" src={cInsurance}></img>
                      <div className="row package-span">
                        <span>Asuransi</span>
                      </div>
                    </div>
                    <div className="col-md-3 package-content">
                      <img className="color-avatar" src={cManasik}></img>
                      <div className="row package-span">
                        <span>Manasik</span>
                      </div>
                    </div>
                  </div>
                  <div className="row content-row">
                    <div className="col-md-3 package-content">
                      <img className="color-avatar" src={cRaudhoh}></img>
                      <div className="row package-span">
                        <span>Raudhoh</span>
                      </div>
                    </div>
                    <div className="col-md-3 package-content">
                      <img className="color-avatar" src={cZamzam}></img>
                      <div className="row package-span">
                        <span>Air Zamzam</span>
                      </div>
                    </div>
                    <div className="col-md-3 package-content">
                      <img className="color-avatar" src={cEquipment}></img>
                      <div className="row package-span">
                        <span>Seragam Travel</span>
                        <div className="row">
                          <i style={{fontSize:"14px"}}>Thobe(untuk Ikhwan) Abaya (untuk Akhwat) dari Brand Ternama Nasional</i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row" style={{marginTop:"50px"}}>
                    <span className="span-bottom">
                      Pastikan daftar sekarang, karena se-exclusive itu, bentar lagi segera kami tutup!
                    </span>
                    <div className="content-button">
                        <Button
                            className="btn-register"
                            onClick={() => this.handleFormShow()}
                          >
                          DAFTAR SEKARANG
                        </Button>
                    </div>
                  </div>
                  <div className="row" style={{marginTop:"100px"}}>
                      <img className="blueLogo" src={umrahBlue}/>
                      <div className="col-md-12" style={{marginTop:"30px"}}>
                        <div className="col-md-4 sosmed-one">
                          <img className="ic-sosmed" src={ig}/>
                          <label>kasiumrah</label>
                          </div>
                        <div className="col-md-4 sosmed-center">
                          <img className="ic-sosmed" src={tiktok}/>
                          <label>kasiumrah</label>
                        </div>
                        <div className="col-md-4 sosmed-two">
                          <img className="ic-sosmed" src={whatsapp}/>
                          <label>Admin Kasiumrah</label>
                        </div>
                      </div>
                      <div className="col-md-12 content-permission">
                        <label>IZIN PPIU: 0220205701339000202</label>
                      </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <ModalForm
          formdataTest={this.state.formdataTest}
          isFormSubmit={this.props.isFormSubmit}
          showForm={this.props.isFormOpen}
          handleFormClose={this.handleFormClose}
          handleChange={this.handleChange}
          handleSubmitForm={this.handleSubmitForm}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isFormOpen: state.umrahReducer.isFormOpen,
    isFormSubmit: state.umrahReducer.isFormSubmit,
  };
};

class ModalForm extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.showForm}
        onHide={this.props.handleFormClose}
        className="form-modal"
      >
        <Form onSubmit={this.props.handleSubmitForm} className="master-form">
          <Modal.Header style={{ backgroundColor: "#009ae3" }}>
            <Modal.Title className="modal-title-text">Form Daftar</Modal.Title>
            <Button
              onClick={this.props.handleFormClose}
              className="btn-top-right-modal"
              bsStyle="primary"
              bsSize="sm"
            >
              <Glyphicon glyph="remove" />
            </Button>
          </Modal.Header>
          <Modal.Body>
            <div className="row row-modal">
              <div className="col-md-12">
                  <img className="blueLogo" src={umrahBlue}/>
              </div>
              <div className="col-md-12">
                  <img className="poster" src={poster}/>
              </div>
              <div className="col-md-12">
                <h4 style={{lineHeight:"24px", margin:"12px 12px 30px 12px"}}>Pastikan daftar sekarang, jika seat sudah terpenuhi 120 orang, otomatis pendaftaran kami tutup!</h4>
              </div>
              <div className="col-md-12">
                <FormGroup className="col-md-6">
                  <label className="form-label-inner" for="namaLengkap">
                    Nama Lengkap
                  </label>
                  <div className="form-has-error">
                    <input required
                      onChange={this.props.handleChange}
                      type="text"
                      name="namaLengkap"
                      id="namaLengkap"
                      className="form-control"
                      placeholder="Masukan Nama Lengkap"
                      value={this.props.formdataTest.namaLengkap}
                    />
                  </div>
                </FormGroup>
                <FormGroup className="col-md-6">
                  <label className="form-label-inner">Jenis Kelamin</label>
                  <div className="radio position-radio">
                    <label>
                      <input
                        name="jenisKelamin"
                        checked={this.props.formdataTest.jenisKelamin === "laki-laki"}
                        type="radio"
                        className="form-radio"
                        id="rd1"
                        value="laki-laki"
                        onChange={this.props.handleChange}
                      />
                      <label htmlFor="rd1">Laki-laki</label>
                    </label>
                    <label>
                      <input
                        name="jenisKelamin"
                        checked={this.props.formdataTest.jenisKelamin === "perempuan"}
                        type="radio"
                        className="form-radio"
                        id="rd2"
                        value="perempuan"
                        onChange={this.props.handleChange}
                      />
                      <label htmlFor="rd2">Perempuan</label>
                    </label>
                  </div>
                </FormGroup>
              </div>
               <div className="col-md-12">
                <FormGroup className="col-md-6 ">
                  <label className="form-label-inner" for="noHp">
                    Nomor HP Whatsapp
                  </label>
                  <div className="form-has-error">
                    <input required
                      onChange={this.props.handleChange}
                      type="number"
                      name="noHp"
                      id="noHp"
                      className="form-control"
                      placeholder="Masukan nomor hp"
                      value={this.props.formdataTest.noHp}
                    />
                  </div>
                </FormGroup>
                <FormGroup className="col-md-6 ">
                  <label className="form-label-inner" for="email">
                    Email
                  </label>
                  <div className="form-has-error">
                    <input required
                      onChange={this.props.handleChange}
                      type="text"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Masukan email"
                      value={this.props.formdataTest.email}
                    />
                  </div>
                </FormGroup>
              </div>
              <div className="col-md-12">
                <FormGroup className="col-md-6 ">
                  <label className="form-label-inner" for="domisili">
                    Kota Domisili
                  </label>
                  <div className="form-has-error">
                    <input required
                      onChange={this.props.handleChange}
                      type="text"
                      name="domisili"
                      id="domisili"
                      className="form-control"
                      placeholder="Masukan domisili"
                      value={this.props.formdataTest.domisili}
                    />
                  </div>
                </FormGroup>
                <FormGroup className="col-md-6">
                  <label className="form-label-inner">Apakah kamu memiliki paspor yang masih berlaku?</label>
                  <div className="radio position-radio" style={{top:"25px"}}>
                    <label>
                      <input
                        name="paspor"
                        checked={this.props.formdataTest.paspor === "ya"}
                        type="radio"
                        className="form-radio"
                        id="rd6"
                        value="ya"
                        onChange={this.props.handleChange}
                      />
                      <label htmlFor="rd6">Ya</label>
                    </label>
                    <label>
                      <input
                        name="paspor"
                        checked={this.props.formdataTest.paspor === "tidak"}
                        type="radio"
                        className="form-radio"
                        id="rd7"
                        value="tidak"
                        onChange={this.props.handleChange}
                      />
                      <label htmlFor="rd7">Tidak</label>
                    </label>
                  </div>
                </FormGroup>
              </div>
              <div className="col-md-12" style={{marginBottom:"50px"}}>
              <FormGroup className="col-md-12">
                  <label className="form-label-inner">Paket</label>
                  <div className="radio position-radio">
                    <label>
                      <input
                        name="paket"
                        checked={this.props.formdataTest.paket === "43.9 Juta per Pax QUAD"}
                        type="radio"
                        className="form-radio"
                        id="rd3"
                        value="43.9 Juta per Pax QUAD"
                        onChange={this.props.handleChange}
                      />
                      <label htmlFor="rd3">43.9 Juta/pax-QUAD</label>
                    </label>
                    <label>
                      <input
                        name="paket"
                        checked={this.props.formdataTest.paket === "45.9 Juta per Pax TRIPLE"}
                        type="radio"
                        className="form-radio"
                        id="rd4"
                        value="45.9 Juta per Pax TRIPLE"
                        onChange={this.props.handleChange}
                      />
                      <label htmlFor="rd4">45.9 Juta/pax-TRIPLE</label>
                    </label>
                    <label>
                      <input
                        name="paket"
                        checked={this.props.formdataTest.paket === "49.9 Juta per Pax DOUBLE"}
                        type="radio"
                        className="form-radio"
                        id="rd5"
                        value="49.9 Juta per Pax DOUBLE"
                        onChange={this.props.handleChange}
                      />
                      <label htmlFor="rd5">49.9 Juta/pax - DOUBLE</label>
                    </label>
                  </div>
                </FormGroup>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="col-md-12" style={{textAlign:"center"}}>
              <Button
                style={{padding:"8px 30px", fontSize:"16px"}}
                type="submit"
                disabled=""
                className="btn-bottom-right-modal"
                bsStyle="primary"
                bsSize="md"
              >
                DAFTAR
              </Button>
            </div>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}


export default connect(mapStateToProps)(Umrah);
