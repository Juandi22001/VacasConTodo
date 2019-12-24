import React ,{Component} from 'react';
import logo from './news.svg'
import './App.css';
import axios from 'axios';
import request from 'superagent';

class Modulo extends Component{
 constructor(){
  super();
  this.state={
  noticias:[]
  }
  }
  componentDidMount(){
    request.get('http://localhost:3200/noticias')
    .end( (err ,res)=> {
console.log(res);
const noticias =JSON.parse(res.text);
this.setState({

  noticias : noticias
   
}); });
     }
  render(){
    var noticias= this.state.noticias.map((noticia, i)=>{
    return <li key={i }>   
  
  
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


<span className="badge badge-info">Asignaciones Actividades  </span>  </h1> 
 


 <div className="card" >  
   <div className="card-body">
   <span className="badge badge-info"></span>
   <h5 className="card-title">  
   <span className="badge badge-info"> Ingresar  Actividad b</span>
   </h5>

<input type="text" className="form-control" placeholder="Ingrese ID del Usuario para valida" aria-label="Username" aria-describedby="addon-wrapping" ></input>
 
  
   <h5 className="card-title">  
   <span className="badge badge-info"> Ingresar Usuario</span>
   </h5>

<input type="text" className="form-control" placeholder="Ingrese ID del Usuario para valida" aria-label="Username" aria-describedby="addon-wrapping" ></input>
   <h5 className="card-title">  </h5>
   <span className="badge badge-info">recibio Coffe BReak</span>
   <h5 className="card-title"> ------ </h5>
   
  
    <p className="card-text">  </p>
    <button type="submit" onClick={(this.Validar)} className="btn btn-secondary">Ingresar </button>
    </div>
    </div>
  </div>
  
















  );
}
 }
export default Modulo
