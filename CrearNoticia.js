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
  
    noticias:[]
 

  }
  } Noti = async() => {
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
     }
  render(){ 
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
<a className="navbar-brand" href="http://localhost:3000/" > Salir</a>

<a className="navbar-brand" href="http://localhost:3000/Contactos" > Contactos</a>
<a className="navbar-brand" href="http://localhost:3000/Tareas" > Tareas</a>

<a className="navbar-brand" href="http://localhost:3000/Perfil" > Perfil</a>
<a className="navbar-brand" href="http://localhost:3000/Cursos" > Cursos</a>
<a className="navbar-brand" href="http://localhost:3000/Presupuesto" > Presupuesto</a>


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

  </div>

  </div>
  {noticias} 
 </form>
  </div>

  
















  );
}
 }
export default Crearnoticias
