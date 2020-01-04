import React ,{Component} from 'react';
import logo from './Calificacion.svg';
import './App.css';
import axios from 'axios';
import request from 'superagent';

class MejoresConferencias extends Component{
 constructor(){
  super();
  this.state={
     id :'', 
     Actividad:'',
     Fecha :'',
   Concepto :'',
    Codigo :'',
    Total :'',
 CalificacionActividad:[],
    Ingreso:[],
 
    actividad: []
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

  Noti = async() => {
    request.get('http://localhost:3200/CalificacionActividad')
    .end( (err ,res)=> {
console.log(res);
const CalificacionActividad =JSON.parse(res.text);
this.setState({

  CalificacionActividad : CalificacionActividad
   
}); });
  }
  Delete = async (id)=>{
await axios.delete('http://localhost:3200/Ingreso/'+id);
this.Noti();
  }
  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3200/Ingreso',this.state) 
    .then(response =>  {
     console.log(response)
    }) ;
  }
  changeHandler =e => {
    this.setState({[e.target.name]:e.target.value})
      }
  componentDidMount(){
   this.Noti(); this.NotiA();
     }
  render(){ 

      
    var Ingreso = this.state.actividad.map((E, i) => {
        return (
  
  
          <option key={E.id}  > {E.id}</option>
  
  
  
  
  
  
        );
  
  
      });

var Promedio=[]
      var C= this.state.CalificacionActividad.map((I, i)=>{
        if(I.Actividad===this.state.Actividad){  
      Promedio.push( Number(I.Calificacion))
      
        }else{
            Promedio.push(0)
        }
              });

              var sumatoria = Promedio.reduce(function(acumulador, siguienteValor){
                return acumulador + siguienteValor;
              }, 0)
              
var PromedioC =sumatoria/Promedio.length;

      var Calificacion= this.state.CalificacionActividad.map((I, i)=>{
  if(I.Actividad===this.state.Actividad){  return ( 
  
  
   <div className="card" >  
   <div className="card-body">
   <span className="badge badge-info">Usuario</span>
   <h5 className="card-title">  {I.Usuario} </h5>

   <span className="badge badge-info">Comentario</span>
   <h5 className="card-title">  {I.Comentario} </h5>

   <span className="badge badge-info">Calificacion</span>
   <h5 className="card-title">  {I.Calificacion} </h5>



   <button className="btn btn-light" onClick={()=> this.Delete(I.id)}>Eliminar </button>


    </div>
    </div>
    );}
        });
        
         const {id,Fecha ,Concepto,Total,Codigo,Actividad}=this.state

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
<a className="navbar-brand" href="http://localhost:3000/VerPunteoConferencias" > VerC Calificacion</a>

<a className="navbar-brand" href="http://localhost:3000/CalificacionAdmin" > CalificarActividad </a>

</nav>

 <h1><span className="badge badge-primary">Ver Calificaciones</span> 

 </h1>  
 <img src={logo} className="App-logo3" alt="logo" />

 <  div className="container-fluid" align="center">

<div className="col-md-4 text-center">

        <div className="form-group">
    
    <h3><span className="badge badge-info">Actividades</span>

    </h3>
   
    <select class="selectpicker" name="Actividad" defaultValue={Actividad} onChange={this.changeHandler} >

      {Ingreso}
    </select>
  </div>
  <input type="text" className="form-control" placeholder="ingrese Comentario" aria-label="Username" aria-describedby="addon-wrapping" name="Actividad" value={Actividad} onChange={this.changeHandler}></input>
{Calificacion}
<h3><span className="badge badge-info">Promedio :{PromedioC}</span>

</h3>

  
  </div>

  </div>
  
 </form>
  </div>

  
















  );
}
 }
export default MejoresConferencias
