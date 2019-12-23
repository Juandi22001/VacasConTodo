import React ,{Component} from 'react';
import logo from './actividades.svg'
import './App.css';
import axios from 'axios';
import request from 'superagent';

class VerActividad extends Component{
 constructor(){
  super();
  this.state={
  Actividades:[]
  }
  }
  componentDidMount(){
    request.get('http://localhost:3200/actividades')
    .end( (err ,res)=> {
console.log(res);
const Actividades =JSON.parse(res.text);
this.setState({

  Actividades: Actividades
   
}); });
     }
  render(){
    var Actividades= this.state.Actividades.map((actividad, i)=>{
    return <li key={i }>   
  
  
   <div className="card" >  
   <div className="card-body">
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


    </div>
    </div>
    </li>
  
 
    });
    return (
    
<div>
<nav className="navbar navbar-dark bg-primary">
<a className="navbar-brand" href="http://localhost:3000/Registro" >Registro Estudiante</a>

<a className="navbar-brand" href="http://localhost:3000/Registro2" >Registro Catedratico</a>

<a className="navbar-brand" href="http://localhost:3000/VerActividades" > Actividades</a>

<a className="navbar-brand" href="http://localhost:3000/noticias" > Noticias</a>
<a className="navbar-brand" href="http://localhost:3000/" >Login</a>


</nav> 
<h1> 
<span className="badge badge-info"> Actividades </span>
</h1>  <img src={logo} className="App-logo3" alt="logo" / >
{Actividades} 
  </div>
  
















  );
}
 }
export default VerActividad
