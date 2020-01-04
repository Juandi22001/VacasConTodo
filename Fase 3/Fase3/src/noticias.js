import React ,{Component} from 'react';
import logo from './news.svg'
import './App.css';
import axios from 'axios';
import request from 'superagent';

class noticias extends Component{
 constructor(){
  super();
  this.state={
    P:'',
    noticias:[],
  Comentario:[]
  }
  }



         
        
  NotiComentario = async() => {
    request.get('http://localhost:3200/Comentario')
    .end( (err ,res)=> {
console.log(res);
const Comentario =JSON.parse(res.text);
this.setState({

  Comentario : Comentario
   
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
  componentDidMount(){
   this.Noti();
  this.NotiComentario();  }
  
  changeHandler =e => {
    this.setState({[e.target.name]:e.target.value})
      }
  
  
     render(){



      var noticias2= this.state.Comentario.map((noticia, i)=>{
        return (  <option key={noticia.Noticia}  > {noticia.Noticia}</option>

  


        
        );
     
        });
  

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
    var noticias3= this.state.Comentario.map((noticia, i)=>{
    if(noticia.Noticia===this.state.P){    return ( 
      
      <div className="card" >  
      <div className="card-body">
      <span className="badge badge-info">Noticia</span>
    
      <h5 className="card-title">  {noticia.  Noticia} </h5>
      <span className="badge badge-info">Comentario</span>
      <h5 className="card-title"> Usuario: {noticia.  Usuario} </h5>
      
     
       <p className="card-text"> {noticia.Comentario} </p>
       </div>
       </div>

      
      );}
   
      });
 
    const {P}=this.state
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
 <h1>


<span className="badge badge-info">Noticias</span>  </h1> 
 <img src={logo} className="App-logo" alt="logo" / >

{noticias} 



<div className="form-group">

<h3><span className="badge badge-info">Ver Comentarios </span>

</h3>

<select class="selectpicker" name="P" defaultValue={P} onChange={this.changeHandler} >

  {noticias2}
</select>
<input type="text" className="form-control" placeholder="." aria-label="Username" aria-describedby="addon-wrapping" name="P" value={P} onChange={this.changeHandler} ></input>
</div>
</form>
  {noticias3}
  </div>
  
















  );
}
 }
export default noticias
