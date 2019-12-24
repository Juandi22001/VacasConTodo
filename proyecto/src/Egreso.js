import React ,{Component} from 'react';
import logo from './Egreso.svg';
import './App.css';
import axios from 'axios';
import request from 'superagent';

class Egreso extends Component{
 constructor(){
  super();
  this.state={
     id :'', 
     
     Fecha :'',
   NoFactura :'',
    Descripcion :'',
    Total :'',
 
    Egreso:[]
 

  }
  } 

  Noti = async() => {
    request.get('http://localhost:3200/Egreso')
    .end( (err ,res)=> {
console.log(res);
const Egreso =JSON.parse(res.text);
this.setState({

  Egreso : Egreso
   
}); });
  }
  Delete = async (id)=>{
await axios.delete('http://localhost:3200/Egreso/'+id);
this.Noti();
  }
  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3200/Egreso',this.state) 
    .then(response =>  {
     console.log(response)
    }) ;
  }
  changeHandler =e => {
    this.setState({[e.target.name]:e.target.value})
      }
  componentDidMount(){
   this.Noti();
     }
  render(){ 

      
      var Egreso= this.state.Egreso.map((I, i)=>{
    return <li key={i }>   
  
  
   <div className="card" >  
   <div className="card-body">
   <span className="badge badge-info">Concepto</span>
   <h5 className="card-title">  {I.NoFactura} </h5>

   <span className="badge badge-info">Total</span>
   <h5 className="card-title">  {I.Total} </h5>

   <span className="badge badge-info">Codigo</span>
   <h5 className="card-title">  {I.Descripcion} </h5>


   <span className="badge badge-info">Fecha</span>
   <h5 className="card-title">  {I.Fecha} </h5>

   <button className="btn btn-light" onClick={()=> this.Delete(I.id)}>Eliminar </button>


    </div>
    </div>
    </li>
        });
        
         const {id,Fecha ,Descripcion,Total,NoFactura}=this.state

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

 <h1><span className="badge badge-primary">Registrar Egreso</span> 

 </h1>  
 <img src={logo} className="App-logo3" alt="logo" />

 <  div className="container-fluid" align="center">
<div className="col-md-4 text-center">
<h3><span className="badge badge-primary">Ingrese Datos </span> 

</h3> 

<input type="text" className="form-control" placeholder="id" aria-label="Username" aria-describedby="addon-wrapping" name="id" value ={id} onChange={this.changeHandler }></input>
<input type="date" className="form-control" placeholder="Fecha" aria-label="Username" aria-describedby="addon-wrapping" name="Fecha" value ={Fecha} onChange={this.changeHandler }></input>
<input type="text" className="form-control" placeholder="Descripcion" aria-label="Username" aria-describedby="addon-wrapping"  name ="Descripcion"value ={Descripcion} onChange={this.changeHandler }></input>
<input type="text" className="form-control" placeholder="NoFactura" aria-label="Total" aria-describedby="addon-wrapping"  name ="NoFactura"value ={NoFactura} onChange={this.changeHandler } ></input>

<input type="text" className="form-control" placeholder="Total" aria-label="Total" aria-describedby="addon-wrapping"  name ="Total"value ={Total} onChange={this.changeHandler } ></input>

  <button type="submit" className="btn btn-light">Crear </button>

  </div>

  </div>
  {Egreso} 
 </form>
  </div>

  
















  );
}
 }
export default Egreso
