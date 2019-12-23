import React ,{Component} from 'react';
import logo from './inventario.svg';
import './App.css';
import axios from 'axios';
import request from 'superagent';

class Bienes extends Component{
 constructor(){
  super();
  this.state={
    id :'',
     codigo :'',
      Nombre  :'',
    Descripcion :'',
    Cantidad :'',
     Persona :'',
     Ubicacion :'',
      Estado :'',

   Inventario:[]
 

  }
  }

  Noti = async() => {
    request.get('http://localhost:3200/Inventario')
    .end( (err ,res)=> {
console.log(res);
const  Inventario =JSON.parse(res.text);
this.setState({

  Inventario : Inventario
   
}); });
  }
  Delete = async (id)=>{
    await axios.delete('http://localhost:3200/Inventario/'+id);
    this.Noti();
      }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3200/Inventario',this.state) 
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
        var Inventario = this.state.Inventario.map((Invent, i)=>{
        return <li key={i }>   
      
      
       <div className="card" >  
       <div className="card-body">
       <span className="badge badge-info">Id </span>
       <h5 className="card-title">  {Invent.id} </h5>
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
       <button className="btn btn-light" onClick={()=> this.Delete(Invent.id)}>Eliminar </button>

        </div>
        </li>
      
     
        });
         const {id,codigo ,Descripcion,Nombre ,Persona,Ubicacion,Estado,Cantidad}=this.state

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

 <h1><span className="badge badge-primary">inventario</span> 

 </h1>  
 <img src={logo} className="App-logo2" alt="logo" />

 <  div className="container-fluid" align="center">
<div className="col-md-4 text-center">
<h3><span className="badge badge-primary">Ingrese Datos </span> 

</h3> 

<input type="text" className="form-control" placeholder="id" aria-label="id" aria-describedby="addon-wrapping" name="id" value ={id} onChange={this.changeHandler }></input>
<input type="text" className="form-control" placeholder="codigo" aria-label="Username" aria-describedby="addon-wrapping" name="codigo" value ={codigo} onChange={this.changeHandler }></input>
<input type="text" className="form-control" placeholder="Nombre" aria-label="Username" aria-describedby="addon-wrapping"  name ="Nombre"value ={Nombre} onChange={this.changeHandler }></input>
<input type="text" className="form-control" placeholder="Descripcion" aria-label="Username" aria-describedby="addon-wrapping"  name ="Descripcion"value ={Descripcion} onChange={this.changeHandler } ></input>
<input type="text" className="form-control" placeholder="Persona" aria-label="Username" aria-describedby="addon-wrapping"  name ="Persona"value ={Persona} onChange={this.changeHandler } ></input>
<input type="text" className="form-control" placeholder="Cantidad Limite" aria-label="Username" aria-describedby="addon-wrapping"  name ="Cantidad"value ={Cantidad} onChange={this.changeHandler } ></input>
<input type="text" className="form-control" placeholder="Ubicacion" aria-label="Username" aria-describedby="addon-wrapping"  name ="Ubicacion" value ={Ubicacion} onChange={this.changeHandler } ></input>
<input type="text" className="form-control" placeholder=" ingrese  Estado" aria-label="Username" aria-describedby="addon-wrapping"  name ="Estado"value ={Estado} onChange={this.changeHandler } ></input>
  <button type="submit" className="btn btn-light">Crear </button>

  </div>

  </div>
  {Inventario} 
 </form>
  </div>

  
















  );
}
 }
export default Bienes 
