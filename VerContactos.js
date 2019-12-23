import React ,{Component} from 'react';
import logo from './Contacto.svg'
import './App.css';
import axios from 'axios';
import request from 'superagent';

class VerContactos extends Component{
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
       request.get('http://localhost:3200/Contactos')
       .end( (err ,res)=> {
   console.log(res);
   const Contactos =JSON.parse(res.text);
   this.setState({
   
     Contactos : Contactos
      
   }); });
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
   
   
       </div>
       </div>
       </li>
           });

           return (
       
   <div>
     <form on onSubmit={this.submitHandler}>
   <nav className="navbar navbar-dark bg-primary">
   
   <a className="navbar-brand" href="http://localhost:3000/Actividades" >Actividades</a>
<a className="navbar-brand" href="http://localhost:3000/VerContactos" >Contactos</a>
<a className="navbar-brand" href="http://localhost:3000/VerNoticia" >Noticia</a>

<a className="navbar-brand" href="http://localhost:3000/Perfil" >Perfil</a>

<a className="navbar-brand" href="http://localhost:3000/Tareas" >Tareas</a>

<a className="navbar-brand" href="http://localhost:3000/VerCursos" >Cursos</a>
   
   </nav>
   
    <h1><span className="badge badge-primary">Ver Contactos </span> 
   
    </h1>  
    <img src={logo} className="App-logo3" alt="logo" />
   
 
     {Contactos} 
    </form>
     </div>
   
     
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
     );
   }
    }
export default VerContactos
