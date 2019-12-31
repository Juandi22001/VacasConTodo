import React, { Component } from 'react';
import logo from './actividades.svg';
import './App.css';
import axios from 'axios';
import request from 'superagent';

class AsignarActividades extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      NombreUsuario: '',
      Actividad: '',
      idUsuario: '',
      actividad: [],

      Admin: [],
      colaborador: [],
      Estudiante: [],
      Catedratico: [],
      AsignarActividad: []
    }
  }





  Noti0 = async () => {

    request.get('http://localhost:3200/Admin')
      .end((err, res) => {
        console.log(res);
        const Admin = JSON.parse(res.text);
        this.setState({

          Admin: Admin

        });
      });
  }

  Noti01 = async () => {

    request.get('http://localhost:3200/AsignarActividad')
      .end((err, res) => {
        console.log(res);
        const AsignarActividad = JSON.parse(res.text);
        this.setState({

          AsignarActividad: AsignarActividad

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






  Noti = async () => {
    request.get('http://localhost:3200/Actividades')
      .end((err, res) => {
        console.log(res);
        const actividad = JSON.parse(res.text);
        this.setState({

          actividad: actividad

        });
      });
  }
  Delete = async (id) => {
    await axios.delete('http://localhost:3200/AsignarActividad/' + id);
    this.Noti01();
  }
  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3200/AsignarActividad', this.state)
      .then(response => {
        console.log(response)
      });
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  componentDidMount() {
    this.Noti();
    this.Noti0();
    this.Noti01(); this.Noti3(); this.Noti2();
    this.Noti4();
  }


  Validar = (e) => {

    let valCurso = false;

    let valAdmin = false;
    let valColaborador = false;
    let valEstudiante = false;
    let valCatedratico = false;


    var colaborador = this.state.colaborador.map((E2, i) => {
      if (E2.Nombre === this.state.NombreUsuario && E2.id === this.state.idUsuario) {
        valColaborador = true;
      }
    });

    var Admin = this.state.Admin.map((E, i) => {
      if (E.Nombre === this.state.NombreUsuario) {
        valAdmin = true;
      }



    });

    var Estudiante = this.state.Estudiante.map((E3, i) => {
      if (E3.Nombre === this.state.NombreUsuario && E3.id === this.state.idUsuario) {

        valEstudiante = true;
      }



    });


    var Catedratico = this.state.Catedratico.map((E3, i) => {
      if (E3.Nombre === this.state.Titular) {

        valCatedratico = true;
      }



    });

    if (valCurso === true) {
      alert('Datos Correctos')

    }

    else if (valColaborador === true) {
      alert('Datos Correctos')

    }

    else if (valEstudiante === true) {
      alert('Datos Correctos')
    }

    else if (valCatedratico === true) {
      alert('Datos Correctos')
    }
    else {
      alert("Datos incorrectos")
    }


  }


  render() {


    var AsignarActividad = this.state.AsignarActividad.map((c, i) => {
      return <li key={i}>


        <div className="card" >
          <div className="card-body">
            <span className="badge badge-info">ID</span>
            <h5 className="card-title">  {c.id} </h5>
            <span className="badge badge-info">Actividad</span>
            <h5 className="card-title">  {c.Actividad} </h5>
            <span className="badge badge-info">Nombre</span>
            <h5 className="card-title">  {c.NombreUsuario} </h5>

            <button className="btn btn-light" onClick={() => this.Delete(c.id)}>Eliminar </button>

          </div>
        </div>
      </li>
    });





    var A_actividad = this.state.actividad.map((c, i) => {
      return (


        <option key={c.id}  > {c.id}</option>






      );
    });
    var A_Estudiantes = this.state.Estudiante.map((c, i) => {
      return (


        <option key={c.Nombre}  > {c.Nombre}</option>






      );
    });



    var A_colaborador = this.state.colaborador.map((c, i) => {
      return (


        <option key={c.Nombre}  > {c.Nombre}</option>






      );
    });


    var A_Estudiantes2 = this.state.Estudiante.map((c, i) => {
      return (


        <option key={c.id}  > {c.id}</option>


      );
    });
    var A_colaborador2 = this.state.colaborador.map((c, i) => {
      return (


        <option key={c.id}  > {c.id}</option>


      );
    });



    var actividad = this.state.actividad.map((c, i) => {
      return <li key={i}>


        <div className="card" >
          <div className="card-body">
            <span className="badge badge-info">ID</span>
            <h5 className="card-title">  {c.id} </h5>
            <span className="badge badge-info">Expositor</span>
            <h5 className="card-title">  {c.Expositor} </h5>
            <span className="badge badge-info">Lugar</span>
            <h5 className="card-title">  {c.Lugar} </h5>

          </div>
        </div>
      </li>
    });

    const { id, NombreUsuario, Actividad, idUsuario } = this.state

    return (

      <div>
        <form on onSubmit={this.submitHandler}>
          <nav className="navbar navbar-dark bg-primary">


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

          </nav>

          <h1><span className="badge badge-primary">AsignarCursos Actividades</span>

          </h1>
          <img src={logo} className="App-logo3" alt="logo" />

          <  div className="container-fluid" align="center">
            <div className="col-md-4 text-center">
              <h3><span className="badge badge-primary">Ingrese Datos </span>

              </h3>

              <input type="text" className="form-control" placeholder="id" aria-label="Username" aria-describedby="addon-wrapping" name="id" value={id} onChange={this.changeHandler}></input>

              <div className="form-group">

                <h3><span className="badge badge-info">Escoja el Nombre del Usuario </span> </h3>

                <select class="selectpicker" name="NombreUsuario" defaultValue={NombreUsuario} onChange={this.changeHandler} >

                  {A_Estudiantes}
                  {A_colaborador}
                </select>
              </div>

              <div className="form-group">

                <h3><span className="badge badge-info">Escoja el id del Usuario </span> ></h3>

                <select class="selectpicker" name="idUsuario" defaultValue={idUsuario} onChange={this.changeHandler} >

                  {A_colaborador2}
                  {A_Estudiantes2}
                </select>
              </div>

              <div className="form-group">

                <h3><span className="badge badge-info">Actividades Disponibles </span>

                </h3>

                <select class="selectpicker" name="Actividad" defaultValue={Actividad} onChange={this.changeHandler} >

                  {A_actividad}
                </select>
              </div>


              <button type="submit" className="btn btn-light">Crear </button>
              <button type="submit" onClick={(this.Validar)} className="btn btn-light">Validar</button>
            </div>

          </div>

          <h3><span className="badge badge-primary">Asignaciones </span>

          </h3>
          {AsignarActividad}

          <h3><span className="badge badge-primary">Actividades </span>

          </h3>
          {actividad}

        </form>
      </div>


















    );
  }
}
export default AsignarActividades