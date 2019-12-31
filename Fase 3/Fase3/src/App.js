import React, { Component } from 'react';
import axios from 'axios';
import request from 'superagent';
import logo from './logoo.svg';
import './App.css';
import noticias from './noticias'
import Crearnoticias from './CrearNoticia'
import Actividades from './Actividades'
import CrearActividades from './CrearActividades'
import Inventario from './Inventario'
import Bienes from './Bienes'
import Estudiante from './estudiante'
import colaborador from './colaborador'
import Admin from './Admin'
import Registro from './Registro'
import Registro2 from './Registro2'
import Contactos from './Contactos'
import VerContactos from './VerContactos'
import Cursos from './Cursos'
import AsignarCurso from './AsignarCurso'
import AsignarCursosUsuario from './AsignarCursosUsuario'
import ComentarNoticia from './ComentarNoticia'
import EnviarS from './EnviarS'
import VerActividades from './VerActividades'
import VerNoticia from './VerNoticia'
import Ingreso from './Ingreso'
import Egreso from './Egreso'
import Modulo from './Modulo'
import MensajesAdmin from './MensajesAdmin'
import MensajeColaborador from './MensajeColaborador'
import VerCursos from './VerCursos'
import Presupuesto from './Presupuesto'
import Pagos from './Pagos'
import PagosA from './PagosA'
import AsignarCursoC from './AsignarCursoC'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Catedratico from './Catedratico';
import PerfilC from './PerfilC';
import VerSolicitud from './VerSolicitud';
import MensajeEstudiante from './MensajeEstudiante';
import MensajeCatedratico from './MensajeCatedratico';
import RegistroActividades from './RegistroActividades';
import PerfilAdmin from './PerfilAdmin';
import PerfilEstudiante from './PerfilEstudiante';
import PerfilColaborador from './PerfilColaborador';
import AsignarActividades from './AsignarActividades';
import AsignarActividadUsuario from './AsignarActividadUsuario';
import AsignarCursoColaborador from './AsignarCursoColaborador';
import AsignarActividadColaborador from './AsignarActividadColaborador'
import ComentarNoticiaColaborador from './ComentarNoticiaColaborador';
import PresupuestoC from './PresupuestoC';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/noticias" component={noticias} />
            <Route path="/CrearNoticia" component={Crearnoticias} />
            <Route path="/Actividades" component={Actividades} />
            <Route path="/CrearActividades" component={CrearActividades} />
            <Route path="/Inventario" component={Inventario} />
            <Route path="/Bienes" component={Bienes} />
            <Route path="/estudiante" component={Estudiante} />
            <Route path="/colaborador" component={colaborador} />
            <Route path="/Admin" component={Admin} />
            <Route path="/Catedratico" component={Catedratico} />
            <Route path="/Registro" component={Registro} />
            <Route path="/Registro2" component={Registro2} />
            <Route path="/Contactos" component={Contactos} />
            <Route path="/VerContactos" component={VerContactos} />
            <Route path="/Cursos" component={Cursos} />
            <Route path="/AsignarCurso" component={AsignarCurso} />
            <Route path="/AsignarCursosUsuario" component={AsignarCursosUsuario} />
            <Route path="/ComentarNoticia" component={ComentarNoticia} />
            <Route path="/ComentarNoticiaColaborador" component={ComentarNoticiaColaborador} />
            <Route path="/PresupuestoC" component={PresupuestoC} />
            <Route path="/Modulo" component={Modulo} />
            <Route path="/MensajesAdmin" component={MensajesAdmin} />
            <Route path="/AsignarCursoColaborador" component={AsignarCursoColaborador} />
            <Route path="/AsignarCursoC" component={AsignarCursoC} />
            <Route path="/AsignarActividadColaborador" component={AsignarActividadColaborador} />
            <Route path="/AsignarActividades" component={AsignarActividades} />
            <Route path="/AsignarActividadUsuario" component={AsignarActividadUsuario} />
            <Route path="/VerCursos" component={VerCursos} />
            <Route path="/VerActividades" component={VerActividades} />
            <Route path="/VerNoticia" component={VerNoticia} />
            <Route path="/Ingreso" component={Ingreso} />
            <Route path="/Egreso" component={Egreso} />
            <Route path="/Presupuesto" component={Presupuesto} />
            <Route path="/PerfilAdmin" component={PerfilAdmin} />
            <Route path="/PerfilColaborador" component={PerfilColaborador} />
            <Route path="/PerfilEstudiante" component={PerfilEstudiante} />
            <Route path="/PerfilC" component={PerfilC} />
            <Route path="/Pagos" component={Pagos} />
            <Route path="/PagosA" component={PagosA} />
            <Route path="/MensajeColaborador" component={MensajeColaborador} />
            <Route path="/EnviarS" component={EnviarS} />
            <Route path="/VerSolicitud" component={VerSolicitud} />
            <Route path="/MensajeEstudiante" component={MensajeEstudiante} />
            <Route path="/MensajeColaborador" component={MensajeColaborador} />
            <Route path="/MensajeCatedratico" component={MensajeCatedratico} />
            <Route path="/RegistroActividades" component={RegistroActividades} />
           
          </Switch>
        </div>
      </Router>


    );
  }
}

