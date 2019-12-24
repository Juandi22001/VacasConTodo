import React ,{Component} from 'react';
import logo from './actividades.svg';
import './App.css';
import axios from 'axios';
import request from 'superagent';
import Admin from './Admin';
const a=   window.localStorage.getItem('id')

class  AsignarActividadColaborador extends Component{
 constructor(){
  super();
  this.state={
   id:'',
    NombreUsuario :'',
    Actividad:'',
     idUsuario:a,  
    cursos:[],
  actividad:[],
    Admin:[],
    colaborador: [],
      Estudiante :[],
     Catedratico:[],
     AsignarCurso:[],
     Ingreso:[]
  }
  }


  NotiI = async() => {
    request.get('http://localhost:3200/Ingreso')
    .end( (err ,res)=> {
console.log(res);
const Ingreso =JSON.parse(res.text);
this.setState({

  Ingreso: Ingreso
   
}); });
  }



  NotiA = async() => {
    request.get('http://localhost:3200/Actividades')
    .end( (err ,res)=> {
console.log(res);
const actividad =JSON.parse(res.text);
this.setState({

  actividad: actividad
   
}); });
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
    axios.post('http://localhost:3200/AsignarActividad',this.state) 
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
  this.NotiA();
  this.NotiI();
     }


     Validar = (e) =>{

        let valCurso =false;

        let valAsignacion =false;
let valingreso=false;
      let valAdmin =false;
      let valColaborador =false;
      let valEstudiante =false;
      let valCatedratico =false;
      var actividad= this.state.actividad.map((c, i)=>{
        if (c.id=== this.state.Actividad) {
            valCurso =true; alert("validar Actividad")
               }     });
     
    
           
               var AsignarCurso= this.state.AsignarCurso.map((c, i)=>{
                if (c.Nombre=== this.state.Curso) {
                    valCurso =true;
                       }     });
             
       var colaborador= this.state.colaborador.map((E2, i)=>{
         if (E2.Nombre=== this.state.NombreUsuario) {
           valColaborador =true;
              }     });

       var Estudiante = this.state.Estudiante.map((E, i)=>{
         if (E.Nombre=== this.state.NombreUsuario) {
      valAdmin =true;
    alert("validar nombre Usuario")    
    
    } 

});
    var Ingreso= this.state.Ingreso.map((E, i)=>{
        if (E.Nombre=== this.state.NombreUsuario) {
     valingreso =true;
   alert("validar pago")    
   
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
     
        if(valCurso ===true &&  valingreso===true ){ 
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

    let ADMIN ;

    let ADMIN1 ;
    
    let ADMIN2 ;
    
    let ADMIN3 ;
    
    let ADMIN4 ;
    let ADMIN5 ;
           
    var actividad= this.state.actividad.map((c, i)=>{
        return <li key={i }>   
      
      
       <div className="card" >  
       <div className="card-body">
       <span className="badge badge-info">ID</span>
       <h5 className="card-title">  {c.id} </h5>
       <span className="badge badge-info">Expositor</span>
       <h5 className="card-title">  {c.Expositor} </h5>
       <span className="badge badge-info">Lugar</span>
       <h5 className="card-title">  {c.Lugar} </h5>
    
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
                
  
  
  
     
        
         const {id,NombreUsuario ,Actividad,idUsuario}=this.state

        return (

<div>
  <form on onSubmit={this.submitHandler}>
<nav className="navbar navbar-dark bg-primary">
<a className="navbar-brand" href="http://localhost:3000/AsignarCursosUsuario" >Cursos</a>

<a className="navbar-brand" href="http://localhost:3000/PerfilEstudiante" >Perfil</a>

<a className="navbar-brand" href="http://localhost:3000/AsignarActividadUsuario" >Actividad</a>
<a className="navbar-brand" href="http://localhost:3000/ComentarNoticia" >Noticia</a>


<a className="navbar-brand" href="http://localhost:3000/" > Salir</a>

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

<input type="text" className="form-control" placeholder="id Actividad" aria-label="Username" aria-describedby="addon-wrapping"  name ="Actividad"value ={Actividad} onChange={this.changeHandler } ></input>
 <button type="submit" className="btn btn-light">Crear </button>
 <button type="submit" onClick={(this.Validar)} className="btn btn-light">Validar</button>
  </div>

  </div>
  {AsignarCurso} 
 </form>
 <h1><span className="badge badge-primary">Actividades</span> 
{actividad}
</h1>  
  </div>

  
















  );
}
 }
export default AsignarActividadColaborador