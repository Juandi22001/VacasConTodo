import React ,{Component} from 'react';
import logo from './Prespuesto.svg';
import './App.css';
import axios from 'axios';
import request from 'superagent';
var cont,cont2,Total;
class ReporteIngreso extends Component{
 constructor(){
  super();

 
  this.state={
  
    Egreso:[],
    Ingreso :[]

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
  Noti2 = async() => {
    request.get('http://localhost:3200/Ingreso')
    .end( (err ,res)=> {
console.log(res);
const Ingreso =JSON.parse(res.text);
this.setState({

Ingreso : Ingreso   
}); });
   
  }

  Delete = async (id)=>{
await axios.delete('http://localhost:3200/colaborador/'+id);
this.Noti();
  }
  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3200/colaborador',this.state) 
    .then(response =>  {
     console.log(response)
    }) ;
  }
  changeHandler =e => {
    this.setState({[e.target.name]:e.target.value})
      }
  componentDidMount(){
   this.Noti(); 
   this.Noti2();  }
  render(){ 
var Egresos=[]

var Ingresos=[]
    var Egreso3 = this.state.Egreso.map((E, i)=>{
       Egresos.push (Number(E.Total)) ;
     
        });
    
    var Egreso = this.state.Egreso.map((E, i)=>{
        return <li key={i }>   
     {E.Total} 
  
        </li>
      
      
     
        });
  
        var Egreso2 = this.state.Egreso.map((E, i)=>{
            return <li key={i }>   
         {E.Descripcion }
      
            </li>
          
          
         
            });
            var Ingreso2 = this.state.Ingreso.map((E, i)=>{
                return <li key={i }>   
             {E. Concepto}
          
                </li>
              
              
             
                }); 
                var Ingreso = this.state.Ingreso.map((E, i)=>{
                    return <li key={i }>   
                 {E.Total }
           
                    </li>
                  
                  
                 
                    }); 
                    var Ingreso3 = this.state.Ingreso.map((E, i)=>{
                        Ingresos.push( Number(E.Total))
                        }); 



                        var sumatoria = Ingresos.reduce(function(acumulador, siguienteValor){
                          return acumulador + siguienteValor;
                        }, 0);
                        var sumatoria2 = Egresos.reduce(function(acumulador, siguienteValor){
                          return acumulador + siguienteValor;
                        }, 0);


                   Total=sumatoria-sumatoria2;
         const {id,Carne,Nombre,Fecha,Correo,Telefono,Nickname,Contraseña}=this.state
         
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

 <h1><span className="badge badge-primary">Reporte Ingresos</span> 

 </h1>  
 <img src={logo} className="App-logo2" alt="logo" />

 



 <table className="table">
  <thead className="thead-secondary">
    <tr>

    <th scope="col">Motivo</th>
      <th scope="col">Ingreso</th>
 
     
 
  
    

    </tr>
  </thead>
  <tbody>
    <tr>
     
    <td>{Ingreso2}</td>
     
      <td>{Ingreso}</td>
      

     
    </tr>
    

  </tbody>
</table>






 </form>

 <h1><span className="badge badge-primary">Total :{sumatoria} </span> 
 </h1>  
 

  </div>

  
















  );
}
 }
export default ReporteIngreso
