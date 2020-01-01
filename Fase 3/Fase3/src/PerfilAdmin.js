import React, { Component } from 'react';
import logo from './admin.svg';
import './App.css';
import axios from 'axios';
import request from 'superagent';
class PerfilAdmin extends Component {
  constructor() {
    super();
    this.state = {


      Admin: [],
      colaborador: [],
      Estudiante: []
      , Catedratico: [],
      Contactos: [],
      Inventario: []

    }
  }
  NotiInvent = async () => {
    request.get('http://localhost:3200/Inventario')
      .end((err, res) => {
        console.log(res);
        const Inventario = JSON.parse(res.text);
        this.setState({

          Inventario: Inventario

        });
      });
  }

  NotiContact = async () => {
    request.get('http://localhost:3200/Contactos')
      .end((err, res) => {
        console.log(res);
        const Contactos = JSON.parse(res.text);
        this.setState({

          Contactos: Contactos

        });
      });

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
    this.NotiContact();
    this.NotiInvent();
  }
  Delete = async (id) => {
    axios.delete('http://localhost:3200/Admin/' + id);
    this.Noti3();

    alert("Cuenta Borrada")
    this.props.history.push("/")
  }
  Validar = (e) => {

    let valAdmin = false;
    let valColaborador = false;
    let valEstudiante = false;
    let valCatedratico = false;



    var Admin = this.state.Admin.map((E, i) => {
      if (E.Correo === this.state.Correo && E.Contraseña === this.state.Contraseña) {
        valAdmin = true;
      }



    });


    if (valAdmin === true) {
      alert('Bienvenido Admin')
      this.props.history.push("/CrearActividades")
    }

    else if (valColaborador === true) {
      alert('Bienvenido Colaborador')
    }

    else if (valEstudiante === true) {
      alert('Bienvenido Estudiante')
    }

    else if (valCatedratico === true) {
      alert('Bienvenido Catedratica')
    }
    else {
      alert("Datos incorrectos")
    }


  }

  Eliminar = (e) => {
    window.localStorage.removeItem('id')
    this.props.history.push("/")
  }
  render() {

    const a = window.localStorage.getItem('id')

    let ADMIN;

    let ADMIN1;

    let ADMIN2;

    let ADMIN3;

    let ADMIN4;
    let ADMIN5;

    let ADMIN6;
    let valAdmin = false;
    let valColaborador = false;
    let valEstudiante = false;
    let valCatedratico = false;

    let Contactos = [];

    let Inventario = [];

    var Admin = this.state.Admin.map((E, i) => {
      if (E.id === a) {
        alert("Bienvenido " + ":" + E.Nombre)
        ADMIN = E.Nombre;
        ADMIN1 = E.Fecha;
        ADMIN2 = E.Telefono;
        ADMIN3 = E.Correo;
        ADMIN4 = E.Nickname;
        ADMIN5 = E.Puesto;

      }
    });



    var Contact = this.state.Contactos.map((E2, i) => {




      var colab = this.state.Admin.map((E, i) => {


        if (E2.Encargado === E.Nombre) {

          Contactos.push("------->" + E2.Nombre)
        }

      });


    });



    var Invent = this.state.Inventario.map((E2, i) => {




      var colab = this.state.Admin.map((E, i) => {


        if (E2.Persona === E.Nombre) {

          Inventario.push("------->" + E2.Nombre)
        }

      });


    });


    const { Correo, Contraseña, Tipo } = this.state

    return (

      <div className="App">
        <form on onSubmit={this.submitHandler}>          <nav className="navbar navbar-dark bg-primary">

          <a className="navbar-brand" href="http://localhost:3000/MensajesAdmin" >Mensajes</a>

          <a className="navbar-brand" href="http://localhost:3000/RegistroActividades" >Registro Actividades</a>


          <a className="navbar-brand" href="http://localhost:3000/estudiante" >Registro Estudiante</a>

          <a className="navbar-brand" href="http://localhost:3000/catedratico" >Registro Catedratico</a>

          <a className="navbar-brand" href="http://localhost:3000/colaborador" >Registro Colaborador</a>

          <a className="navbar-brand" href="http://localhost:3000/Admin" >Registro Admin</a>

          <a className="navbar-brand" href="http://localhost:3000/CrearActividades" > Actividades</a>

          <a className="navbar-brand" href="http://localhost:3000/CrearNoticia" > Noticias</a>
          <a className="navbar-branda" href="http://localhost:3000/" > Salir</a>

          
          <a className="navbar-brand" href="http://localhost:3000/Contactos" > Contactos</a>
          <a className="navbar-brand" href="http://localhost:3000/Tareas" > Tareas</a>

          <a className="navbar-brand" href="http://localhost:3000/PerfilAdmin" > Perfil</a>
          <a className="navbar-brand" href="http://localhost:3000/Cursos" > Cursos</a>
          <a className="navbar-brand" href="http://localhost:3000/Presupuesto" > Presupuesto</a>
          <a className="navbar-brand" href="http://localhost:3000/Bienes" > Inventario</a>
          <a className="navbar-brand" href="http://localhost:3000/GeneracionPago" > Boleta de Pago</a>
          <a className="navbar-brand" href="http://localhost:3000/Egreso" > Egreso</a>
          <a className="navbar-brand" href="http://localhost:3000/Ingreso" > Ingreso</a>
          <a className="navbar-brand" href="http://localhost:3000/PagosA" > RegistroPagos</a>
          
          <a className="navbar-brand" href="http://localhost:3000/CalificacionAdmin" > CalificarActividad </a>

          <button type="submit" onClick={(this.Eliminar)} className="btn btn-light">SALIR</button>

        </nav>

          <  div className="container-fluid" align="center">
            <div className="col-md-4 text-center">



              <h1> <span className="badge badge-primary"> Nombre de Usuario : {ADMIN} </span>
                <img src={logo} className="App-logo" alt="logo" /></h1>
              <div className="card" >
                <div className="card-body">
                  <span className="badge badge-info">Fecha de Nacimiento </span>
                  <h5 className="card-title">  {ADMIN1} </h5>
                  <span className="badge badge-info">Telefono </span>
                  <h5 className="card-title">  {ADMIN2} </h5>

                  <span className="badge badge-info"> Correo </span>
                  <h5 className="card-title">  {ADMIN3} </h5>

                  <span className="badge badge-info"> NickName </span>
                  <h5 className="card-title">  {ADMIN4} </h5>

                  <span className="badge badge-info">Puesto </span>
                  <h5 className="card-title">  {ADMIN5} </h5>

                  <button className="btn btn-light" onClick={() => this.Delete(a)}>Eliminar </button>


                </div>
              </div>
              <h1> <span className="badge badge-primary"> Mis  Contactos
          
 </span>
              </h1> {Contactos}


              <h1> <span className="badge badge-primary"> Bienes Encargados
              
 </span>
              </h1> {Inventario}

            </div></div>
        </form>

      </div>

















    );
  }
}

export default PerfilAdmin;