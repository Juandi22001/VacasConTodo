import React, { Component } from 'react';
import logo from './Calificacion.svg';
import './App.css';
import axios from 'axios';
import request from 'superagent';
import Admin from './Admin';
const a = window.localStorage.getItem('id')

class CalificacionAdmin extends Component {
   
      constructor() {
        super();
        this.state = {
          id: '',
          Tipo:'',
       Usuario: '',
       Actividad:'',
          Comentario: '',
          Calificacion: '',
          cursos: [],
          
          Admin: [],
          colaborador: [],
          Estudiante: [],
          Catedratico: [],
          AsignarActividad: [],
          RegistroActividades: [],
          Ingreso: [],
          actividad: [],
        }
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
        await axios.delete('http://localhost:3200/CalificacionActividad/' + id);
        this.NotiRegistro();
      }
      submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:3200/CalificacionActividad', this.state)
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
    
    
        var Ingreso = this.state.actividad.map((E, i) => {
          return (
    
    
            <option key={E.id}  > {E.id}</option>
    
    
    
    
    
    
          );
    
    
        });
    
        var Tipo = this.state.actividad.map((E, i) => {
       if(E.id===this.state.Actividad){

        this.state.Tipo=E.Tipo
       }


    
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

        
        var Admin = this.state.Admin.map((E, i)=>{
            if (E.id=== a) {
  
       ADMIN=E.Nombre;
        this.state.Usuario=E.Nombre
     
            }           });

    
    
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
                <button className="btn btn-light" onClick={() => this.Delete(c.id)}>Eliminar </button>
    
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
    
    
    
    
    
    
        const { Comentario, Usuario, Calificacion,  id , Actividad} = this.state
    
        return (
    
          <div>
            <form on onSubmit={this.submitHandler}>
              <nav className="navbar navbar-dark bg-primary">
    
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
    
              </nav>
    
              <h1><span className="badge badge-primary">Calificar Actividad</span>
    
              </h1>
              <h2><span className="badge badge-primary">Usuario:{ADMIN}</span>
    
    </h2>
              <img src={logo} className="App-logo3" alt="logo" />
    
              <  div className="container-fluid" align="center">
                <div className="col-md-4 text-center">
                  <h3><span className="badge badge-primary">Ingrese Datos </span>
    
                  </h3>
    
                  <input type="text" className="form-control" placeholder="id" aria-label="Username" aria-describedby="addon-wrapping" name="id" value={id} onChange={this.changeHandler}></input>
    
    
                  <div className="form-group">
    
                    <h3><span className="badge badge-info">Actividades</span>
    
                    </h3>
                   
                    <select class="selectpicker" name="Actividad" defaultValue={Actividad} onChange={this.changeHandler} >
    
                      {Ingreso}
                    </select>
                  </div>
                  <input type="text" className="form-control" placeholder="ingrese Comentario" aria-label="Username" aria-describedby="addon-wrapping" name="Comentario" value={Comentario} onChange={this.changeHandler}></input>
                
                  <div className="form-group">
    
                    <h3><span className="badge badge-info">Calificar</span>
    
                    </h3>
                   
                    <select class="selectpicker" name="Calificacion" defaultValue={Calificacion} onChange={this.changeHandler} >
    
                 
            <option   > 1</option>
    
            <option   > 2</option>
    
            <option   > 3</option>
    
            <option   > 4</option>
    
            <option   > 5</option>
    
            <option   > 6</option>
    
            <option   > 7</option>
    
            <option   > 8</option>
    
            <option   > 9</option>
    
            <option   > 10</option>
    
    
                    </select>
                  </div>
    
                  <input type="text" className="form-control" placeholder=".." aria-label="Username" aria-describedby="addon-wrapping" name="Calificacion" value={Calificacion} onChange={this.changeHandler}></input>
                
    
               
    
    
    
    
    
    
                  <button type="submit" className="btn btn-light">Calificar </button>
                </div>
    
             
    
    
    
    
    
    
    
    
    
    
    
    
              </div>
            </form>
            <h1><span className="badge badge-primary">Actividades</span>
              {actividad}
            </h1>
    
  
    
          </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        );
      }
    }
export default CalificacionAdmin