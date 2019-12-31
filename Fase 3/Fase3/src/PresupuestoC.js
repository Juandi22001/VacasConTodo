import React ,{Component} from 'react';
import logo from './Prespuesto.svg';
import './App.css';
import axios from 'axios';
import request from 'superagent';
var cont,cont2,Total;
class PresupuestoC extends Component{
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


    var Egreso3 = this.state.Egreso.map((E, i)=>{
       cont =+  Number(E.Total)
     
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
                        cont2 =+ Number(E.Total)
                        }); 
                   Total=cont2-cont;
         const {id,Carne,Nombre,Fecha,Correo,Telefono,Nickname,Contraseña}=this.state
         
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

 <h1><span className="badge badge-primary">Presupuesto</span> 

 </h1>  
 <img src={logo} className="App-logo2" alt="logo" />

 



 <table className="table">
  <thead className="thead-secondary">
    <tr>

      <th scope="col"> Egreso</th>
      <th scope="col"> Monto</th>
      <th scope="col">Ingreso</th>
      <th scope="col">Monto</th>
  
    

    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td>{Egreso2}</td>
      
     
      <td>{Egreso}</td>
      <td>{Ingreso2}</td>
      
     
      <td>{Ingreso}</td>
     
    </tr>
    

  </tbody>
</table>






 </form>

 <h1><span className="badge badge-primary"> Balance :{Total} </span> 
 </h1>  

 <h1><span className="badge badge-primary"> Ganancia Esperada :Q.1000000000000000000000.00 </span> 
 </h1>  
  </div>

  
















  );
}
 }
export default PresupuestoC
