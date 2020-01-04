import React, { Component } from 'react';
import logo from './user.svg';
import './App.css';
import axios from 'axios';
import request from 'superagent';
const a=   window.localStorage.getItem('id')

var ADMIN ;

var ADMIN1 ;

let ADMIN2 ;

let ADMIN3 ;

let ADMIN4 ;
let ADMIN5 ;

let ADMIN12 ;
let ADMIN7 ;
let ADMIN8 ;
let ADMIN9 ;
let ADMIN10 ;
let ADMIN11 ;
let ADMIN6 ;
let valAdmin =false;
let valColaborador =false;
let valEstudiante =false;
let valCatedratico =false;
class  ReporteUsuario extends Component {
    constructor(){
        super();
        this.state={
        NombreUsuario:'',
       actividad:[],  
      Admin:[],
      colaborador: [],
        Estudiante :[]
      , Catedratico:[],
      AsignarCurso:[], CursoUsuario:[],
      AsignarActividad:[]
     
           
        }
        }
   
   
   
   
        NotiA2 = async() => {
          request.get('http://localhost:3200/AsignarActividad')
          .end( (err ,res)=> {
      console.log(res);
      const AsignarActividad  =JSON.parse(res.text);
      this.setState({
      
        AsignarActividad: AsignarActividad
         
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
      
        Noti33 = async() => {
         
          request.get('http://localhost:3200/CursoUsuario')
          .end( (err ,res)=> {
      console.log(res);
      const CursoUsuario =JSON.parse(res.text);
      this.setState({
      
        CursoUsuario : CursoUsuario
         
      }); });
        }
        Delete2 = async (id)=>{
          await axios.delete('http://localhost:3200/CursoUsuario');
          this.Noti33();
            }
        Noti = async() => {
         
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
  
        Delete = async (id)=>{
     axios.delete('http://localhost:3200/Estudiantes/'+id);
          this.Noti3();
  
          alert("Cuenta Borrada")
          this.props.history.push("/")
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
  
        Noti5 = async() => {
         
          request.get('http://localhost:3200/AsignarCurso')
          .end( (err ,res)=> {
      console.log(res);
      const AsignarCurso =JSON.parse(res.text);
      this.setState({
      
    AsignarCurso : AsignarCurso
      }); });
        }
  
  
       
        submitHandler = e => {
          e.preventDefault()
          console.log(this.state)
          axios.post('http://localhost:3200/CursoUsuario',this.state.CursoUsuario) 
          .then(response =>  {
           console.log(response)
          }) ;
        }
        changeHandler =e => {
          this.setState({[e.target.name]:e.target.value})
            }
        componentDidMount(){this.Noti();
          this.Noti2();
          this.Noti3();
          this.Noti4();
          this.Noti5();
          this.Delete2();
          this.NotiA();
          this.NotiA2();
          
      
  
        }
          Eliminar =(e)=>{
            window.localStorage.removeItem('id')
                this.props.history.push("/")
          }
           Validar = (e) =>{
    
           let valAdmin =false;
           let valColaborador =false;
           let valEstudiante =false;
           let valCatedratico =false;
           
         
    
            var Estudiante= this.state.Estudiante.map((E, i)=>{
              if (E.Correo=== this.state.Correo && E.Contraseña ===this.state.Contraseña) {
           valAdmin =true;
              } 
    
         
          
            });
          
            
             if(valAdmin ===true){ 
               alert('Bienvenido Admin')
               this.props.history.push("/CrearActividades")
             }
             
            else if(valColaborador ===true){
              alert('Bienvenido Colaborador')
            }
            
             else if(valEstudiante ===true){
              alert('Bienvenido Estudiante')
            }
            
          else  if(valCatedratico ===true){
              alert('Bienvenido Catedratica')
            }
            else{
              alert("Datos incorrectos")
            }
    
      
            
           }
        render(){ 
  
          let CursoUsuario=[];
          let ActividadUsuario =[];
          var A_Estudiantes = this.state.Estudiante.map((c, i) => {
            return (
      
      
              <option key={c.Nombre}  > {c.Nombre}</option>
      
    
      
            );
          });
      
      









    var Estudiante = this.state.Estudiante .map((E, i)=>{
      if (E.id=== a) {
  
    ADMIN8=E.Carne;
    ADMIN1=E.Nombre;
    ADMIN=E.Nombre;
    ADMIN2=E.Fecha;
    ADMIN3=E.Telefono;
    ADMIN4=E.Correo;
    ADMIN5=E.Universidad;
    ADMIN6=E.Nacionalidad;
    ADMIN7=E.Nickname;
  
      }           });
        
        var AsignarCursos = this.state.AsignarCurso .map((E2, i)=>{
       
  
  if (E2.NombreUsuario===this.state.NombreUsuario) {
 
return(



    <div className="card" >
    <div className="card-body">
      <span className="badge badge-info">Curso</span>
      <h5 className="card-title">  {E2.Curso} </h5>



    </div>
  </div>
)
;



      }
      
                });



                  var AsignarActividad = this.state.AsignarActividad .map((E2, i)=>{
       
  
  if (E2.NombreUsuario===this.state.NombreUsuario) {
 
return(



    <div className="card" >
    <div className="card-body">
      <span className="badge badge-info">Actividad</span>
      <h5 className="card-title">  {E2.id} </h5>
      <span className="badge badge-info">Titular</span>
      <h5 className="card-title">  {E2.Titular} </h5>



    </div>
  </div>
)
;



      }
      
                });  
                  
  
                var Cursos =this.state.Cursos
              
          
                const {Correo,Contraseña,Tipo,NombreUsuario}=this.state
                
      
              return (
      
                <div className="App">
                    <form on onSubmit={this.submitHandler}>          <nav className="navbar navbar-dark bg-primary">
                    <a className="navbar-brand" href="http://localhost:3000/VerSolicitud" > Ver Solicitud</a>
                    <a className="navbar-brand" href="http://localhost:3000/MensajeEstudiante" > Mensajes</a>
               
                    <a className="navbar-brand" href="http://localhost:3000/CalificacionE" > Calificar Actividad</a>
               
                    <a className="navbar-brand" href="http://localhost:3000/EnviarS" >Solicitud</a>
  
                    <a className="navbar-brand" href="http://localhost:3000/AsignarCursosUsuario" >Cursos</a>
  
                    <a className="navbar-brand" href="http://localhost:3000/PerfilEstudiante" >Perfil</a>
                    
                    <a className="navbar-brand" href="http://localhost:3000/AsignarActividadUsuario" >Actividad</a>
                    <a className="navbar-brand" href="http://localhost:3000/ComentarNoticia" >Actividad</a>
                
                
                    <button type="submit" onClick={(this.Eliminar)} className="btn btn-light">SALIR</button>
   
        
                    
                </nav>
                
                <  div className="container-fluid" align="center">
                <div className="col-md-4 text-center">
                
                
                
                <h1> <span className="badge badge-primary"> Reporte Usuarios </span> 
                <img src={logo} className="App-logo3" alt="logo" /></h1>
   
                <div className="form-group">

<h3><span className="badge badge-info">Escoja Estudiante </span>

</h3>

<select class="selectpicker" name="NombreUsuario" defaultValue={NombreUsuario} onChange={this.changeHandler} >

{ A_Estudiantes}
</select>
<input type="text" className="form-control" placeholder="." aria-label="Username" aria-describedby="addon-wrapping" name="NombreUsuario" value={NombreUsuario} onChange={this.changeHandler} ></input>
</div>

                  </div>
              
      
                  <h1> <span className="badge badge-primary"> Mis  Cursos  
     
     </span> 
   </h1> {AsignarCursos }
   <h1> <span className="badge badge-primary"> Mis  Actividades 
     
     </span> 
   </h1> {AsignarActividad }
  
                     
                  </div>
                  </form>
      
                  </div>
    
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
        );
      }
       }
    
export default ReporteUsuario