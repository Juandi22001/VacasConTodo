import React, { Component } from 'react';
import logo from './vs.svg';
import './App.css';
import axios from 'axios';
import request from 'superagent';

class  ReporteVs extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      NombreUsuario: '',
    Actividad: '',
      idUsuario: '',
      cursos: [],

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

    request.get('http://localhost:3200/Ingreso')
      .end((err, res) => {
        console.log(res);
        const Ingreso = JSON.parse(res.text);
        this.setState({

         Ingreso: Ingreso

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
    this.Noti4(); this.NotiRegistro(); 
  }


  Validar = (e) => {

    let valCurso = false;

    let valAdmin = false;
    let valColaborador = false;
    let valEstudiante = false;
    let valCatedratico = false;
this.state.NombreUsuario=" "
    var cursos = this.state.cursos.map((c, i) => {
      if (c.Nombre === this.state.Curso) {
        valCurso = true;
      }
    });

    var colaborador = this.state.colaborador.map((E2, i) => {
      if (E2.Nombre === this.state.NombreUsuario) {
        valColaborador = true;
      }
    });

    var Admin = this.state.Admin.map((E, i) => {
      if (E.Nombre === this.state.NombreUsuario) {
        valAdmin = true;
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

    var A_curso = this.state.AsignarActividad.map((c, i) => {
        return (


        <option key={c.Actividad}  > {c.Actividad}</option>






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
    });    var Asistencia=["--"]
  if(this.state.NombreUsuario===" "){  Asistencia.push("----")}
    var A_Registro = this.state.RegistroActividades.map((c2, i) => {

      var AsignarActividad = this.state.AsignarActividad.map((c, i) => {
        if(c.NombreUsuario===this.state.NombreUsuario && c2.Usuario===this.state.NombreUsuario   && c2.Actividad===c.Actividad && c2.Valor==="Aceptado"   ){ 
          Asistencia.push("Actividad "+" ---------   "+ c2.Actividad  +" Asistencia"+"  ------:  "+"SI"  )

       
          }


        });
    


    });



    var A_Registro2 = this.state.Ingreso.map((c2, i) => {

     return(
        <tr key ={c2.Nombre}>{c2.Nombre}</tr>

        );
    


    });

    var A_Estudiantes = this.state.Estudiante.map((c, i) => {
      return (


     
      <tr key ={c.Nombre}>{c.Nombre}</tr>



      );
    });


   
    const { id, NombreUsuario, Actividad, idUsuario } = this.state

    return (

      <div>
        <form on onSubmit={this.submitHandler}>
          <nav className="navbar navbar-dark bg-primary">


            <a className="navbar-brand" href="http://localhost:3000/" > Salir</a>
            <a className="navbar-brand" href="http://localhost:3000" > RegistroPagos</a>
          </nav>

          <h1><span className="badge badge-primary">Usuario Registrados vs Usuarios  </span>

          </h1>
          <img src={logo} className="App-logo3" alt="logo" />

          <  div className="container-fluid" align="center">
            <div className="col-md-4 text-center">
            <table className="table">
  <thead className="thead-secondary">
    <tr>
 
      <th scope="col">Usuario Registrados</th>

      <th scope="col">Usuarios que  ya pagaron pagan  </th>
   
     
      

    </tr>
    
  </thead>
  <tbody>
    <tr>
  
      {A_Estudiantes}



      <td>
    { A_Registro2}




</td>
   
    </tr>
      </tbody>
</table>
          






















              <button type="submit" className="btn btn-light">PDF</button>
              <button type="submit" onClick={(this.Validar)} className="btn btn-light">Validar</button>
            </div>

          </div>

        </form>
      </div>


















    );
  }
}
export default ReporteVs