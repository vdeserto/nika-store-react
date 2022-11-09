import React from "react";
import { Link } from "react-router-dom";
import  '../styles/navbar.css'

import nikaStoreLogo from '../assets/nika_store.svg'
import cart from '../assets/cart.png'

// function isMobile(): string{
//     return window.innerWidth <= 768 ? 'pe-1' : 'pe-3'
// }
interface Categoria {
  id: number;
  title: string;
}
type OptionProps = {
  key: number;
  value: string;
};

const isMobile = () => (window.innerWidth <= 768 ? "pe-1" : "pe-3");
const categorias = [
  { id: 163214, title: "Todos os Departamentos" },
  { id: 235673, title: "Apps e Jogos" },
  { id: 167647, title: "Automotivo" },
  { id: 627344, title: "CD e Vinil" },
  { id: 176525, title: "Livros" },
  { id: 774342, title: "Computadores e Informática" },
];
function CategoriasOptionList(categorias: Array<Categoria>) {
  return categorias.map((categoria: Categoria) => (
    <Option key={categoria.id} value={categoria.title}></Option>
  ));
}

function Option(props: OptionProps) {
  return <option>{props.value}</option>;
}
function CategoriasAnchorList(categorias: Array<Categoria>) {
  return categorias.map((categoria: Categoria) => (
    <Link className="dropdown-item" to="#">
      {categoria.title}
    </Link>
  ));
}

class Navbar extends React.Component {
  render() {
    return (
      <div id="navbar">
        <div>
          <header>
            <nav
              className={
                "navbar navbar-expand-md navbar-dark fixed-top bg-dark " +
                isMobile()
              }
            >
              <div className={"container-fluid " + isMobile()}>
                <Link className="navbar-brand" to="/home">
                  <img src={nikaStoreLogo} className={"me-2"} width="48" alt="..." />
                  Nika Store
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarCollapse"
                  aria-controls="navbarCollapse"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse justify-content-center"
                  id="navbarCollapse"
                >
                  <div className="navbar">
                    <div className="navbar-nav">
                      <form className="input-group d-flex">
                        <button
                          id="btnDepartmentsDropDown"
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Todos
                        </button>
                        <ul className="dropdown-menu">
                          <li>{CategoriasAnchorList(categorias)}</li>
                        </ul>
                        <input
                          className="form-control"
                          type="search"
                          placeholder=""
                          aria-label="Buscar"
                        />
                        <button
                          className="btn btn-outline-secondary"
                          type="submit"
                        >
                          Buscar
                        </button>
                      </form>
                    </div>
                    {/* <!-- </div> -->
                <!-- <div className="navbar-nav"> --> */}
                    <ul className="navbar-nav">
                      <li className="nav-item align-items-center d-flex">
                        <select
                          className="form-select form-select-sm ml-4"
                          aria-label="Default select example"
                        >
                          <option selected>Categorias</option>
                          {CategoriasOptionList(categorias)}
                        </select>
                      </li>
                      <li className="nav-item">
                        <Link to="/login" className="nav-link">
                          Olá, Faça seu login
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/home" className="nav-link">
                          Devoluções e Pedidos
                        </Link>
                      </li>
                      <Link to="/home" className="nav-link d-flex">
                        <div className="nav-item">
                          <picture>
                            <source
                              srcSet={cart}
                              media="(min-width: 140px)"
                            />
                            <img
                              src={cart}
                              alt="..."
                              width="24"
                            />
                          </picture>
                        </div>
                        <div>Carrinho</div>
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
  <button className="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
</div>  */}
            </nav>
          </header>
        </div>
      </div>
    );
  }
}
export default Navbar;
