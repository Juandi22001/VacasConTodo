import React, { Component } from 'react';
import logo from './Contacto.svg'
import './App.css';
import axios from 'axios';
import request from 'superagent';
import { throwStatement } from '@babel/types';

class Contactos extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      Nombre: '',
      Telefono: '',
      Correo: '',
      Direccion: '',
      Rol: '',
      Oportunidades: '',
      Encargado: '',
      Contactos: [],
      Admin: [],
      colaborador: [],
      Estudiante: []
      , Catedratico: []
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
    request.get('http://localhost:3200/Contactos')
      .end((err, res) => {
        console.log(res);
        const Contactos = JSON.parse(res.text);
        this.setState({

          Contactos: Contactos

        });
      });

  }

  editar = async (e) => {

    const res = await axios.put('http://localhost:3200/Contactos/' + this.state.id, {
      id: this.state.id,
      Nombre: this.state.Nombre,
      Telefono: this.state.Telefono,
      Correo: this.state.Correo,
      Direccion: this.state.Direccion,
      Rol: this.state.Rol,
      Oportunidades: this.state.Oportunidades,
      Encargado: this.state.Encargado

    });

    console.log(res)
  }
  Delete = async (id) => {
    await axios.delete('http://localhost:3200/Contactos/' + id);
    this.Noti();
  }
  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3200/Contactos', this.state)
      .then(response => {
        console.log(response)
      });
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  componentDidMount() {
    this.Noti0();
    this.Noti2();
    this.Noti3();
    this.Noti4();


    this.Noti();


  }



  Validar = (e) => {

    let valAdmin = false;
    let valColaborador = false;
    let valEstudiante = false;
    let valCatedratico = false;

    var colaborador = this.state.colaborador.map((E2, i) => {
      if (E2.Nombre === this.state.Encargado) {
        valColaborador = true;
      }
    });

    var Admin = this.state.Admin.map((E, i) => {
      if (E.Nombre === this.state.Encargado) {
        valAdmin = true;

      }
    });

    var Estudiante = this.state.Estudiante.map((E3, i) => {
      if (E3.Nombre === this.state.Encargado) {
        valEstudiante = true;
      }



    });


    if (valAdmin === true) {
      alert('Admin Asignado')

    }

    else if (valColaborador === true) {
      alert('Colaborador Asignado')

    }

    else if (valEstudiante === true) {
      alert('Estudiante Asignado')

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






    var A_Estudiantes = this.state.Admin.map((c, i) => {
      return (


        <option key={c.Nombre}  > {c.Nombre}</option>

      );
    });



    var A_colaborador = this.state.colaborador.map((c, i) => {
      return (


        <option key={c.Nombre}  > {c.Nombre}</option>






      );
    });










    var Contactos = this.state.Contactos.map((Contact, i) => {
      return <li key={i}>


        <div className="card" >
          <div className="card-body">
            <span className="badge badge-info">Id</span>
            <h5 className="card-title">  {Contact.id} </h5>

            <span className="badge badge-info"> Nombre</span>
            <h5 className="card-title">  {Contact.Nombre} </h5>

            <span className="badge badge-info"> Telefono</span>
            <h5 className="card-title">  {Contact.Telefono} </h5>


            <span className="badge badge-info"> @Correo</span>
            <h5 className="card-title">  {Contact.Correo} </h5>


            <span className="badge badge-info">  Direccion</span>
            <h5 className="card-title">  {Contact.Direccion} </h5>


            <span className="badge badge-info"> Rol</span>
            <h5 className="card-title">  {Contact.Rol} </h5>

            <span className="badge badge-info">  Oportunidades</span>
            <h5 className="card-title">  {Contact.Oportunidades} </h5>


            <span className="badge badge-info"> Encargado</span>
            <h5 className="card-title">  {Contact.Encargado} </h5>
            <button className="btn btn-light" onClick={() => this.Delete(Contact.id)}>Eliminar </button>



          </div>
        </div>
      </li>
    });

    const { id, Nombre, Oportunidades, Telefono, Correo, Rol, Encargado, Direccion } = this.state

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

          <h1><span className="badge badge-primary">Crear  Contacto</span>

          </h1>
          <img src={logo} className="App-logo3" alt="logo" />

          <  div className="container-fluid" align="center">
            <div className="col-md-4 text-center">
              <h3><span className="badge badge-primary">Ingrese Datos </span>

              </h3>

              <input type="text" className="form-control" placeholder="id" aria-label="Username" aria-describedby="addon-wrapping" name="id" value={id} onChange={this.changeHandler}></input>
              <input type="text" className="form-control" placeholder="Nombre" aria-label="Username" aria-describedby="addon-wrapping" name="Nombre" value={Nombre} onChange={this.changeHandler}></input>
              <input type="text" className="form-control" placeholder="Telefono" aria-label="Username" aria-describedby="addon-wrapping" name="Telefono" value={Telefono} onChange={this.changeHandler}></input>
              <input type="text" className="form-control" placeholder="Oportunidades" aria-label="Username" aria-describedby="addon-wrapping" name="Oportunidades" value={Oportunidades} onChange={this.changeHandler} ></input>
              <input type="text" className="form-control" placeholder="Correo" aria-label="Username" aria-describedby="addon-wrapping" name="Correo" value={Correo} onChange={this.changeHandler} ></input>
              <input type="text" className="form-control" placeholder="Direccion Limite" aria-label="Username" aria-describedby="addon-wrapping" name="Direccion" value={Direccion} onChange={this.changeHandler} ></input>
              <input type="text" className="form-control" placeholder="Rol" aria-label="Username" aria-describedby="addon-wrapping" name="Rol" value={Rol} onChange={this.changeHandler} ></input>

              <div className="form-group">

                <h3><span className="badge badge-info">Escoja Nombre del Encargado</span> </h3>

                <select class="selectpicker" name="Encargado" defaultValue={Encargado} onChange={this.changeHandler} >

                  {A_Estudiantes}
                  {A_colaborador}
                </select>
              </div>



              <button type="submit" className="btn btn-light">Crear </button>
              <button className="btn btn-light" onClick={(this.Validar)} >Validar</button>
            </div>

          </div>
          {Contactos}
        </form>
      </div>


















    );
  }
}
export default Contactos
