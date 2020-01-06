import React ,{Component} from 'react';
import logo from './Contacto.svg';
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
 
class ReporteContactoNombre extends Component{
  constructor(){
    super();
    this.state={
    Valor :'',
   actividad:[],  
  Admin:[],
  colaborador: [],
    Estudiante :[]
  , Catedratico:[],
  AsignarCurso:[],
  AsignarActividad:[],
  CursoUsuario:[],
  Contacto1:[],
  Contacto2:[],
  Contacto3:[],
  
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
      request.get('http://localhost:3200/Contactos/Correo')
      .end( (err ,res)=> {
  console.log(res);
  const Contacto1 =JSON.parse(res.text);
  this.setState({
  
    Contacto1 : Contacto1
     
  }); });
       
    }
    NotiContact2 = async() => {
        request.get('http://localhost:3200/Contactos/Telefono')
        .end( (err ,res)=> {
    console.log(res);
    const Contacto2 =JSON.parse(res.text);
    this.setState({
    
      Contacto2 : Contacto2
       
    }); });
         
      }
      
    NotiContact3 = async() => {
        request.get('http://localhost:3200/Contactos/Nombre')
        .end( (err ,res)=> {
    console.log(res);
    const Contacto3 =JSON.parse(res.text);
    this.setState({
    
      Contacto3 : Contacto3
       
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
     this.NotiContact2();
     this.NotiContact3();
     this.NotiContact();
    
 
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


            var Contact = this.state.Contacto1.map((Contact, i)=>{
   
          
                return (
  
                            
<option key ={Contact.Nombre}   >{Contact.Nombre} </option>

              
                  );

           
                
                          });


                          var Contact2 = this.state.Contacto2.map((Contact2, i)=>{
   
                            if(Contact2.Nombre===this.state.Valor){
                           return (
             
                               <div className="card" >
                               <div className="card-body">
                                 <span className="badge badge-info">Id</span>
                                 <h5 className="card-title">  {Contact2.id} </h5>
                     
                                 <span className="badge badge-info"> Nombre</span>
                                 <h5 className="card-title">  {Contact2.Nombre} </h5>
                     
                                 <span className="badge badge-info"> Telefono</span>
                                 <h5 className="card-title">  {Contact2.Telefono} </h5>
                     
                     
                                 <span className="badge badge-info"> @Correo</span>
                                 <h5 className="card-title">  {Contact2.Correo} </h5>
                     
                     
                                 <span className="badge badge-info">  Direccion</span>
                                 <h5 className="card-title">  {Contact2.Direccion} </h5>
                     
                     
                                 <span className="badge badge-info"> Rol</span>
                                 <h5 className="card-title">  {Contact2.Rol} </h5>
                     
                                 <span className="badge badge-info">  Oportunidades</span>
                                 <h5 className="card-title">  {Contact2.Oportunidades} </h5>
                     
                     
                                 <span className="badge badge-info"> Encargado</span>
                                 <h5 className="card-title">  {Contact2.Encargado} </h5>
                     
                     
                     
                               </div>
                             </div>
                         
                             );}
           
                      
                           
                                     });








                                     var Contact3 = this.state.Contacto3.map((Contact3, i)=>{
   
                                        if(this.state.Valor==="Nombre"){
                                       return (
                         
                                           <div className="card" >
                                           <div className="card-body">
                                             <span className="badge badge-info">Id</span>
                                             <h5 className="card-title">  {Contact3.id} </h5>
                                 
                                             <span className="badge badge-info"> Nombre</span>
                                             <h5 className="card-title">  {Contact3.Nombre} </h5>
                                 
                                             <span className="badge badge-info"> Telefono</span>
                                             <h5 className="card-title">  {Contact3.Telefono} </h5>
                                 
                                 
                                             <span className="badge badge-info"> @Correo</span>
                                             <h5 className="card-title">  {Contact3.Correo} </h5>
                                 
                                 
                                             <span className="badge badge-info">  Direccion</span>
                                             <h5 className="card-title">  {Contact3.Direccion} </h5>
                                 
                                 
                                             <span className="badge badge-info"> Rol</span>
                                             <h5 className="card-title">  {Contact3.Rol} </h5>
                                 
                                             <span className="badge badge-info">  Oportunidades</span>
                                             <h5 className="card-title">  {Contact3.Oportunidades} </h5>
                                 
                                 
                                             <span className="badge badge-info"> Encargado</span>
                                             <h5 className="card-title">  {Contact3.Encargado} </h5>
                                 
                                 
                                 
                                           </div>
                                         </div>
                                     
                                         );}
                       
                                  
                                       
                                                 });
            











            var Cursos =this.state.Cursos
          
      
            const {Correo,Contraseña,Tipo,Valor}=this.state
            
          
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
            
            
            
            <h1> <span className="badge badge-primary"> Reporte Contactos  </span> 
            <img src={logo} className="App-logo3" alt="logo" /></h1>
          
            <div className="form-group">

<h3><span className="badge badge-info"> Escoja el Ordenamiento </span>

</h3>

<select class="selectpicker" name="Valor" defaultValue={Valor} onChange={this.changeHandler} >


            
{Contact}
            
            
            
</select>
<input type="text" className="form-control" placeholder="." aria-label="Username" aria-describedby="addon-wrapping" name="Valor" value={Valor} onChange={this.changeHandler} ></input>

</div>




              </div>
              {Contact2}

          
  
         

              </div>
              </form>
  
              </div>

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    );
  }
   }
  
  export default ReporteContactoNombre;