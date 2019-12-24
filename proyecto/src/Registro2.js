import React ,{Component} from 'react';
import logo from './profesor.svg';
import './App.css';
import axios from 'axios';
import request from 'superagent';

class Registro2 extends Component{
 constructor(){
  super();
  this.state={
    id :'',
    Registro :'',
    Nombre :'',
    Fecha : '',
    Correo :'',
    Universidad :'',
    Nickname:'',
    Contraseña:'',
  
Catedratico:[]
 

  }
  }
  Noti = async() => { request.get('http://localhost:3200/Catedratico')
  .end( (err ,res)=> {
console.log(res);
const Catedratico =JSON.parse(res.text);
this.setState({

Catedratico: Catedratico
}); });
 
  }
  Delete = async (id)=>{
await axios.delete('http://localhost:3200/Catedratico/'+id);
this.Noti();
  }
  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3200/Catedratico',this.state) 
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

    var Catedratico = this.state.Catedratico.map((E, i)=>{
        return <li key={E.id}>   
     
  
       <table className="table">
  <thead className="thead-secondary">
    <tr>
 
      <th scope="col">id</th>
      <th scope="col">Registro</th>
      <th scope="col">Nombre</th>
      <th scope="col">Fecha</th>
     
      <th scope="col">Correo</th>
      <th scope="col">Universidad</th>
    
      <th scope="col">Nickname</th>
     

    </tr>
  </thead>
  <tbody>
    <tr>
  
      <td>{E.id}</td>
      <td>{E.Registro}</td>
      <td>{E.Nombre}</td>
      <td>{E.Fecha}</td>
     
      <td>{E.Correo}</td>     
    
      <td>{E.Universidad}</td>
    
      <td>{E.Nickname}</td>
    </tr>
    <button  className="btn btn-light" onClick={()=> this.Delete(E.id)}>Eliminar </button>

  </tbody>
</table>





      
        </li>
      
     
        });
  
         const {id,Registro,Nombre,Fecha,Correo,Universidad,Nickname,Contraseña}=this.state

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

 <h1><span className="badge badge-primary">Crear Catedratico</span> 

 </h1>  
 <img src={logo} className="App-logo2" alt="logo" />

 <  div className="container-fluid" align="center">
<div className="col-md-4 text-center">
<h3><span className="badge badge-primary">Ingrese Datos </span> 

</h3> 

<input type="text" className="form-control" placeholder="id" aria-label="Username" aria-describedby="addon-wrapping" name="id" value ={id} onChange={this.changeHandler }></input>
<input type="text" className="form-control" placeholder="Registro" aria-label="Username" aria-describedby="addon-wrapping" name="Registro" value ={Registro} onChange={this.changeHandler }></input>
<input type="text" className="form-control" placeholder="Nombre" aria-label="Username" aria-describedby="addon-wrapping"  name ="Nombre"value ={Nombre} onChange={this.changeHandler }></input>
<input type="date" className="form-control" placeholder="Fecha" aria-label="Username" aria-describedby="addon-wrapping"  name ="Fecha"value ={Fecha} onChange={this.changeHandler }></input>
<input type="text" className="form-control" placeholder="Correo" aria-label="Username" aria-describedby="addon-wrapping"  name ="Correo"value ={Correo} onChange={this.changeHandler } ></input>
<input type="text" className="form-control" placeholder="Universidad" aria-label="Username" aria-describedby="addon-wrapping"  name ="Universidad"value ={Universidad} onChange={this.changeHandler } ></input>
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
export default Registro2