class Login extends Component {
  constructor() {
    super();
    this.state = {


      Correo: '',
      Contraseña: '',

      Tipo: '',
      Admin: [],
      colaborador: [],
      Estudiante: []
      , Catedratico: []
    }
  }

  Noti = async () => {

    request.get('http://localhost:3200/Admin')
      .end((err, res) => {
        console.log(res);
        const Admin = JSON.parse(res.text);
        this.setState({

          Admin: Admin

        });
      });
  }

  Noti2 = async () => {

    request.get('http://localhost:3200/colaborador')
      .end((err, res) => {
        console.log(res);
        const colaborador = JSON.parse(res.text);
        this.setState({

          colaborador: colaborador

        });
      });
  }
  Noti3 = async () => {

    request.get('http://localhost:3200/Estudiantes')
      .end((err, res) => {
        console.log(res);
        const Estudiante = JSON.parse(res.text);
        this.setState({

          Estudiante: Estudiante
        });
      });
  }
  Noti4 = async () => {

    request.get('http://localhost:3200/Catedratico')
      .end((err, res) => {
        console.log(res);
        const Catedratico = JSON.parse(res.text);
        this.setState({

          Catedratico: Catedratico
        });
      });
  }
  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3200/Login', this.state)
      .then(response => {
        console.log(response)
      });
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  componentDidMount() {
    this.Noti();
    this.Noti2();
    this.Noti4();
    this.Noti3();
  }

  Validar = (e) => {

    let valAdmin = false;
    let valColaborador = false;
    let valEstudiante = false;
    let valCatedratico = false;

    var colaborador = this.state.colaborador.map((E2, i) => {
      if (E2.Correo === this.state.Correo && E2.Contraseña === this.state.Contraseña) {
        valColaborador = true;
        window.localStorage.setItem('id', E2.id)
      }
    });

    var Admin = this.state.Admin.map((E, i) => {
      if (E.Correo === this.state.Correo && E.Contraseña === this.state.Contraseña) {
        valAdmin = true;
        window.localStorage.setItem('id', E.id)
      }



    });

    var Estudiante = this.state.Estudiante.map((E3, i) => {
      if (E3.Correo === this.state.Correo && E3.Contraseña === this.state.Contraseña) {
        window.localStorage.setItem('id', E3.id)
        valEstudiante = true;
      }



    });
    var Catedratico = this.state.Catedratico.map((E4, i) => {
      if (E4.Correo === this.state.Correo && E4.Contraseña === this.state.Contraseña) {
        valCatedratico = true;
        window.localStorage.setItem('id', E4.id)
      }



    });
    if (valAdmin === true) {
      alert('Bienvenido Admin')
      this.props.history.push("/PerfilAdmin")
    }

    else if (valColaborador === true) {
      alert('Bienvenido Colaborador')
      this.props.history.push("/PerfilColaborador")
    }

    else if (valEstudiante === true) {
      alert('Bienvenido Estudiante')

      this.props.history.push("/PerfilEstudiante")
    }

    else if (valCatedratico === true) {
      alert('Bienvenido Catedratica')

      this.props.history.push("/PerfilC")


    }
    else {
      alert("Datos incorrectos")
    }


  }
  render() {

    const { Correo, Contraseña, Tipo } = this.state

    return (

      <div className="App">
        <form on onSubmit={this.submitHandler}>          <nav className="navbar navbar-dark bg-primary">


          <a className="navbar-brand" href="http://localhost:3000/Registro" >Registro Estudiante</a>

          <a className="navbar-brand" href="http://localhost:3000/Registro2" >Registro Catedratico</a>

          <a className="navbar-brand" href="http://localhost:3000/VerActividades" > Actividades</a>

          <a className="navbar-brand" href="http://localhost:3000/noticias" > Noticias</a>
          <a className="navbar-brand" href="http://localhost:3000/" >Login</a>


        </nav>

          <  div className="container-fluid" align="center">
            <div className="col-md-4 text-center">



              <h1> <span className="badge badge-primary">Ingrese su Información </span>
                <img src={logo} className="App-logo" alt="logo" /></h1>

              <input type="text" className="form-control" placeholder="Correo" aria-label="Username" aria-describedby="addon-wrapping" name="Correo" value={Correo} onChange={this.changeHandler} ></input>
              <input type="password" className="form-control" placeholder="Contraseña" aria-label="Username" aria-describedby="addon-wrapping" name="Contraseña" value={Contraseña} onChange={this.changeHandler} ></input>
              <button type="submit" onClick={(this.Validar)} className="btn btn-light">Ingresar</button>

            </div></div>
        </form>

      </div>

















    );
  }
}

export default App;
