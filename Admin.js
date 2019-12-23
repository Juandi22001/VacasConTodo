import React ,{Component} from 'react';
import logo from './admin.svg';
import './App.css';
import axios from 'axios';
import request from 'superagent';

class Admin extends Component{
 constructor(){
  super();
  this.state={
    id :'',

    Nombre :'',
    Fecha : '',
    Telefono :'',
    Correo :'',
   
    Nickname:'',
    Contraseña:'',
    Puesto :'',
    Tipo:'Admin',
Admin:[]
  

  }
  }

  Noti = async() => {
   
    request.get('http://localhost:3200/Admin')
    .end( (err ,res)=> {
console.log(res);
const Admin =JSON.parse(res.text);
this.setState({

  Admin : Admin
   
}); });
  }
  Delete = async (id)=>{
await axios.delete('http://localhost:3200/Admin/'+id);
this.Noti();
  }
  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3200/Admin',this.state) 
    .then(response =>  {
     console.log(response)
    }) ;
  }
  changeHandler =e => {
    this.setState({[e.target.name]:e.target.value})
      }
  componentDidMount(){this.Noti();
     }
  render(){ 

    var Admin = this.state.Admin.map((E, i)=>{
        return <li key={i }>   
     
  
       <table className="table">
  <thead className="thead-secondary">
    <tr>
 
      <th scope="col">id</th>

      <th scope="col">Nombre</th>
      <th scope="col">Fecha</th>
    
      <th scope="col">Correo</th>
  
      <th scope="col">Nickname</th>
      <th scope="col">´Puesto </th>

     
      

    </tr>
  </thead>
  <tbody>
    <tr>
  
      <td>{E.id}</td>

      <td>{E.Nombre}</td>
      <td>{E.Fecha}</td>
  
      <td>{E.Correo}</td>     
    
 
      <td>{E.Nickname}</td>
      <td>{E.Puesto}</td>

   
    </tr>
   
  </tbody>
</table>
<button  className="btn btn-light" onClick={()=> this.Delete(E.id)}>Eliminar </button>





      
        </li>
      
     
        });
  
         const {id,Nombre,Fecha,Telefono,Correo,Nickname,Contraseña,Puesto}=this.state

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

 <h1><span className="badge badge-primary">Crear Admin </span> 

 </h1>  
 <img src={logo} className="App-logo2" alt="logo" />

 <  div className="container-fluid" align="center">
<div className="col-md-4 text-center">
<h3><span className="badge badge-primary">Ingrese Datos </span> 

</h3> 

<input type="text" className="form-control" placeholder="id" aria-label="Username" aria-describedby="addon-wrapping" name="id" value ={id} onChange={this.changeHandler }></input>

<input type="text" className="form-control" placeholder="Nombre" aria-label="Username" aria-describedby="addon-wrapping"  name ="Nombre"value ={Nombre} onChange={this.changeHandler }></input>
<input type="date" className="form-control" placeholder="Fecha" aria-label="Username" aria-describedby="addon-wrapping"  name ="Fecha"value ={Fecha} onChange={this.changeHandler }></input>
<input type="text" className="form-control" placeholder="Telefono" aria-label="Username" aria-describedby="addon-wrapping"  name ="Telefono"value ={Telefono} onChange={this.changeHandler } ></input>
<input type="text" className="form-control" placeholder="Correo" aria-label="Username" aria-describedby="addon-wrapping"  name ="Correo"value ={Correo} onChange={this.changeHandler } ></input>

<input type="text" className="form-control" placeholder="Nickname" aria-label="Username" aria-describedby="addon-wrapping"  name ="Nickname"value ={Nickname} onChange={this.changeHandler } ></input>
<input type="text" className="form-control" placeholder="Contraseña" aria-label="Username" aria-describedby="addon-wrapping"  name ="Contraseña"value ={Contraseña} onChange={this.changeHandler } ></input>
<input type="text" className="form-control" placeholder="Puesto" aria-label="Username" aria-describedby="addon-wrapping"  name ="Puesto"value ={Puesto} onChange={this.changeHandler } ></input>

<button type="submit" className="btn btn-light">Crear </button>


  </div>

  </div>
  {Admin}
 </form>

  </div>

  
















  );
}
 }
export default Admin
