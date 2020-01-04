import React ,{Component} from 'react';
import logo from './actividades.svg';
import './App.css';
import axios from 'axios';
import request from 'superagent';

class ReporteVisitas extends Component{
 constructor(){
  super();
  this.state={
     id :'', 
     Actividad:'',
     Fecha :'',
   Concepto :'',
    Codigo :'',
    Total :'',
 CalificacionActividad:[],
    Ingreso:[],
 
    actividad: []
}
}

NotiA = async () => {
request.get('http://localhost:3200/Actividades')
  .end((err, res) => {
    console.log(res);
    const actividad = JSON.parse(res.text);
    this.setState({

      actividad: actividad

    });
  });
}

  Noti = async() => {
    request.get('http://localhost:3200/CalificacionActividad')
    .end( (err ,res)=> {
console.log(res);
const CalificacionActividad =JSON.parse(res.text);
this.setState({

  CalificacionActividad : CalificacionActividad
   
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
   this.Noti(); this.NotiA();
     }
  render(){ 

      
    var Ingreso = this.state.actividad.map((E, i) => {
        return (
  
  
          <option key={E.id}  > {E.id}</option>
  
  
  
  
  
  
        );
  
  
      });

var Promedio=[]
      var C= this.state.CalificacionActividad.map((I, i)=>{
        if(I.Actividad===this.state.Actividad){  
      Promedio.push( Number(I.Calificacion))
      
        }else{
            Promedio.push(0)
        }
              });

              var sumatoria = Promedio.reduce(function(acumulador, siguienteValor){
                return acumulador + siguienteValor;
              }, 0)
              
var PromedioC =sumatoria/Promedio.length;

      var Calificacion= this.state.CalificacionActividad.map((I, i)=>{
  if(I.Calificacion>6 && I.Tipo===" Visita Tecnica"){  return ( 
  
  
    <tr key ={I.Actividad}>{I.Actividad}</tr>

 

    );}
        });



        
         const {id,Fecha ,Concepto,Total,Codigo,Actividad}=this.state

        return (
    
<div>
  <form on onSubmit={this.submitHandler}>
<nav className="navbar navbar-dark bg-primary">

<a className="navbar-brand" href="http://localhost:3000/Registro" >Registro Estudiante</a>

<a className="navbar-brand" href="http://localhost:3000/Registro2" >Registro Catedratico</a>

<a className="navbar-brand" href="http://localhost:3000/VerPunteoConferencias" > Actividades</a>

<a className="navbar-brand" href="http://localhost:3000/noticias" > Noticias</a>
<a className="navbar-brand" href="http://localhost:3000/" >Login</a>

</nav>

 <h1><span className="badge badge-primary">Reporte Visitas Tecnicas</span> 

 <img src={logo} className="App-logo3" alt="logo" />



 <table className="table">
  <thead className="thead-secondary">
    <tr>

      <th scope="col"> Visita Tecnica</th>

  
    

    </tr>
  </thead>
  <tbody>
    <tr>
     
  {Calificacion}
     
    </tr>
    

  </tbody>
</table>
 </h1>  



 <  div className="container-fluid" align="center">

<div className="col-md-4 text-center">

      
  
  </div>

  </div>
  
 </form>
  </div>

  
















  );
}
 }
export default ReporteVisitas
