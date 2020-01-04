import React, { Component } from 'react';
import logo from './cursos.svg';
import './App.css';
import axios from 'axios';
import request from 'superagent';

class  ReporteCurso3 extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      NombreUsuario: '',
      Cursos: '',
      idUsuario: '',
      cursos: [],
     Usuarios:[],
      Admin: [],
      colaborador: [],
      Estudiante: [],
      Catedratico: [],
      AsignarCurso: [],
   
   
      AsignarActividad:[],
     
    RegistroActividades: []

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


    NotiA2 = async() => {
      request.get('http://localhost:3200/AsignarActividad')
      .end( (err ,res)=> {
  console.log(res);
  const AsignarActividad  =JSON.parse(res.text);
  this.setState({
  
    AsignarActividad: AsignarActividad
     
  }); });
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

    request.get('http://localhost:3200/AsignarCurso')
      .end((err, res) => {
        console.log(res);
        const AsignarCurso = JSON.parse(res.text);
        this.setState({

          AsignarCurso: AsignarCurso

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
    await axios.delete('http://localhost:3200/AsignarCurso/' + id);
    this.Noti01();
  }
  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3200/AsignarCurso', this.state)
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
    this.Noti4(); this.NotiA2(); this.NotiRegistro();   this.state.Cursos="vacio"
  }


  Validar = (e) => {

    let valCurso = false;

    let valAdmin = false;
    let valColaborador = false;
    let valEstudiante = false;
    let valCatedratico = false;

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

    var A_curso = this.state.cursos.map((c, i) => {
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
 let Usuarios = []
let Actividad=[]
let P =[]
let P2 =[]
let P3 =[]

let P4 =[]

if(this.state.Curso==="vacio"){
  var elementosRemovidos = Actividad.splice(0, Actividad.length);
  var elementosRemovidos = P.splice(0, P.length);
  var elementosRemovidos = P2.splice(0, P2.length);
  var elementosRemovidos = P3.splice(0, P3.length);
  
  
  var elementosRemovidos = Usuarios.splice(0, Usuarios.length);

}





 var AsignarCurso = this.state.AsignarCurso.map((c, i) => {


    if(c.Curso===this.state.Cursos ){  
       
        Usuarios.push(c.NombreUsuario)
    
    } else{
    
    }
});

var Estudiante = this.state.Estudiante.map((c3, i) => {
 
  
var RegistroActividades =this.state.RegistroActividades.map((c,i)=>{
var AsignarActividad = this.state.AsignarActividad.map((c2, i) => {

    for (var i=0; i<Usuarios.length; i++) { 

      if(Usuarios[i]===c.Usuario && c2.NombreUsuario===Usuarios[i] &&c3.Nombre===Usuarios[i]   && c2.Actividad===c.Actividad && c.Valor==="Aceptado"){     
            Actividad.push("Estudiante:"+" --"+ c3.Carne+"Actividad"+"--"+c.Actividad+"Asistencia:"+"si")
            P3.push(c.Usuario)

}


    }

});
});

});

var Estudiante = this.state.Estudiante.map((c3, i) => {
 
var RegistroActividades2 =this.state.RegistroActividades.map((c,i)=>{
    var AsignarActividad2 = this.state.AsignarActividad.map((c2, i) => {
    
        for (var i=0; i<P3.length; i++) { 
    
            if(c.Usuario!=P3[i] && P3[i]===c3.Nombre&&c2.Actividad != c.Actividad){
              P.push("Actividad"+"--- "+c2.Actividad +"Usario:"+c3.Carne)
    
    }

    
        }
      });
    });
    });
    var AsignarCurso = this.state.AsignarCurso.map((c, i) => {

    var Estudiante2 = this.state.Estudiante.map((c3, i) => {
      for (var i=0; i<P2.length; i++) { 
       
        if(P2[i]===c3.Nombre && P2[i]===c.NombreUsuario){
 P.push("Usuario:"+c3.Carne+"Asistio :no")
        }
         
        
            }
          });  


    });
let prueba=false;
 
var Estudiante = this.state.Estudiante.map((c2, i) => {
    
  for (var i=0; i<Usuarios.length; i++) { 
       
      if(Usuarios[i] === c2.Nombre){    
     P4.push( "Estudiantes"+"--"+ c2.Carne )
     
     
      }}
    });  

    const { id, NombreUsuario, Cursos, idUsuario } = this.state

    return (

      <div>
        <form on onSubmit={this.submitHandler}>
          <nav className="navbar navbar-dark bg-primary">


            <a className="navbar-brand" href="http://localhost:3000/" > Salir</a>
            <a className="navbar-brand" href="http://localhost:3000" > RegistroPagos</a>
          </nav>

          <h1><span className="badge badge-primary">Reporte Cursos y Actividades  </span>

          </h1>
          <img src={logo} className="App-logo3" alt="logo" />

          <  div className="container-fluid" align="center">
            <div className="col-md-4 text-center">
              <h3><span className="badge badge-primary">Escoja Cursos </span>

              </h3>

          

              <div className="form-group">

                <h3><span className="badge badge-info">Cursos  </span>

                </h3>

                <select class="selectpicker" name="Cursos" defaultValue={Cursos} onChange={this.changeHandler} >

                  {A_curso}
                </select>
                <input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="addon-wrapping" name="Cursos" value={Cursos} onChange={this.changeHandler} ></input>
         
             </div>






              <button type="submit" className="btn btn-light">PDF</button>
              <button type="submit" onClick={(this.Validar)} className="btn btn-light">Validar</button>
            </div>

          </div>
          {P4}
          <h3><span className="badge badge-info"> Asistentes a Actividades
        </span>

</h3>{Actividad}      <h3><span className="badge badge-info"> InAsistentes a Actividades
        </span>

</h3>{P}
        </form>
   
      </div>


















    );
  }
}
export default ReporteCurso3