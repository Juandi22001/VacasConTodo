import React ,{Component} from 'react';
import logo from './news.svg'
import './App.css';
import axios from 'axios';
import request from 'superagent';

class noticias extends Component{
 constructor(){
  super();
  this.state={
  noticias:[]
  }
  }
  componentDidMount(){
    request.get('http://localhost:3200/noticias')
    .end( (err ,res)=> {
console.log(res);
const noticias =JSON.parse(res.text);
this.setState({

  noticias : noticias
   
}); });
     }
  render(){
    var noticias= this.state.noticias.map((noticia, i)=>{
    return <li key={i }>   
  
  
   <div className="card" >  
   <div className="card-body">
   <span className="badge badge-info">Titulo</span>
   <h5 className="card-title">  {noticia.  Titulo} </h5>
   <span className="badge badge-info">Noticia</span>
 
   <h5 className="card-title">  {noticia.  Noticia} </h5>
   <span className="badge badge-info">Comentario</span>
   <h5 className="card-title"> Usuario: {noticia.  Usuario} </h5>
   
  
    <p className="card-text"> {noticia.  Comentario} </p>
    </div>
    </div>
    </li>
  
 
    });
    return (
    
<div>
<nav className="navbar navbar-dark bg-primary">

<a className="navbar-brand" href="http://localhost:3000/Registro" >Registro Estudiante</a>

<a className="navbar-brand" href="http://localhost:3000/Registro2" >Registro Catedratico</a>

<a className="navbar-brand" href="http://localhost:3000/VerActividades" > Actividades</a>

<a className="navbar-brand" href="http://localhost:3000/noticias" > Noticias</a>
<a className="navbar-brand" href="http://localhost:3000/" >Login</a>


</nav> 
 <h1>


<span className="badge badge-info">Noticias</span>  </h1> 
 <img src={logo} className="App-logo" alt="logo" / >

{noticias} 
  </div>
  
















  );
}
 }
export default noticias
