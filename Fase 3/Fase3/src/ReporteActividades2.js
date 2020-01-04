import React, { Component } from 'react';
import logo from './actividades.svg';
import './App.css';
import axios from 'axios';
import request from 'superagent';
import Admin from './Admin';
const a = window.localStorage.getItem('id')

class ReporteActividades2 extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      idPago: '',
      Carne: '',
      Actividad: '',
      Usuario: '',
      Valor: '',
      Tipo: '',
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
    this.NotiA(); this.state.Actividad="vacio"
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
    let Usuarios=[];
   let Asistencia=[];
   let P=[];
   let P2=[];
   let P3=[];
   if(this.state.Actividad==="vacio"){

    var elementosRemovidos = Asistencia.splice(0, Asistencia.length);
    var elementosRemovidos = P.splice(0, P.length);
    var elementosRemovidos = P2.splice(0, P2.length);
    var elementosRemovidos = P3.splice(0, P3.length);
   
    var elementosRemovidos = Usuarios.splice(0, Usuarios.length);
   }
   var AsignarActividad = this.state.AsignarActividad.map((c2, i) => {
      
    
  if(this.state.Actividad===c2.Actividad){
Usuarios.push(c2.NombreUsuario);


  }
  
  
  
      
  
  });
    var Estudiante = this.state.Estudiante.map((c3, i) => {

 
  
      var RegistroActividades =this.state.RegistroActividades.map((c,i)=>{
      var AsignarActividad = this.state.AsignarActividad.map((c2, i) => {
      
          for (var i=0; i<Usuarios.length; i++) { 
      
         
      if(Usuarios[i]===c3.Nombre && Usuarios[i]===c.Usuario && Usuarios[i]===c2.NombreUsuario && c.Valor==="Aceptado"){
  Asistencia.push("Usuario="+"--"+c3.Carne+"--"+"Asistencia"+"---"+"si")
    
P2.push(c.Usuario)
}
      
      
      
          }
      
      });
      });
      
      });


    
  
        var RegistroActividades2 =this.state.RegistroActividades.map((c,i)=>{
        var AsignarActividad2 = this.state.AsignarActividad.map((c2, i) => {
        
        
          for (var i=0; i<P2.length; i++) { 
           
            if(P2[i]!=c.Usuario){
     P3.push(c.Usuario)
            }
             
            
                }
     
     
        });
        
        });


        var Estudiante2 = this.state.Estudiante.map((c3, i) => {
          for (var i=0; i<P3.length; i++) { 
           
            if(P3[i]===c3.Nombre){
     P.push("Usuario:"+c3.Carne)
            }
             
            
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
    var Tipo = this.state.actividad.map((c, i) => {
      if (c.id == this.state.Actividad) {
        this.state.Tipo = c.Tipo
      }
    });


    var A_actividad = this.state.actividad.map((c, i) => {
      return (


        <option key={c.id}  > {c.id}</option>






      );
    });







    const { Carne, Usuario, Actividad, idPago, id } = this.state

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

          <h1><span className="badge badge-primary">Registrar Asistencia</span>

          </h1>

          <img src={logo} className="App-logo3" alt="logo" />

          <  div className="container-fluid" align="center">
            <div className="col-md-4 text-center">









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

            <h3><span className="badge badge-info">ASISTENTES </span>

</h3>

{Asistencia}
<h3><span className="badge badge-info">No ASISTENTES </span>

</h3>

{P}









          </div>
        </form>


      </div>


















    );
  }
}
export default ReporteActividades2