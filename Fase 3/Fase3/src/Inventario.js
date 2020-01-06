import React ,{Component} from 'react';
import logo from './inventario.svg'
import './App.css';
import axios from 'axios';
import request from 'superagent';

class Inventario extends Component{
 constructor(){
  super();
  this.state={
  Inventario:[]
  }
  }
  componentDidMount(){
    request.get('http://localhost:3200/Inventario')
    .end( (err ,res)=> {
console.log(res);
const Inventario =JSON.parse(res.text);
this.setState({

  Inventario : Inventario
   
}); });
     }
  render(){     var A_Insumo3 = this.state.Inventario.map((Invent, i) => {
   
     return (


         <div className="card" >
         <div className="card-body">
           <span className="badge badge-info">Carnet </span>
           <h5 className="card-title">  {Invent.Carne} </h5>
           <span className="badge badge-info">Usuario </span>
           <h5 className="card-title">  {Invent.Usuario} </h5>
           <span className="badge badge-info">Insumi</span>

           <h5 className="card-title">  {Invent.Insumo} </h5>

           <span className="badge badge-info">Comida</span>

           <h5 className="card-title">  {Invent.Comida} </h5>
           <span className="badge badge-info">Descripcion :</span>
           <p className="card-text"> {Invent.Descripcion} </p>

           <span className="badge badge-info">Ubicacion</span>

           <h5 className="card-title">  {Invent.Ubicacion} </h5>
           <span className="badge badge-info">Estado</span>
         </div>
  
         <button className="btn btn-light" onClick={() => this.Delete(Invent.id)}>Eliminar </button>

       </div>




     );
   });
    var Inventario = this.state.Inventario.map((Invent, i)=>{
    return <li key={i }>   
  
  
   <div className="card" >  
   <div className="card-body">
   <span className="badge badge-info">Codigo </span>
   <h5 className="card-title">  {Invent.codigo} </h5>
   <span className="badge badge-info">Nombre</span>
 
   <h5 className="card-title">  {Invent.  Nombre} </h5>
   <span className="badge badge-info">Descripcion :</span>
   <p className="card-text"> {Invent.Descripcion} </p>
   
   <span className="badge badge-info">Ubicacion</span>
  
   <h5 className="card-title">  {Invent.  Ubicacion} </h5>
   <span className="badge badge-info">Estado</span>
    </div>
   <h5 className="card-title">  {Invent.  Estado} </h5>

    </div>
    </li>
  
 
    });
    return (
    
<div>
<nav className="navbar navbar-dark bg-primary">

<a className="navbar-brand" href="http://localhost:3000/PresupuestoC" >Presupuesto</a>

<a className="navbar-brand" href="http://localhost:3000/VerNoticia" >Noticia</a>

<a className="navbar-brand" href="http://localhost:3000/VerCursos" >Cursos</a>

<a className="navbar-brand" href="http://localhost:3000/VerActividades" >Actividades</a>
   
<a className="navbar-brand" href="http://localhost:3000/Inventario" >Inventario</a>
<a className="navbar-brand" href="http://localhost:3000/Pagos" >Generar Pagos</a>
<a className="navbar-brand" href="http://localhost:3000/PerfilColaborador" >Perfil</a>
</nav> 
 <h1>


<span className="badge badge-info">Inventario</span>  </h1> 
 <img src={logo} className="App-logo2" alt="logo" / >

{Inventario} {A_Insumo3}
  </div>
  
















  );
}
 }
export default Inventario
