import React ,{Component} from 'react';
import logo from './cursos.svg';
import './App.css';
import axios from 'axios';
import request from 'superagent';

class Cursos extends Component{
 constructor(){
  super();
  this.state={
     id :'', 
    Nombre :'',
    Codigo:'',
    Seccion:'',
    Universidad:'',
    Titular:'',

    cursos:[],
 
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
    request.get('http://localhost:3200/cursos')
    .end( (err ,res)=> {
console.log(res);
const cursos =JSON.parse(res.text);
this.setState({

  cursos: cursos
   
}); });
  }
  Delete = async (id)=>{
await axios.delete('http://localhost:3200/cursos/'+id);
this.Noti();
  }
  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3200/cursos',this.state) 
    .then(response =>  {
     console.log(response)
    }) ;
  }
  changeHandler =e => {
    this.setState({[e.target.name]:e.target.value})
      }
  componentDidMount(){
  this.Noti();
  this.Noti0(); this.Noti3(); this.Noti2();
  this.Noti4();
     }


     Validar = (e) =>{

      let valAdmin =false;
      let valColaborador =false;
      let valEstudiante =false;
      let valCatedratico =false;
      
       var colaborador= this.state.colaborador.map((E2, i)=>{
         if (E2.Nombre=== this.state.Encargado) {
           valColaborador =true;
              }     });

       var Admin = this.state.Admin.map((E, i)=>{
         if (E.Nombre=== this.state.Encargado) {
      valAdmin =true;
         } 

    
     
       });
     
       var Estudiante= this.state.Estudiante.map((E3, i)=>{
        if (E3.Nombre=== this.state.Titular) {
     
     valEstudiante =true;
        } 

   
    
      });
    

       var Catedratico= this.state.Catedratico.map((E3, i)=>{
         if (E3.Nombre=== this.state.Titular) {
      
      valCatedratico =true;
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

      
    var A_catedratico = this.state.Catedratico.map((c, i) => {
      return (


        <option key={c.Nombre}  > {c.Nombre}</option>






      );
    });




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
   <button className="btn btn-light" onClick={()=> this.Delete(c.id)}>Eliminar </button>

    </div>
    </div>
    </li>
        });
        
         const {id,Nombre ,Codigo,Hora ,Seccion,Universidad,Titular}=this.state

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

 <h1><span className="badge badge-primary">Crear  Cursos</span> 

 </h1>  
 <img src={logo} className="App-logo3" alt="logo" />

 <  div className="container-fluid" align="center">
<div className="col-md-4 text-center">
<h3><span className="badge badge-primary">Ingrese Datos </span> 

</h3> 

<input type="text" className="form-control" placeholder="id" aria-label="Username" aria-describedby="addon-wrapping" name="id" value ={id} onChange={this.changeHandler }></input>
<input type="text" className="form-control" placeholder="Nombre" aria-label="Username" aria-describedby="addon-wrapping" name="Nombre" value ={Nombre} onChange={this.changeHandler }></input>
<input type="text" className="form-control" placeholder="Hora" aria-label="Username" aria-describedby="addon-wrapping"  name ="Hora"value ={Hora} onChange={this.changeHandler }></input>
<input type="text" className="form-control" placeholder="Codigo" aria-label="Username" aria-describedby="addon-wrapping"  name ="Codigo"value ={Codigo} onChange={this.changeHandler } ></input>
<input type="text" className="form-control" placeholder="Seccion" aria-label="Username" aria-describedby="addon-wrapping"  name ="Seccion"value ={Seccion} onChange={this.changeHandler } ></input>
<input type="text" className="form-control" placeholder="Titular Limite" aria-label="Username" aria-describedby="addon-wrapping"  name ="Titular"value ={Titular} onChange={this.changeHandler } ></input>


<div className="form-group">

<h3><span className="badge badge-info">Asignar Titular </span>

</h3>

<select class="selectpicker" name="Titular" defaultValue={Titular} onChange={this.changeHandler} >

  {A_catedratico}
</select>
</div>




 <button type="submit" className="btn btn-light">Crear </button>
 <button type="submit" onClick={(this.Validar)} className="btn btn-light">Validar</button>
  </div>

  </div>
  {cursos} 
 </form>
  </div>

  
















  );
}
 }
export default Cursos