import React, { Component } from "react";
import { connect } from "react-redux";
import { MovieAction } from "../redux/actions/MovieAction";
// import { FormattedMessage } from "react-intl";
import { Modal, Button, Glyphicon, FormGroup, Table } from "react-bootstrap";
import imgsearch from "../assets/images/ic_search.svg";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hiddenSearch: true,
      filter: {
        keyword: "Marvel",
      },
      formdata: {
        Title: "",
        Year: "",
        imdbID: "",
        Type: "",
        Poster: "",
      },
      isDetailShow: false,
      dataMovies: [],
      page: 1,
      loading: false,
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleDetailShow = this.handleDetailShow.bind(this);
    this.handleDetailClose = this.handleDetailClose.bind(this);
    this.handleReload = this.handleReload.bind(this);
  }

  handleReload() {
    this.setState(
      {
        filter: {
          keyword: "marvel",
        },
        hiddenSearch: true,
      },
      () => {
        this.fetchMovie(1);
      }
    );
  }

  handleDetailShow(data = this.state.formdata) {
    this.setState({
      formdata: data,
      isDetailShow: true,
    });
  }

  handleDetailClose() {
    this.setState({
      formdata: { Title: "", Year: "", imdbID: "", Type: "", Poster: "" },
      isDetailShow: false,
    });
  }

  handleSearch = (event) => {
    let filter = Object.assign({}, this.state.filter);
    let id = event.target.id;
    let value = event.target.value;
    filter[id] = value;

    this.setState(
      {
        filter: filter,
      },
      () => {
        this.fetchMovie(1);
      }
    );
  };

  fetchMovie(page) {
    let data = {
      apikey: "67bcc06f",
      s: this.state.filter.keyword,
      page: page,
    };
    this.props.dispatch(
      MovieAction.fetchMovie(data, () => {
        let Movies = Array.isArray(this.props.movies.Search)
          ? this.props.movies.Search
          : [];
        this.setState(
          {
            dataMovies: Movies,
          },
          () => {
            this.forceUpdate();
          }
        );
      })
    );
  }

  componentDidMount() {
    this.fetchMovie(1);
    this.refs.myscroll.addEventListener("scroll", () => {
      if (
        this.refs.myscroll.scrollTop + this.refs.myscroll.clientHeight >=
        this.refs.myscroll.scrollHeight
      ) {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ page: this.state.page + 1, loading: false }, () => {
            this.fetchMovie(this.state.page);
          });
        }, 3000);
      }
    });
  }

  render() {
    let Movies = Array.isArray(this.props.movies.Search)
      ? this.props.movies.Search
      : [];
    console.log("cek page", this.state.page);
    return (
      <div>
        <div className="new-content-header">
          <div className="flex-nowrap">
            <div className="div-nowrap">
              <label style={{ color: "#FFF", fontSize: "25px" }}>
                MoviesKu
              </label>
            </div>
            <div className="div-nowrap">
              <div style={{ textAlign: "right", padding: "5px 0px 5px 0px" }}>
                <input
                  hidden={this.state.hiddenSearch}
                  className="new-input-blue"
                  placeholder="Search movie"
                  type="text"
                  name="keyword"
                  id="keyword"
                  onChange={this.handleSearch.bind(this)}
                />
                <Button
                  className="new-btn-download-blue"
                  style={{ marginRight: "20px" }}
                  onClick={() => {
                    this.setState({
                      hiddenSearch: !this.state.hiddenSearch,
                    });
                  }}
                >
                  <img src={imgsearch} alt="" style={{ width: "22px" }} />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="new-content-movies">
          <div
            className="col-md-12 home-table-wrapper"
            ref="myscroll"
            style={{ height: "545px", overflow: "auto" }}
          >
            {this.state.loading ? (
              <h2>Loading for more movie...</h2>
            ) : (
              <div className="content-movies">
                {Movies.length !== 0 ? (
                  Movies.map((data) => (
                    <div
                      className="col-3"
                      onClick={() => this.handleDetailShow(data)}
                    >
                      <div className="movies">
                        <div className="movies-images">
                          <img
                            src={data.Poster}
                            alt=""
                            width="290"
                            height="426"
                          />
                        </div>
                      </div>
                      <div className="movies-desc">
                        <h3>
                          <label>{data.Title}</label>
                          <span className="col-md-12">{data.Year}</span>
                        </h3>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-md-12">
                    <h1>
                      No Movies, Please search again or{" "}
                      <span className="click-style" onClick={this.handleReload}>
                        click here
                      </span>{" "}
                      to reload the page
                    </h1>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <ModalDetail
          formdata={this.state.formdata}
          showDetail={this.state.isDetailShow}
          handleDetailClose={this.handleDetailClose}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    movies: state.movieReducer.movies,
  };
};

class ModalDetail extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.showDetail}
        onHide={this.props.handleDetailClose}
        className="form-modal"
      >
        <Modal.Header style={{ backgroundColor: "#658cd8" }}>
          <Modal.Title className="modal-title-text">
            {this.props.formdata.Title}
          </Modal.Title>
          <Button
            onClick={this.props.handleDetailClose}
            className="btn-top-right-modal"
            bsStyle="default"
            bsSize="sm"
          >
            <Glyphicon glyph="remove" />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <div className="row row-modal">
            <div className="col-md-12">
              <FormGroup className="col-md-8">
                <img
                  src={this.props.formdata.Poster}
                  alt=""
                  width="290"
                  height="426"
                />
              </FormGroup>
              <FormGroup className="col-md-4" style={{ paddingLeft: "0px" }}>
                <Table style={{ fontSize: "16px" }}>
                  <tbody>
                    <tr>
                      <td>
                        <label>Year</label>
                      </td>
                      <td>:</td>
                      <td>{this.props.formdata.Year}</td>
                    </tr>
                    <tr>
                      <td>
                        <label>Type</label>
                      </td>
                      <td>:</td>
                      <td>{this.props.formdata.Type}</td>
                    </tr>
                    <tr>
                      <td>
                        <label>ImdbID</label>
                      </td>
                      <td>:</td>
                      <td>{this.props.formdata.imdbID}</td>
                    </tr>
                  </tbody>
                </Table>
              </FormGroup>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default connect(mapStateToProps)(Movie);
