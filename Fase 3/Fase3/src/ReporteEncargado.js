import React ,{Component} from 'react';
import logo from './colaborador.svg';
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
 
class ReporteEncargado extends Component{
  constructor(){
    super();
    this.state={
    Encargado :'',
   actividad:[],  
  Admin:[],
  colaborador: [],
    Estudiante :[]
  , Catedratico:[],
  AsignarCurso:[],
  AsignarActividad:[],
  CursoUsuario:[],
  Contacto:[],
  Inventario:[]
       
    }
    }
    NotiInvent = async() => {
      request.get('http://localhost:3200/Inventario')
      .end( (err ,res)=> {
  console.log(res);
  const  Inventario =JSON.parse(res.text);
  this.setState({
  
    Inventario : Inventario
     
  }); });
    }

    NotiContact = async() => {
      request.get('http://localhost:3200/Contactos')
      .end( (err ,res)=> {
  console.log(res);
  const Contacto =JSON.parse(res.text);
  this.setState({
  
    Contacto : Contacto
     
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
    NotiA2 = async() => {
      request.get('http://localhost:3200/AsignarActividad')
      .end( (err ,res)=> {
  console.log(res);
  const AsignarActividad  =JSON.parse(res.text);
  this.setState({
  
    AsignarActividad: AsignarActividad
     
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
 axios.delete('http://localhost:3200/colaborador/'+id);
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
     this.NotiContact();
    alert("Bienvenido")
 
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
       Eliminar =(e)=>{
        window.localStorage.removeItem('id')
            this.props.history.push("/")
      }
    render(){ 

      let CursoUsuario=[];
      let ActividadUsuario =[];
      let Inventario =[];
      let Contactos =[];
var colaborador = this.state.colaborador .map((E, i)=>{
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
   

if (E2.idUsuario===a) {
  CursoUsuario.push( "CURSOS ----------->"+E2.Curso);
  } else{
    ActividadUsuario.push("----")
    CursoUsuario.push("-----")
   }

  
            });


            var Contact = this.state.Contacto.map((E2, i)=>{
   

                return (
  
  
                    <option key={E2.Encargado}  > {E2.Encargado}</option>
            
            
            
            
            
            
                  );

           
                
                          });
var Contacto1=[]
                          var Contactoo = this.state.Contacto.map((E3, i)=>{
   
if(E3.Encargado===this.state.Encargado){
              Contacto1.push("---"+E3.Nombre)          
              
              }else{
                  Contacto1.push("----")
              }
            
                       
                            
                                      });
            

                          var Invent = this.state.Inventario.map((E2, i)=>{
   



                            var colab = this.state.colaborador .map((E, i)=>{
                           
                              
                              if (E2.Persona===E.Nombre) {
                            alert("ojala")
                            Inventario.push("------->"+E2.Nombre)
                              }
                             
                            });
                            
                              
                                        });




            var AsignarActividad = this.state.AsignarActividad .map((E3, i)=>{
   

              if (E3.idUsuario=== window.localStorage.getItem('id') ){
                    alert("valido*2")
                ActividadUsuario.push("ACTIVIDAD:"+"------>"+E3.Actividad);
              }    else{
                ActividadUsuario.push("----")
                CursoUsuario.push("-----")
               }
                            });
              
              

            var Cursos =this.state.Cursos
          
      
            const {Correo,Contraseña,Tipo,Encargado}=this.state
            
          
          return (
  
            <div className="App">
                <form on onSubmit={this.submitHandler}>          <nav className="navbar navbar-dark bg-primary">
            

                <a className="navbar-brand" href="http://localhost:3000/CalificacionC" >CalificacionC</a>
           

                <a className="navbar-brand" href="http://localhost:3000/RegistroActividadesC" >Registrar Actividades</a>

                <a className="navbar-brand" href="http://localhost:3000/MensajeColaborador" >Mensajes</a>

          

                <a className="navbar-brand" href="http://localhost:3000/PresupuestoC" >Presupuesto</a>

                <a className="navbar-brand" href="http://localhost:3000/VerNoticia" >Noticia</a>
                
                <a className="navbar-brand" href="http://localhost:3000/AsignarCursoColaborador" > Asignar Cursos</a>
                <a className="navbar-brand" href="http://localhost:3000/VerCursos" >Cursos</a>
                
                <a className="navbar-brand" href="http://localhost:3000/AsignarActividadColaborador" >Actividades</a>
                   
                <a className="navbar-brand" href="http://localhost:3000/Inventario" >Inventario</a>
                   
                <a className="navbar-brand" href="http://localhost:3000/Inventario" >Inventario</a>
                <a className="navbar-brand" href="http://localhost:3000/Pagos" >Generar Pagos</a>
              
                <button type="submit" onClick={(this.Eliminar)} className="btn btn-light">SALIR</button>

    
                
            </nav>
            
            <  div className="container-fluid" align="center">
            <div className="col-md-4 text-center">
            
            
            
            <h1> <span className="badge badge-primary"> Reporte Encargados </span> 
            <img src={logo} className="App-logo3" alt="logo" /></h1>
          
            <div className="form-group">

<h3><span className="badge badge-info"> Escoja el encargado </span>

</h3>

<select class="selectpicker" name="Encargado" defaultValue={Encargado} onChange={this.changeHandler} >

  {Contact}
</select>
<input type="text" className="form-control" placeholder="." aria-label="Username" aria-describedby="addon-wrapping" name="Encargado" value={Encargado} onChange={this.changeHandler} ></input>
{Contacto1}
</div>



              </div>
          
  
         

              </div>
              </form>
  
              </div>

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    );
  }
   }
  
  export default ReporteEncargado;