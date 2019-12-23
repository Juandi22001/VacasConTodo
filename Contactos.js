import React ,{Component} from 'react';
import logo from './Contacto.svg'
import './App.css';
import axios from 'axios';
import request from 'superagent';

class Contactos extends Component{
    constructor(){
     super();
     this.state={
        id :'', 
        Nombre:'',
    Telefono:'',
       Correo :'',
       Direccion :'',
       Rol :'',
       Oportunidades :'',
   Encargado:'',
       Contactos:[]
    
   
     }
     }
     Noti = async() => {
      request.get('http://localhost:3200/Contactos')
      .end( (err ,res)=> {
  console.log(res);
  const Contactos =JSON.parse(res.text);
  this.setState({
  
    Contactos : Contactos
     
  }); });
       
    }
     Delete = async (id)=>{
      await axios.delete('http://localhost:3200/Contactos/'+id);
      this.Noti();
        }
     submitHandler = e => {
       e.preventDefault()
       console.log(this.state)
       axios.post('http://localhost:3200/Contactos',this.state) 
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
   
         
         var  Contactos= this.state.Contactos.map((Contact, i)=>{
       return <li key={i }>   
     
     
      <div className="card" >  
      <div className="card-body">
      <span className="badge badge-info">Id</span>
      <h5 className="card-title">  {Contact.id} </h5>
   
      <span className="badge badge-info"> Nombre</span>
      <h5 className="card-title">  {Contact.Nombre} </h5>
   
      <span className="badge badge-info"> Telefono</span>
      <h5 className="card-title">  {Contact.Telefono} </h5>
   
   
      <span className="badge badge-info"> @Correo</span>
      <h5 className="card-title">  {Contact.Correo} </h5>
   
   
      <span className="badge badge-info">  Direccion</span>
      <h5 className="card-title">  {Contact.Direccion} </h5>
   
   
      <span className="badge badge-info"> Rol</span>
      <h5 className="card-title">  {Contact.Rol} </h5>
   
      <span className="badge badge-info">  Oportunidades</span>
      <h5 className="card-title">  {Contact.Oportunidades} </h5>
   
   
      <span className="badge badge-info"> Encargado</span>
      <h5 className="card-title">  {Contact.Encargado} </h5>
      <button  className="btn btn-light" onClick={()=> this.Delete(Contact.id)}>Eliminar </button>

   
       </div>
       </div>
       </li>
           });
           
            const {id,Nombre ,Oportunidades,Telefono ,Correo,Rol,Encargado,Direccion}=this.state
   
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
   
    <h1><span className="badge badge-primary">Crear  Contacto</span> 
   
    </h1>  
    <img src={logo} className="App-logo3" alt="logo" />
   
    <  div className="container-fluid" align="center">
   <div className="col-md-4 text-center">
   <h3><span className="badge badge-primary">Ingrese Datos </span> 
   
   </h3> 
   
   <input type="text" className="form-control" placeholder="id" aria-label="Username" aria-describedby="addon-wrapping" name="id" value ={id} onChange={this.changeHandler }></input>
   <input type="text" className="form-control" placeholder="Nombre" aria-label="Username" aria-describedby="addon-wrapping" name="Nombre" value ={Nombre} onChange={this.changeHandler }></input>
   <input type="text" className="form-control" placeholder="Telefono" aria-label="Username" aria-describedby="addon-wrapping"  name ="Telefono"value ={Telefono} onChange={this.changeHandler }></input>
   <input type="text" className="form-control" placeholder="Oportunidades" aria-label="Username" aria-describedby="addon-wrapping"  name ="Oportunidades"value ={Oportunidades} onChange={this.changeHandler } ></input>
   <input type="text" className="form-control" placeholder="Correo" aria-label="Username" aria-describedby="addon-wrapping"  name ="Correo"value ={Correo} onChange={this.changeHandler } ></input>
   <input type="text" className="form-control" placeholder="Direccion Limite" aria-label="Username" aria-describedby="addon-wrapping"  name ="Direccion"value ={Direccion} onChange={this.changeHandler } ></input>
   <input type="text" className="form-control" placeholder="Rol" aria-label="Username" aria-describedby="addon-wrapping"  name ="Rol" value ={Rol} onChange={this.changeHandler } ></input>
   <input type="text" className="form-control" placeholder=" ingrese Encargado" aria-label="Username" aria-describedby="addon-wrapping"  name ="Encargado"value ={Encargado} onChange={this.changeHandler } ></input>
     <button type="submit" className="btn btn-light">Crear </button>
   
     </div>
   
     </div>
     {Contactos} 
    </form>
     </div>
   
     
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
     );
   }
    }
export default Contactos
