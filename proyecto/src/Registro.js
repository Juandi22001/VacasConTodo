import React ,{Component} from 'react';
import logo from './registro.svg';
import './App.css';
import axios from 'axios';
import request from 'superagent';

class Registro extends Component{
 constructor(){
  super();
  this.state={
    id :'',
    Carne :'',
    Nombre :'',
    Fecha : '',
    Telefono :'',
    Correo :'',
    Universidad :'',
    Nacionalidad :'',
    Nickname:'',
    Contraseña:'',
  
    Estudiante:[]
 

  }
  }
  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3200/Estudiantes',this.state) 
    .then(response =>  {
     console.log(response)
    }) ;
  }
  changeHandler =e => {
    this.setState({[e.target.name]:e.target.value})
      }
  componentDidMount(){
    request.get('http://localhost:3200/Estudiantes')
    .end( (err ,res)=> {
console.log(res);
const Estudiante =JSON.parse(res.text);
this.setState({

  Estudiante : Estudiante
   
}); });
     }
  render(){ 

  




      
  
         const {id,Carne,Nombre,Fecha,Telefono,Correo,Universidad,Nacionalidad,Nickname,Contraseña}=this.state

        return (
    
<div>
  <form on onSubmit={this.submitHandler}>
<nav className="navbar navbar-dark bg-primary">

<a className="navbar-brand" href="http://localhost:3000/Registro" >Registro Estudiante</a>

<a className="navbar-brand" href="http://localhost:3000/Registro2" >Registro Catedratico</a>

<a className="navbar-brand" href="http://localhost:3000/VerActividades" > Actividades</a>

<a className="navbar-brand" href="http://localhost:3000/noticias" > Noticias</a>
<a className="navbar-brand" href="http://localhost:3000/" >Login</a>


</nav>

 <h1><span className="badge badge-primary">Registrar Estudiante</span> 

 </h1>  
 <img src={logo} className="App-logo2" alt="logo" />

 <  div className="container-fluid" align="center">
<div className="col-md-4 text-center">
<h3><span className="badge badge-primary">Ingrese Datos </span> 

</h3> 

<input type="text" className="form-control" placeholder="id" aria-label="Username" aria-describedby="addon-wrapping" name="id" value ={id} onChange={this.changeHandler }></input>
<input type="text" className="form-control" placeholder="Carne" aria-label="Username" aria-describedby="addon-wrapping" name="Carne" value ={Carne} onChange={this.changeHandler }></input>
<input type="text" className="form-control" placeholder="Nombre" aria-label="Username" aria-describedby="addon-wrapping"  name ="Nombre"value ={Nombre} onChange={this.changeHandler }></input>
<input type="date" className="form-control" placeholder="Fecha" aria-label="Username" aria-describedby="addon-wrapping"  name ="Fecha"value ={Fecha} onChange={this.changeHandler }></input>
<input type="text" className="form-control" placeholder="Telefono" aria-label="Username" aria-describedby="addon-wrapping"  name ="Telefono"value ={Telefono} onChange={this.changeHandler } ></input>
<input type="text" className="form-control" placeholder="Correo" aria-label="Username" aria-describedby="addon-wrapping"  name ="Correo"value ={Correo} onChange={this.changeHandler } ></input>
<input type="text" className="form-control" placeholder="Universidad" aria-label="Username" aria-describedby="addon-wrapping"  name ="Universidad"value ={Universidad} onChange={this.changeHandler } ></input>
<input type="text" className="form-control" placeholder="Nacionalidad" aria-label="Username" aria-describedby="addon-wrapping"  name ="Nacionalidad"value ={Nacionalidad} onChange={this.changeHandler } ></input>
<input type="text" className="form-control" placeholder="Nickname" aria-label="Username" aria-describedby="addon-wrapping"  name ="Nickname"value ={Nickname} onChange={this.changeHandler } ></input>
<input type="text" className="form-control" placeholder="Contraseña" aria-label="Username" aria-describedby="addon-wrapping"  name ="Contraseña"value ={Contraseña} onChange={this.changeHandler } ></input>

<button type="submit" className="btn btn-light">Crear </button>


  </div>

  </div>
 
 </form>

  </div>

  
















  );
}
 }
export default Registro
