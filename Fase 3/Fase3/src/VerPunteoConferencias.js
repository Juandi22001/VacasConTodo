import React ,{Component} from 'react';
import logo from './actividades.svg';
import './App.css';
import axios from 'axios';
import request from 'superagent';

class VerPunteoConferencias extends Component{
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
var Promedio2=[]
      var C= this.state.CalificacionActividad.map((I, i)=>{
        if(I.Actividad===this.state.Actividad){  
      Promedio.push( Number(I.Calificacion))
      Promedio2.push( I.Calificacion)
      
        }else{
            Promedio.push(0)
        }
              });

              var sumatoria = Promedio.reduce(function(acumulador, siguienteValor){
                return acumulador + siguienteValor;
              }, 0)
              
var PromedioC =(sumatoria/Promedio2.length);

      var Calificacion= this.state.CalificacionActividad.map((I, i)=>{
  if(I.Actividad===this.state.Actividad){  return ( 
  
  
   <div className="card" >  
   <div className="card-body">


   <span className="badge badge-info">Comentario</span>
   <h5 className="card-title">  {I.Comentario} </h5>

   <span className="badge badge-info">Calificacion</span>
   <h5 className="card-title">  {I.Calificacion} </h5>



   <button className="btn btn-light" onClick={()=> this.Delete(I.id)}>Eliminar </button>


    </div>
    </div>
    );}
        });


        var Actividades= this.state.actividad.map((actividad, i)=>{
          return <li key={i }>   
        
        
         <div className="card" >  
         <div className="card-body">
         <span className="badge badge-info">Id</span>
         <h5 className="card-title">  {actividad.id} </h5>
      
         <span className="badge badge-info">Fecha</span>
         <h5 className="card-title">  {actividad.Fecha} </h5>
      
         <span className="badge badge-info">Hora</span>
         <h5 className="card-title">  {actividad.Hora} </h5>
      
      
         <span className="badge badge-info">Lugar</span>
         <h5 className="card-title">  {actividad.Lugar} </h5>
      
      
         <span className="badge badge-info"> Tipo</span>
         <h5 className="card-title">  {actividad.Tipo} </h5>
      
      
         <span className="badge badge-info">Cantidad</span>
         <h5 className="card-title">  {actividad.Cantidad} </h5>
      
         <span className="badge badge-info"> Expositor</span>
         <h5 className="card-title">  {actividad.Expositor} </h5>
      
      
         <span className="badge badge-info">Descripcion</span>
         <h5 className="card-title">  {actividad.Descripcion} </h5>
      
      
          </div>
          </div>
          </li>
        
       
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

 <h1><span className="badge badge-primary">Ver Actividades</span> 

 </h1>  
 <img src={logo} className="App-logo3" alt="logo" />


{Actividades}

 <  div className="container-fluid" align="center">

<div className="col-md-4 text-center">

        <div className="form-group">
    
    <h3><span className="badge badge-info">Escoja Actividad para ver comentario</span>

    </h3>
   
    <select class="selectpicker" name="Actividad" defaultValue={Actividad} onChange={this.changeHandler} >

      {Ingreso}
    </select>
  </div>
  <input type="text" className="form-control" placeholder="ingrese Comentario" aria-label="Username" aria-describedby="addon-wrapping" name="Actividad" value={Actividad} onChange={this.changeHandler}></input>

{Calificacion}
<h3><span className="badge badge-info">Promedio :{PromedioC}</span>

</h3>

  
  </div>

  </div>
  
 </form>
  </div>

  
















  );
}
 }
export default VerPunteoConferencias
