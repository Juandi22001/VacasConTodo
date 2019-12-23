import React ,{Component} from 'react';
import logo from './cursos.svg';
import './App.css';
import axios from 'axios';
import request from 'superagent';

class Cursos extends Component{
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

  Noti = async() => {
    request.get('http://localhost:3200/cursos')
    .end( (err ,res)=> {
console.log(res);
const cursos =JSON.parse(res.text);
this.setState({

  cursos: cursos
   
}); });
  }
  Delete = async (id)=>{
await axios.delete('http://localhost:3200/cursos/'+id);
this.Noti();
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
  this.Noti();
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
   <button className="btn btn-light" onClick={()=> this.Delete(c.id)}>Eliminar </button>

    </div>
    </div>
    </li>
        });
        
         const {id,Nombre ,Codigo,Hora ,Seccion,Universidad,Titular}=this.state

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
<a className="navbar-brand" href="http://localhost:3000/" > Salir</a>

<a className="navbar-brand" href="http://localhost:3000/Contactos" > Contactos</a>
<a className="navbar-brand" href="http://localhost:3000/Tareas" > Tareas</a>

<a className="navbar-brand" href="http://localhost:3000/Perfil" > Perfil</a>
<a className="navbar-brand" href="http://localhost:3000/Cursos" > Cursos</a>
<a className="navbar-brand" href="http://localhost:3000/Presupuesto" > Presupuesto</a>

</nav>

 <h1><span className="badge badge-primary">Crear  Cursos</span> 

 </h1>  
 <img src={logo} className="App-logo3" alt="logo" />

 <  div className="container-fluid" align="center">
<div className="col-md-4 text-center">
<h3><span className="badge badge-primary">Ingrese Datos </span> 

</h3> 

<input type="text" className="form-control" placeholder="id" aria-label="Username" aria-describedby="addon-wrapping" name="id" value ={id} onChange={this.changeHandler }></input>
<input type="text" className="form-control" placeholder="Nombre" aria-label="Username" aria-describedby="addon-wrapping" name="Nombre" value ={Nombre} onChange={this.changeHandler }></input>
<input type="text" className="form-control" placeholder="Hora" aria-label="Username" aria-describedby="addon-wrapping"  name ="Hora"value ={Hora} onChange={this.changeHandler }></input>
<input type="text" className="form-control" placeholder="Codigo" aria-label="Username" aria-describedby="addon-wrapping"  name ="Codigo"value ={Codigo} onChange={this.changeHandler } ></input>
<input type="text" className="form-control" placeholder="Seccion" aria-label="Username" aria-describedby="addon-wrapping"  name ="Seccion"value ={Seccion} onChange={this.changeHandler } ></input>
<input type="text" className="form-control" placeholder="Titular Limite" aria-label="Username" aria-describedby="addon-wrapping"  name ="Titular"value ={Titular} onChange={this.changeHandler } ></input>
<input type="text" className="form-control" placeholder="Universidad" aria-label="Username" aria-describedby="addon-wrapping"  name ="Universidad" value ={Universidad} onChange={this.changeHandler } ></input>
 <button type="submit" className="btn btn-light">Crear </button>

  </div>

  </div>
  {cursos} 
 </form>
  </div>

  
















  );
}
 }
export default Cursos