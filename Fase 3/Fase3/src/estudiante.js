import React ,{Component} from 'react';
import logo from './registro.svg';
import './App.css';
import axios from 'axios';
import request from 'superagent';

class Estudiante extends Component{
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

  Noti = async() => {
    request.get('http://localhost:3200/Estudiantes')
    .end( (err ,res)=> {
console.log(res);
const Estudiante =JSON.parse(res.text);
this.setState({

  Estudiante : Estudiante
   
}); });
   }
  Delete = async (id)=>{
await axios.delete('http://localhost:3200/Estudiantes/'+id);
this.Noti();
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
   this.Noti();  }
  render(){ 

    var Estudiante = this.state.Estudiante.map((E, i)=>{
        return <li key={i }>   
     
  
       <table className="table">
  <thead className="thead-secondary">
    <tr>
 
      <th scope="col">id</th>
      <th scope="col">Carne</th>
      <th scope="col">Nombre</th>
      <th scope="col">Fecha</th>
      <th scope="col">Telefono</th>
      <th scope="col">Correo</th>
      <th scope="col">Universidad</th>
      <th scope="col">Nacionalidad</th>
      <th scope="col">Nickname</th>
     

    </tr>
  </thead>
  <tbody>
    <tr>
  
      <td>{E.id}</td>
      <td>{E.Carne}</td>
      <td>{E.Nombre}</td>
      <td>{E.Fecha}</td>
      <td>{E.Telefono}</td>
      <td>{E.Correo}</td>     
    
      <td>{E.Universidad}</td>
      <td>{E.Nacionalidad}</td>
      <td>{E.Nickname}</td>
    </tr>
    <button  className="btn btn-light" onClick={()=> this.Delete(E.id)}>Eliminar </button>

  </tbody>
</table>





      
        </li>
      
     
        });
  
         const {id,Carne,Nombre,Fecha,Telefono,Correo,Universidad,Nacionalidad,Nickname,Contraseña}=this.state

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

 <h1><span className="badge badge-primary">Crear Estudiante</span> 

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
  {Estudiante}
 </form>

  </div>

  
















  );
}
 }
export default Estudiante
