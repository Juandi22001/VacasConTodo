import React, { Component } from 'react';
import logo from './actividades.svg';
import './App.css';
import axios from 'axios';
import request from 'superagent';
import Admin from './Admin';
const a = window.localStorage.getItem('id')

class RegistroActividadesC extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      idPago: '',
      Carne: '',
      Actividad: '',
      Usuario: '',
      Valor: '',
      cursos: [],
      actividad: [],
      Admin: [],
      colaborador: [],
      Estudiante: [],
      Catedratico: [],
      AsignarActividad: [],
      RegistroActividades: [],
      Ingreso: []
    }
  }


  NotiRegistro = async () => {
    request.get('http://localhost:3200/RegistroActividades')
      .end((err, res) => {
        console.log(res);
        const RegistroActividades = JSON.parse(res.text);
        this.setState({

          RegistroActividades: RegistroActividades

        });
      });
  }


  NotiI = async () => {
    request.get('http://localhost:3200/Ingreso')
      .end((err, res) => {
        console.log(res);
        const Ingreso = JSON.parse(res.text);
        this.setState({

          Ingreso: Ingreso

        });
      });
  }



  NotiA = async () => {
    request.get('http://localhost:3200/Actividades')
      .end((err, res) => {
        console.log(res);
        const actividad = JSON.parse(res.text);
        this.setState({

          actividad: actividad

        });
      });
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
        const AsignarCurso = JSON.parse(res.text);
        this.setState({

          AsignarActividad: AsignarCurso

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
    request.get('http://localhost:3200/cursos')
      .end((err, res) => {
        console.log(res);
        const cursos = JSON.parse(res.text);
        this.setState({

          cursos: cursos

        });
      });
  }
  Delete = async (id) => {
    await axios.delete('http://localhost:3200/RegistroActividades/' + id);
    this.NotiRegistro();
  }
  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3200/RegistroActividades', this.state)
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
    this.NotiA();
    this.NotiI(); this.NotiRegistro();
  }


  Validar = (e) => {

    let valCurso = false;

    let valAsignacion = false;
    let valingreso = false;
    let valAdmin = false;
    let valColaborador = false;
    let valEstudiante = false;
    let valCatedratico = false;



    var AsignarActividad = this.state.AsignarActividad.map((c, i) => {


      if (c.NombreUsuario === this.state.Usuario & c.Actividad === this.state.Actividad) {
        valCurso = true;


      } else {

      }
    });


    var colaborador = this.state.colaborador.map((E2, i) => {
      if (E2.Nombre === this.state.NombreUsuario) {
        valColaborador = true;
      }
    });

    var Estudiante = this.state.Estudiante.map((E, i) => {
      if (E.Nombre === this.state.NombreUsuario) {
        valAdmin = true;
        alert("validar nombre Usuario")

      }

    });
    var Ingreso = this.state.Ingreso.map((E, i) => {
      if (E.Nombre === this.state.NombreUsuario) {
        valingreso = true;
        alert("validar pago")

      }


    });

    var Estudiante = this.state.Estudiante.map((E3, i) => {
      if (E3.Nombre === this.state.NombreUsuario) {

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

    let ADMIN;

    let ADMIN1;

    let ADMIN2;

    let ADMIN3;

    let ADMIN4;
    let ADMIN5;


    var Ingreso = this.state.Ingreso.map((E, i) => {
      return (


        <option key={E.Nombre}  > {E.Nombre}</option>






      );


    });



    var Ingreso2 = this.state.Ingreso.map((E, i) => {

      if (E.id === this.state.idPago) {
        return (

          <div className="card" >
            <div className="card-body">
              <span className="badge badge-info">Pago</span>
              <h5 className="card-title">  {E.Nombre} </h5>


            </div>
          </div>




        );
      }


    });




    var Ingreso4 = this.state.Ingreso.map((E, i) => {

      if (E.Carne === this.state.Carne) {
        return (

          <div className="card" >
            <div className="card-body">
              <span className="badge badge-info">Pago</span>
              <h5 className="card-title">  {E.id} </h5>


            </div>
          </div>




        );
      }


    });


    var Ingreso3 = this.state.Ingreso.map((E, i) => {


      return (


        <option key={E.id}  > {E.id}</option>






      );


    });


    var A_actividad = this.state.actividad.map((c, i) => {
      return (


        <option key={c.id}  > {c.id}</option>






      );
    });






    var AsignarActividad = this.state.AsignarActividad.map((c, i) => {


      if (c.NombreUsuario === this.state.Usuario & c.Actividad === this.state.Actividad) {

        this.state.Valor = "Aceptado"

      } else {
        this.state.Valor = "Falso"


      }
    });

    var Registroactividad = this.state.RegistroActividades.map((c, i) => {
      return <li key={i}>


        <div className="card" >
          <div className="card-body">
            <span className="badge badge-info">ID</span>
            <h5 className="card-title">  {c.id} </h5>
            <span className="badge badge-info">Usuario</span>
            <h5 className="card-title">  {c.Usuario} </h5>
            <span className="badge badge-info">Pago</span>
            <h5 className="card-title">  {c.idPago} </h5>


          </div>
        </div>
      </li>
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

    var Estudiante = this.state.Estudiante.map((E3, i) => {
      if (E3.id === a) {

        ADMIN = E3.Nombre
      }
    });


    var Estudiante = this.state.Estudiante.map((E3, i) => {
      if (E3.id === a) {


      }
    });






    const { Carne, Usuario, Actividad, idPago, id } = this.state

    return (

      <div>
        <form on onSubmit={this.submitHandler}>
          <nav className="navbar navbar-dark bg-primary">

      
          <a className="navbar-brand" href="http://localhost:3000/RegistroActividadesC" >Registrar Actividades</a>

<a className="navbar-brand" href="http://localhost:3000/MensajeColaborador" >Mensajes</a>



<a className="navbar-brand" href="http://localhost:3000/PresupuestoC" >Presupuesto</a>

<a className="navbar-brand" href="http://localhost:3000/VerNoticia" >Noticia</a>

<a className="navbar-brand" href="http://localhost:3000/AsignarCursoColaborador" > Asignar Cursos</a>
<a className="navbar-brand" href="http://localhost:3000/VerCursos" >Cursos</a>

<a className="navbar-brand" href="http://localhost:3000/AsignarActividadColaborador" >Actividades</a>
   
<a className="navbar-brand" href="http://localhost:3000/Inventario" >Inventario</a>
   
<a className="navbar-brand" href="http://localhost:3000/Inventario" >Inventario</a>
<a className="navbar-brand" href="http://localhost:3000/Pagos" >Generar Pagos</a>

<button type="submit" onClick={(this.Eliminar)} className="btn btn-light">SALIR</button>

          </nav>

          <h1><span className="badge badge-primary">Registrar Asistencia</span>

          </h1>

          <img src={logo} className="App-logo3" alt="logo" />

          <  div className="container-fluid" align="center">
            <div className="col-md-4 text-center">
              <h3><span className="badge badge-primary">Ingrese Datos </span>

              </h3>



              <div className="form-group">

                <h3><span className="badge badge-info">Estudiantes </span>

                </h3>
                <input type="text" className="form-control" placeholder="id" aria-label="Username" aria-describedby="addon-wrapping" name="id" value={id} onChange={this.changeHandler}></input>

                <select class="selectpicker" name="Usuario" defaultValue={Usuario} onChange={this.changeHandler} >

                  {Ingreso}
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

            <div className="form-group" >
              <div className="card" >
                <div className="card-body">
                  <h1><span className="badge badge-info"> Ver Pagos </span>

                  </h1>

                  <select class="selectpicker" name="idPago" defaultValue={idPago} onChange={this.changeHandler} >

                    {Ingreso3}
                  </select>

                  <input type="text" className="form-control" placeholder="Concepto" aria-label="Username" aria-describedby="addon-wrapping" name="idPago" value={idPago} onChange={this.changeHandler}></input>

                  {Ingreso2}
                </div> </div> </div>





            <div className="form-group">
              <div className="card" >
                <div className="card-body">



                  <h1><span className="badge badge-info"> Buscar Pagos </span>

                  </h1>

                  <input type="text" className="form-control" placeholder="Concepto" aria-label="Username" aria-describedby="addon-wrapping" name="Carne" value={Carne} onChange={this.changeHandler}></input>


                  {Ingreso4}
                </div> </div> </div>









          </div>
        </form>
        <h1><span className="badge badge-primary">Actividades</span>
          {actividad}
        </h1>

        <h1><span className="badge badge-primary"> Registro de Actividades</span>
          {Registroactividad}
        </h1>

      </div>


















    );
  }
}
export default RegistroActividadesC