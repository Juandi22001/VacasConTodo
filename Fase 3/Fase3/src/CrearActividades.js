import React ,{Component} from 'react';
import logo from './actividades.svg';
import './App.css';
import axios from 'axios';
import request from 'superagent';

class CrearActividades extends Component{
 constructor(){
  super();
  this.state={
     id :'', 
     Fecha :'',
    Hora:'',
    Lugar :'',
    Tipo :'',
    Expositor :'',
    Descripcion :'',

    actividades:[]
 

  }
  } 

  Noti = async() => {
    request.get('http://localhost:3200/actividades')
    .end( (err ,res)=> {
console.log(res);
const actividades =JSON.parse(res.text);
this.setState({

  actividades : actividades
   
}); });
  }
  Delete = async (id)=>{
await axios.delete('http://localhost:3200/actividades/'+id);
this.Noti();
  }
  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3200/actividades',this.state) 
    .then(response =>  {
     console.log(response)
    }) ;
  }
  changeHandler =e => {
    this.setState({[e.target.name]:e.target.value})
      }
  componentDidMount(){
   this.Noti();
     }
  render(){ 
     var actividades= this.state.actividades.map((actividad, i)=>{
    return <li key={i }>   
  
  
   <div className="card" >  
   <div className="card-body">
   <span className="badge badge-info">Id</span>
   <h5 className="card-title">  {actividad.id} </h5>

   <span className="badge badge-info">Fecha</span>
   <h5 className="card-title">  {actividad.Fecha} </h5>

   <span className="badge badge-info">Hora</span>
   <h5 className="card-title">  {actividad.Hora} </h5>


   <span className="badge badge-info">Lugar</span>
   <h5 className="card-title">  {actividad.Lugar} </h5>


   <span className="badge badge-info"> Tipo</span>
   <h5 className="card-title">  {actividad.Tipo} </h5>


   <span className="badge badge-info">Cantidad</span>
   <h5 className="card-title">  {actividad.Cantidad} </h5>

   <span className="badge badge-info"> Expositor</span>
   <h5 className="card-title">  {actividad.Expositor} </h5>


   <span className="badge badge-info">Descripcion</span>
   <h5 className="card-title">  {actividad.Descripcion} </h5>
   <button className="btn btn-light" onClick={()=> this.Delete(actividad.id)}>Eliminar </button>


    </div>
    </div>
    </li>
        });
        
         const {id,Fecha ,Lugar,Hora ,Tipo,Expositor,Descripcion,Cantidad}=this.state

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

 <h1><span className="badge badge-primary">Crear Actividad</span> 

 </h1>  
 <img src={logo} className="App-logo3" alt="logo" />

 <  div className="container-fluid" align="center">
<div className="col-md-4 text-center">
<h3><span className="badge badge-primary">Ingrese Datos </span> 

</h3> 

<input type="text" className="form-control" placeholder="id" aria-label="Username" aria-describedby="addon-wrapping" name="id" value ={id} onChange={this.changeHandler }></input>
<input type="date" className="form-control" placeholder="Fecha" aria-label="Username" aria-describedby="addon-wrapping" name="Fecha" value ={Fecha} onChange={this.changeHandler }></input>
<input type="time" className="form-control" placeholder="Hora" aria-label="Username" aria-describedby="addon-wrapping"  name ="Hora"value ={Hora} onChange={this.changeHandler }></input>
<input type="text" className="form-control" placeholder="Lugar" aria-label="Username" aria-describedby="addon-wrapping"  name ="Lugar"value ={Lugar} onChange={this.changeHandler } ></input>
<input type="text" className="form-control" placeholder="Tipo" aria-label="Username" aria-describedby="addon-wrapping"  name ="Tipo"value ={Tipo} onChange={this.changeHandler } ></input>
<input type="text" className="form-control" placeholder="Cantidad Limite" aria-label="Username" aria-describedby="addon-wrapping"  name ="Cantidad"value ={Cantidad} onChange={this.changeHandler } ></input>
<input type="text" className="form-control" placeholder="Expositor" aria-label="Username" aria-describedby="addon-wrapping"  name ="Expositor" value ={Expositor} onChange={this.changeHandler } ></input>
<input type="text" className="form-control" placeholder=" ingrese Descripcion" aria-label="Username" aria-describedby="addon-wrapping"  name ="Descripcion"value ={Descripcion} onChange={this.changeHandler } ></input>
  <button type="submit" className="btn btn-light">Crear </button>

  </div>

  </div>
  {actividades} 
 </form>
  </div>

  
















  );
}
 }
export default CrearActividades
