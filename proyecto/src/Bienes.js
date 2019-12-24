import React ,{Component} from 'react';
import logo from './inventario.svg';
import './App.css';
import axios from 'axios';
import request from 'superagent';

class Bienes extends Component{
 constructor(){
  super();
  this.state={
    id :'',
     codigo :'',
      Nombre  :'',
    Descripcion :'',
    Cantidad :'',
     Persona :'',
     Ubicacion :'',
      Estado :'',
Inventario : [],
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
    request.get('http://localhost:3200/Inventario')
    .end( (err ,res)=> {
console.log(res);
const  Inventario =JSON.parse(res.text);
this.setState({

  Inventario : Inventario
   
}); });
  }
  Delete = async (id)=>{
    await axios.delete('http://localhost:3200/Inventario/'+id);
    this.Noti();
      }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3200/Inventario',this.state) 
    .then(response =>  {
     console.log(response)
    }) ;
  }
  changeHandler =e => {
    this.setState({[e.target.name]:e.target.value})
      }
  componentDidMount(){
 this.Noti0();

 this.Noti();
 this.Noti();
 this.Noti2();
 this.Noti3();
 this.Noti4();
     }

     Validar = (e) =>{

      let valAdmin =false;
      let valColaborador =false;
      let valEstudiante =false;
      let valCatedratico =false;
      
       var colaborador= this.state.colaborador.map((E2, i)=>{
         if (E2.Nombre=== this.state.Persona) {
           valColaborador =true;
              }     });

       var Admin = this.state.Admin.map((E, i)=>{
         if (E.Nombre=== this.state.Persona) {
      valAdmin =true;
         } 

    
     
       });
     
       var Estudiante = this.state.Estudiante.map((E3, i)=>{
         if (E3.Nombre=== this.state.Persona) {
      
      valEstudiante =true;
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
        var Inventario = this.state.Inventario.map((Invent, i)=>{
        return <li key={i }>   
      
      
       <div className="card" >  
       <div className="card-body">
       <span className="badge badge-info">Id </span>
       <h5 className="card-title">  {Invent.id} </h5>
       <span className="badge badge-info">Codigo </span>
       <h5 className="card-title">  {Invent.codigo} </h5>
       <span className="badge badge-info">Nombre</span>
     
       <h5 className="card-title">  {Invent.  Nombre} </h5>

       <span className="badge badge-info">Persona</span>
     
       <h5 className="card-title">  {Invent.Persona} </h5>
       <span className="badge badge-info">Descripcion :</span>
       <p className="card-text"> {Invent.Descripcion} </p>
       
       <span className="badge badge-info">Ubicacion</span>
      
       <h5 className="card-title">  {Invent.  Ubicacion} </h5>
       <span className="badge badge-info">Estado</span>
        </div>
       <h5 className="card-title">  {Invent.  Estado} </h5>
       <button className="btn btn-light" onClick={()=> this.Delete(Invent.id)}>Eliminar </button>

        </div>
        </li>
      
     
        });
         const {id,codigo ,Descripcion,Nombre ,Persona,Ubicacion,Estado,Cantidad}=this.state

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

 <h1><span className="badge badge-primary">inventario</span> 

 </h1>  
 <img src={logo} className="App-logo2" alt="logo" />

 <  div className="container-fluid" align="center">
<div className="col-md-4 text-center">
<h3><span className="badge badge-primary">Ingrese Datos </span> 

</h3> 

<input type="text" className="form-control" placeholder="id" aria-label="id" aria-describedby="addon-wrapping" name="id" value ={id} onChange={this.changeHandler }></input>
<input type="text" className="form-control" placeholder="codigo" aria-label="Username" aria-describedby="addon-wrapping" name="codigo" value ={codigo} onChange={this.changeHandler }></input>
<input type="text" className="form-control" placeholder="Nombre" aria-label="Username" aria-describedby="addon-wrapping"  name ="Nombre"value ={Nombre} onChange={this.changeHandler }></input>
<input type="text" className="form-control" placeholder="Descripcion" aria-label="Username" aria-describedby="addon-wrapping"  name ="Descripcion"value ={Descripcion} onChange={this.changeHandler } ></input>
<input type="text" className="form-control" placeholder="Persona" aria-label="Username" aria-describedby="addon-wrapping"  name ="Persona"value ={Persona} onChange={this.changeHandler } ></input>
<input type="text" className="form-control" placeholder="Cantidad Limite" aria-label="Username" aria-describedby="addon-wrapping"  name ="Cantidad"value ={Cantidad} onChange={this.changeHandler } ></input>
<input type="text" className="form-control" placeholder="Ubicacion" aria-label="Username" aria-describedby="addon-wrapping"  name ="Ubicacion" value ={Ubicacion} onChange={this.changeHandler } ></input>
<input type="text" className="form-control" placeholder=" ingrese  Estado" aria-label="Username" aria-describedby="addon-wrapping"  name ="Estado"value ={Estado} onChange={this.changeHandler } ></input>
  <button type="submit" className="btn btn-light">Crear </button>
  <button type="submit" onClick={(this.Validar)} className="btn btn-light">Validar</button>
  </div>

  </div>
  {Inventario} 
 </form>
  </div>

  
















  );
}
 }
export default Bienes 
