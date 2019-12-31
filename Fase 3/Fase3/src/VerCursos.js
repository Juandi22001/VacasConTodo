import React ,{Component} from 'react';
import logo from './cursos.svg';
import './App.css';
import axios from 'axios';
import request from 'superagent';

class VerCursos extends Component{
 constructor(){
  super();
  this.state={
     id :'', 
    Nombre :'',
    Codigo:'',
    Seccion:'',
    Universidad:'',
    Titular:'',

    cursos:[]
 

  }
  }
  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3200/cursos',this.state) 
    .then(response =>  {
     console.log(response)
    }) ;
  }
  changeHandler =e => {
    this.setState({[e.target.name]:e.target.value})
      }
  componentDidMount(){
    request.get('http://localhost:3200/cursos')
    .end( (err ,res)=> {
console.log(res);
const cursos =JSON.parse(res.text);
this.setState({

  cursos: cursos
   
}); });
     }
  render(){ 

      
      var cursos= this.state.cursos.map((c, i)=>{
    return <li key={i }>   
  
  
   <div className="card" >  
   <div className="card-body">
   <span className="badge badge-info">Nombre</span>
   <h5 className="card-title">  {c.Nombre} </h5>
   <span className="badge badge-info">Codigo</span>
   <h5 className="card-title">  {c.Codigo} </h5>
   <span className="badge badge-info">Titular</span>
   <h5 className="card-title">  {c.Titular} </h5>
   <span className="badge badge-info">Seccion</span>
   <h5 className="card-title">  {c.Seccion} </h5>
   <span className="badge badge-info">Universidad</span>
   <h5 className="card-title">  {c.Universidad} </h5>
 
    </div>
    </div>
    </li>
        });
        
       
        return (
    
<div>
  <form on onSubmit={this.submitHandler}>
<nav className="navbar navbar-dark bg-primary">



<a className="navbar-brand" href="http://localhost:3000/PresupuestoC" >Presupuesto</a>

<a className="navbar-brand" href="http://localhost:3000/VerNoticia" >Noticia</a>

<a className="navbar-brand" href="http://localhost:3000/VerCursos" >Cursos</a>

<a className="navbar-brand" href="http://localhost:3000/VerActividades" >Actividades</a>
   
<a className="navbar-brand" href="http://localhost:3000/Inventario" >Inventario</a>
<a className="navbar-brand" href="http://localhost:3000/Pagos" >Generar Pagos</a>
<a className="navbar-brand" href="http://localhost:3000/PerfilColaborador" >Perfil</a>

</nav>

 <h1><span className="badge badge-primary">Ver  Cursos</span> 

 </h1>  
 <img src={logo} className="App-logo3" alt="logo" />



  {cursos} 
 </form>
  </div>

  
















  );
}
 }
export default VerCursos