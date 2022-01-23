import React, { Component } from "react";
import Genre from "./Genre";

class GenresInDb extends Component {
  constructor() {
    super();
    this.state = {
        genresList: []
    }
    this.myDivRef = React.createRef();
  }

  callApi(url, consecuencia) {
    fetch(url)
    .then( response => {return response.json()})
    .then( data => consecuencia(data))
    .catch( e => console.log(e));
  }

  mostrarGenres = (generos) => {    
    this.setState( {genresList: generos.meta.countByCategory});        
  }

  componentDidMount() {
    this.callApi("/api/products", this.mostrarGenres);
  }
  
  cambieFondoCaja() {
    this.myDivRef.current.classList.toggle("bg-secondary");   
  }

  render() {
    return (
      <React.Fragment>
        {/*<!-- Categories in DB -->*/}
        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3"  onMouseOver={() => this.cambieFondoCaja() } onMouseOut={() => this.cambieFondoCaja() }>
              <h6 className="m-0 font-weight-bold text-gray-800">
                Categorias de Calzado segun Genero
              </h6>
            </div>
            <div className="card-body" ref={this.myDivRef}>
              <div className="row">
                {
                 Object.entries(this.state.genresList).map((genre, index) => {
                  return <Genre {...genre} key={new Date().getTime() + index}
                  />;
                })} 
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default GenresInDb;
