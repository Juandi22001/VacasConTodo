import React ,{Component} from 'react';
import logo from './cursos.svg';
import './App.css';
import axios from 'axios';
import request from 'superagent';
import Admin from './Admin';
const a=   window.localStorage.getItem('id')

class AsignarCursoColaborador extends Component{
 constructor(){
  super();
  this.state={
   id:'',
    NombreUsuario :'',
    Curso:'',
     idUsuario:a,  
    cursos:[],
 
    Admin:[],
    colaborador: [],
      Estudiante :[],
     Catedratico:[],
     AsignarCurso:[]
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
 
 Noti01 = async() => {
      
    request.get('http://localhost:3200/AsignarCurso')
    .end( (err ,res)=> {
 console.log(res);
 const  AsignarCurso =JSON.parse(res.text);
 this.setState({
 
  AsignarCurso :  AsignarCurso
   
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
    request.get('http://localhost:3200/cursos')
    .end( (err ,res)=> {
console.log(res);
const cursos =JSON.parse(res.text);
this.setState({

  cursos: cursos
   
}); });
  }
  Delete = async (id)=>{
await axios.delete('http://localhost:3200/AsignarCurso/'+id);
this.Noti01();
  }
  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3200/AsignarCurso',this.state) 
    .then(response =>  {
     console.log(response)
    }) ;
  }
  changeHandler =e => {
    this.setState({[e.target.name]:e.target.value})
      }
  componentDidMount(){
  this.Noti();
  this.Noti0();
  this.Noti01(); this.Noti3(); this.Noti2();
  this.Noti4();
     }


     Validar = (e) =>{

        let valCurso =false;

        let valAsignacion =false;

      let valAdmin =false;
      let valColaborador =false;
      let valEstudiante =false;
      let valCatedratico =false;
         
      var cursos= this.state.cursos.map((c, i)=>{
        if (c.Nombre=== this.state.Curso) {
            valCurso =true;
               }     });
           
               var AsignarCurso= this.state.AsignarCurso.map((c, i)=>{
                if (c.Nombre=== this.state.Curso) {
                    valCurso =true;
                       }     });
             
       var colaborador= this.state.colaborador.map((E2, i)=>{
         if (E2.Nombre=== this.state.NombreUsuario) {
           valColaborador =true;
              }     });

       var Admin = this.state.Admin.map((E, i)=>{
         if (E.Nombre=== this.state.NombreUsuario) {
      valAdmin =true;
         } 

    
     
       });
     
       var Estudiante= this.state.Estudiante.map((E3, i)=>{
        if (E3.Nombre=== this.state.NombreUsuario) {
     
     valEstudiante =true;
        } 

   
    
      });
    

       var Catedratico= this.state.Catedratico.map((E3, i)=>{
         if (E3.Nombre=== this.state.Titular) {
      
      valCatedratico =true;
         } 

    
     
       });
     
        if(valCurso ===true){ 
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


    var A_curso = this.state.cursos.map((c, i) => {
      return (


        <option key={c.Nombre}  > {c.Nombre}</option>






      );
    });



    let ADMIN ;

    let ADMIN1 ;
    
    let ADMIN2 ;
    
    let ADMIN3 ;
    
    let ADMIN4 ;
    let ADMIN5 ;
    var cursos= this.state.cursos.map((c, i)=>{
      return <li key={i }>   
    
    
     <div className="card" >  
     <div className="card-body">
     <span className="badge badge-info">Nombre</span>
     <h5 className="card-title">  {c.Nombre} </h5>
     <span className="badge badge-info">Codigo</span>
     <h5 className="card-title">  {c.Codigo} </h5>
     <span className="badge badge-info">Titular</span>
     <h5 className="card-title">  {c.Titular} </h5>
     <span className="badge badge-info">Seccion</span>
     <h5 className="card-title">  {c.Seccion} </h5>
     <span className="badge badge-info">Universidad</span>
     <h5 className="card-title">  {c.Universidad} </h5>

  
      </div>
      </div>
      </li>
          });
    var Estudiante= this.state.Estudiante.map((E3, i)=>{
        if (E3.id=== a) {
  
  ADMIN =E3.Nombre
     }});


      var AsignarCurso= this.state.AsignarCurso.map((c, i)=>{
        if (c.NombreUsuario=== ADMIN) {
     
         
        }                 
    });
        var Estudiante= this.state.Estudiante.map((E3, i)=>{
            if (E3.id=== a) {
         

        }});
                
  
  
  
     
        
         const {id,NombreUsuario ,Curso,idUsuario}=this.state

        return (

<div>
  <form on onSubmit={this.submitHandler}>
<nav className="navbar navbar-dark bg-primary">

<a className="navbar-brand" href="http://localhost:3000/AsignarCursosUsuario" >Cursos</a>

<a className="navbar-brand" href="http://localhost:3000/PerfilEstudiante" >Perfil</a>

<a className="navbar-brand" href="http://localhost:3000/AsignarActividadUsuario" >Actividad</a>
<a className="navbar-brand" href="http://localhost:3000/ComentarNoticia" >Noticia</a>



</nav>

 <h1><span className="badge badge-primary">AsignarCursos</span> 

 </h1>  
 <h2><span className="badge badge-primary">Usuario :{ADMIN}</span> 

 </h2>  
 <img src={logo} className="App-logo3" alt="logo" />

 <  div className="container-fluid" align="center">
<div className="col-md-4 text-center">
<h3><span className="badge badge-primary">Ingrese Datos </span> 

</h3> 

<input type="text" className="form-control" placeholder="id" aria-label="Username" aria-describedby="addon-wrapping" name="id" value ={id} onChange={this.changeHandler }></input>
<input type="text" className="form-control" placeholder={ADMIN} aria-label="Username" aria-describedby="addon-wrapping" name="NombreUsuario" value ={NombreUsuario} onChange={this.changeHandler }></input>
<input type="text" className="form-control" placeholder={a} aria-label="Username" aria-describedby="addon-wrapping" name="idUsuario" value ={idUsuario} onChange={this.changeHandler }></input>

<div className="form-group">

<h3><span className="badge badge-info">Cursos Disponibles </span>

</h3>

<select class="selectpicker" name="Curso" defaultValue={Curso} onChange={this.changeHandler} >

  {A_curso}
</select>
</div>






 <button type="submit" className="btn btn-light">Crear </button>
 <button type="submit" onClick={(this.Validar)} className="btn btn-light">Validar</button>
  </div>

  </div>
  {AsignarCurso} 
 </form>
 <h1><span className="badge badge-primary">Cursos</span> 
{cursos}
</h1>  
  </div>

  
















  );
}
 }
export default AsignarCursoColaborador