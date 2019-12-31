
import React ,{Component} from 'react';
import logo from './ingreso.svg';
import './App.css';
import axios from 'axios';
import request from 'superagent';

class Pagos extends Component{
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

   <span className="badge badge-info">Codigo</span>
   <h5 className="card-title">  {I.Codigo} </h5>


   <span className="badge badge-info">Fecha</span>
   <h5 className="card-title">  {I.Fecha} </h5>

   <button className="btn btn-light" onClick={()=> this.Delete(I.id)}>Eliminar </button>


    </div>
    </div>
    </li>
        });
        
         const {id,Nombre ,Concepto,Total}=this.state

        return (
    
<div>
  <form on onSubmit={this.submitHandler}>
<nav className="navbar navbar-dark bg-primary">



<a className="navbar-brand" href="http://localhost:3000/PresupuestoC" >Presupuesto</a>

<a className="navbar-brand" href="http://localhost:3000/VerNoticia" >Noticia</a>

<a className="navbar-brand" href="http://localhost:3000/VerCursos" >Cursos</a>

<a className="navbar-brand" href="http://localhost:3000/VerActividades" >Actividades</a>
   
<a className="navbar-brand" href="http://localhost:3000/Inventario" >Inventario</a>
<a className="navbar-brand" href="http://localhost:3000/Pagos" >Generar Pagos</a>
<a className="navbar-brand" href="http://localhost:3000/PerfilColaborador" >Perfil</a>
          

              
</nav>

 <h1><span className="badge badge-primary">Registrar PAGO </span> 

 </h1>  
 <img src={logo} className="App-logo3" alt="logo" />

 <  div className="container-fluid" align="center">
<div className="col-md-4 text-center">
<h3><span className="badge badge-primary">Ingrese Datos </span> 

</h3> 

<input type="text" className="form-control" placeholder="id" aria-label="Username" aria-describedby="addon-wrapping" name="id" value ={id} onChange={this.changeHandler }></input>
<input type="text" className="form-control" placeholder="Ingrese Nombre Estudiante" aria-label="Username" aria-describedby="addon-wrapping" name="Nombre" value ={Nombre} onChange={this.changeHandler }></input>
<input type="text" className="form-control" placeholder="Concepto" aria-label="Username" aria-describedby="addon-wrapping"  name ="Concepto"value ={Concepto} onChange={this.changeHandler }></input>

<input type="text" className="form-control" placeholder="Total" aria-label="Total" aria-describedby="addon-wrapping"  name ="Total"value ={Total} onChange={this.changeHandler } ></input>

  <button type="submit" className="btn btn-light">Crear </button>
  <button type="submit" onClick={(this.Validar)} className="btn btn-light">Validar</button>
  </div>

  </div>
 
 </form>
  </div>

  
















  );
}
 }
export default Pagos
