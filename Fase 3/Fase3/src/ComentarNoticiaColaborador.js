import React ,{Component} from 'react';
import logo from './news.svg'
import './App.css';
import axios from 'axios';
import request from 'superagent';
const a=   window.localStorage.getItem('id')

var ADMIN ;

var ADMIN1 ;

let ADMIN2 ;
class ComentarNoticiaColaborador extends Component{
  constructor(){
    super();
    this.state={
   
      Noticia:'',
      Comentario:'',
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
      axios.post('http://localhost:3200/Comentario',this.state) 
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
  
    render(){  
      var Estudiante = this.state.Estudiante .map((E, i)=>{
        if (E.id=== a) {
      ADMIN=E.Nombre;
    
        }           });
          
        var noticias2= this.state.noticias.map((noticia, i)=>{
          return (  <option key={noticia.Titulo}  > {noticia.Titulo}</option>


  
          
          );
       
          });
          
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
      
      <a className="navbar-brand" href="http://localhost:3000/AsignarCursosUsuario" >Cursos</a>

<a className="navbar-brand" href="http://localhost:3000/PerfilEstudiante" >Perfil</a>

<a className="navbar-brand" href="http://localhost:3000/AsignarActividadUsuario" >Actividad</a>
<a className="navbar-brand" href="http://localhost:3000/ComentarNoticia" >Noticia</a>

      </nav>
      
 
      <h1><span className="badge badge-primary">Comentar Noticia </span> 
      
      </h1>  
      <img src={logo} className="App-logo" alt="logo" />
     
      <  div className="container-fluid" align="center">
     <div className="col-md-4 text-center">
     <h3><span className="badge badge-primary">Ingrese Datos </span> 
     
     </h3> 

     <div className="form-group">
   
   <h3><span className="badge badge-info">Noticias</span>

   </h3>
  
   <select class="selectpicker" name="Noticia" defaultValue={Noticia} onChange={this.changeHandler} >

     {noticias2}
   </select>
 </div>
      <input type="text" className="form-control" placeholder={ADMIN} aria-label="Username" aria-describedby="addon-wrapping"  name ="Usuario"value ={Usuario} onChange={this.changeHandler } ></input>
      <input type="text" className="form-control" placeholder="Comentario" aria-label="Username" aria-describedby="addon-wrapping"  name ="Comentario"value ={Comentario} onChange={this.changeHandler } ></input>
   
        <button type="submit" className="btn btn-light">Crear </button>
      </div>
     
       </div>
       {noticias} 
      </form>
       </div>
     
       
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
       );
     }
      }
export default ComentarNoticiaColaborador
