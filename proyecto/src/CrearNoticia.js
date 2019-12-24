import React ,{Component} from 'react';
import logo from './news.svg';
import './App.css';
import axios from 'axios';
import request from 'superagent';

class Crearnoticias extends Component{
 constructor(){
  super();
  this.state={
    id :'',
    Titulo :'',
    Noticia:'',
    Usuario :'',
  noticias :[],
    Admin:[],
    colaborador: [],
      Estudiante :[],
     Catedratico:[]

  }
  }





  Noti0 = async() => {
      
   request.get('http://localhost:3200/Admin')
   .end( (err ,res)=> {
console.log(res);
const Admin =JSON.parse(res.text);
this.setState({

 Admin : Admin
  
}); });
 }
 
 Noti2 = async() => {
  
   request.get('http://localhost:3200/colaborador')
   .end( (err ,res)=> {
console.log(res);
const colaborador =JSON.parse(res.text);
this.setState({

 colaborador : colaborador
  
}); });
 }
 Noti3 = async() => {
  
   request.get('http://localhost:3200/Estudiantes')
   .end( (err ,res)=> {
console.log(res);
const Estudiante =JSON.parse(res.text);
this.setState({

 Estudiante : Estudiante    
}); });
 }
 Noti4 = async() => {
  
   request.get('http://localhost:3200/Catedratico')
   .end( (err ,res)=> {
console.log(res);
const Catedratico =JSON.parse(res.text);
this.setState({

Catedratico : Catedratico   
}); });
 }



  
  
  
  
  
  
  
  
  
  
  Noti = async() => {
    request.get('http://localhost:3200/noticias')
    .end( (err ,res)=> {
console.log(res);
const noticias =JSON.parse(res.text);
this.setState({

  noticias : noticias
   
}); });
  }
  Delete = async (id)=>{
await axios.delete('http://localhost:3200/noticias/'+id);
this.Noti();
  }
  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3200/noticias',this.state) 
    .then(response =>  {
     console.log(response)
    }) ;
  }
  changeHandler =e => {
    this.setState({[e.target.name]:e.target.value})
      }
  


     componentDidMount(){
      this.Noti();
      this.Noti0(); this.Noti3(); this.Noti2();
      this.Noti4();
         }
    
    
         Validar = (e) =>{
    
          let valAdmin =false;
          let valColaborador =false;
          let valEstudiante =false;
          let valCatedratico =false;
          
           var colaborador= this.state.colaborador.map((E2, i)=>{
             if (E2.Nombre=== this.state.Usuario) {
               valColaborador =true;
                  }     });
    
           var Admin = this.state.Admin.map((E, i)=>{
             if (E.Nombre=== this.state.Usuario) {
          valAdmin =true;
             } 
    
        
         
           });
         
           var Estudiante= this.state.Estudiante.map((E3, i)=>{
            if (E3.Nombre=== this.state.Usuario) {
         
         valEstudiante =true;
            } 
    
       
        
          });
        
    
           var Catedratico= this.state.Catedratico.map((E3, i)=>{
             if (E3.Nombre=== this.state.Usuario) {
          
          valCatedratico =true;
             } 
    
        
         
           });
         
            if(valAdmin ===true){ 
              alert('Datos Correctos')
            
            }
            
           else if(valColaborador ===true){
            alert('Datos Correctos')
            
           }
           
            else if(valEstudiante ===true){
              alert('Datos Correctos')
           }
           
         else  if(valCatedratico ===true){
          alert('Datos Correctos')
           }
           else{
             alert("Datos incorrectos")
           }
             
           
          }

  render(){  const a= window.localStorage.getItem('id');
  
    var noticias= this.state.noticias.map((noticia, i)=>{
        return <li key={i }>   

       <div className="card2" >  
       <div className="card-body">
       <span className="badge badge-info">Id</span>
       <h5 className="card-title">  {noticia.  id} </h5>

       <span className="badge badge-info">Titulo</span>
       <h5 className="card-title">  {noticia.  Titulo} </h5>
       <span className="badge badge-info">Noticia</span>
     
       <h5 className="card-title">  {noticia. Noticia} </h5>
       <span className="badge badge-info">Comentario</span>
       <h5 className="card-title"> Usuario: {noticia.  Usuario} </h5>
       
      
        <p className="card-text"> {noticia.  Comentario} </p>
        <button  className="btn btn-light" onClick={()=> this.Delete(noticia.id)}>Eliminar </button>

        </div>
        </div>
        </li>
      
     
        });
        
         const {id,Titulo,Noticia,Usuario,Comentario}=this.state

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

 <h1><span className="badge badge-primary">Crear Noticia </span> 

 </h1>  
 <img src={logo} className="App-logo" alt="logo" />

 <  div className="container-fluid" align="center">
<div className="col-md-4 text-center">
<h3><span className="badge badge-primary">Ingrese Datos </span> 

</h3> 

<input type="text" className="form-control" placeholder="id" aria-label="Username" aria-describedby="addon-wrapping" name="id" value ={id} onChange={this.changeHandler }></input>
<input type="text" className="form-control" placeholder="Titulo" aria-label="Username" aria-describedby="addon-wrapping" name="Titulo" value ={Titulo} onChange={this.changeHandler }></input>
<input type="text" className="form-control" placeholder="Noticia" aria-label="Username" aria-describedby="addon-wrapping"  name ="Noticia"value ={Noticia} onChange={this.changeHandler }></input>
<input type="text" className="form-control" placeholder="Usuario" aria-label="Username" aria-describedby="addon-wrapping"  name ="Usuario"value ={Usuario} onChange={this.changeHandler } ></input>

<textarea className="form-control" aria-label="With textarea"   placeholder="Comentario" name =" Ingrese Comentario"value ={Comentario} onChange={this.changeHandler } ></textarea>
  <button type="submit" className="btn btn-light">Crear </button>
  <button type="submit" onClick={(this.Validar)} className="btn btn-light">Validar</button>
  </div>

  </div>
  {noticias} 
 </form>
  </div>

  
















  );
}
 }
export default Crearnoticias
