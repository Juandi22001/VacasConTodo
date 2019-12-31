
import React ,{Component} from 'react';
import logo from './ingreso.svg';
import './App.css';
import axios from 'axios';
import request from 'superagent';

class PagosA extends Component{
 constructor(){
  super();
  this.state={
     id :'', 
     
   Concepto :'',
    Nombre :'',
    Total :'',
 
    Ingreso:[],
    Estudiante :[]
    , Catedratico:[],
    AsignarCurso:[],
    CursoUsuario:[]

      }
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

  Noti = async() => {
    request.get('http://localhost:3200/Ingreso')
    .end( (err ,res)=> {
console.log(res);
const Ingreso =JSON.parse(res.text);
this.setState({

  Ingreso : Ingreso
   
}); });
  }
  Delete = async (id)=>{
await axios.delete('http://localhost:3200/Ingreso/'+id);
this.Noti();
  }
  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3200/Ingreso',this.state) 
    .then(response =>  {
     console.log(response)
    }) ;
  }
  changeHandler =e => {
    this.setState({[e.target.name]:e.target.value})
      }
  componentDidMount(){
   this.Noti();
   this.Noti2();
   this.Noti3();
   this.Noti33();
   this.Noti();
  
}

     Validar = (e) =>{
  
        let valAdmin =false;
        let valColaborador =false;
        let valEstudiante =false;
        let valCatedratico =false;
        
      
 
         var Estudiante= this.state.Estudiante.map((E, i)=>{
           if (E.id=== this.state.id) {
        valEstudiante =true;
           } 
 
      
       
         });
       
         
          if(valAdmin ===true){ 
            alert('Bienvenido Admin')
          
          }
          
         else if(valColaborador ===true){
           alert('Bienvenido Colaborador')
         }
         
          else if(valEstudiante ===true){
           alert('Datos Correctos')
         }
         
       else  if(valCatedratico ===true){
           alert('Bienvenido Catedratica')
         }
         else{
           alert("Datos incorrectos")
         }
 
   
         
        }

  render(){ 

      
      var Ingreso= this.state.Ingreso.map((I, i)=>{
    return <li key={i }>   
  
  
   <div className="card" >  
   <div className="card-body">
   <span className="badge badge-info">Concepto</span>
   <h5 className="card-title">  {I.Concepto} </h5>

   <span className="badge badge-info">Total</span>
   <h5 className="card-title">  {I.Total} </h5>

   <span className="badge badge-info">Estudiante</span>
   <h5 className="card-title">  {I.Nombre} </h5>




    </div>
    </div>
    </li>
        });
        
         const {id,Nombre ,Concepto,Total}=this.state

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

 <h1><span className="badge badge-primary"> PAGOS REALIZADOS </span> 

 </h1>  
 <img src={logo} className="App-logo3" alt="logo" />

 <  div className="container-fluid" align="center">
<div className="col-md-4 text-center">



  </div>
{Ingreso}
  </div>
 
 </form>
  </div>

  
















  );
}
 }
export default PagosA
