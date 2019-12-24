const express  =require ('express')
const app = express()
const under =require('underscore');

app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
  
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, authorization"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, GET, POST, DELETE, OPTIONS"
    );
    next();
  });


////Login


const Login= [

  { 

 Correo:'Jd',
    Contraseña :'124'
    }
    ] 
    app.get('/Login', (req, res )=>{
       res.json(Login)
    });
    
    app.post('/Login', (req, res )=>{
     try{
        const Estudiante ={
   
          Correo:req.body.Correo,
          Contraseña :req.body.Contraseña,
          Tipo:req.body.Tipo
     }
    
Login.push(Estudiante);
    res.status(201).send()
     
    } catch {
    res.status(500).send()
    }
    
    });

  //// Administradores

  const Admin = [

    { id:"1",
      Nombre:'Juan ',
      Fecha: '20/10/1999',
      Telefono :'57789797',
      Correo :'juandiegoAlvarado@gmail.com',
    
      Nickname:'Jd',
      Contraseña :'124',
       Puesto:'gfe'
    },  { id:"2",
    Nombre:'Pedro ',
    Fecha: '20/10/1999',
    Telefono :'57789797',
    Correo :'Alvarado@gmail.com',
  
    Nickname:'Jd',
    Contraseña :'124',
     Puesto:'gfe'
  }
      ] 
      app.get('/Admin', (req, res )=>{
         res.json(Admin)
      });
      
      app.post('/Admin', (req, res )=>{
       try{
          const Estudiante ={
            id:req.body.id,
            Carne: req.body.Carne,
            Nombre:req.body.Nombre,
            Fecha: req.body.Fecha,
            Telefono :req.body.Telefono,
            Correo :req.body.Correo,
         
            Nickname:req.body.Nickname,
            Contraseña :req.body.Contraseña,
            Puesto :req.body.Puesto
      
           }
      
       Admin.push(Estudiante);
      res.status(201).send()
       
      } catch {
      res.status(500).send()
      }
      
      });
      app.delete('/Admin/:id' ,(req,res )=>{

        const {id}=req.params;
        under.each(Admin,(noti,i)=>
        {
          if (noti.id==id){
            Admin.splice(i,1);
          }
         
        }) 
        res.send(Admin);
      })
 ////// Catedratico


  const Catedratico= [

  { id:"1",
    Registro:'20180333',
    Nombre:'Lucas',
    Fecha: '20/10/1999',
    Correo :'juandiegoAlvarado@gmail.com',
    Universidad :'SanCARLOS',

    Nickname:'Jd',
    Contraseña :'124'
    }
    ] 
    app.get('/Catedratico', (req, res )=>{
       res.json(Catedratico)
    });
    
    app.post('/Catedratico', (req, res )=>{
     try{
        const Estudiante ={
          id:req.body.id,
          Registro: req.body.Registro,
          Nombre:req.body.Nombre,
          Fecha: req.body.Fecha,
    
          Correo :req.body.Correo,
          Universidad :req.body.Universidad,

          Nickname:req.body.Nickname,
          Contraseña :req.body.Contraseña
     }
    
Catedratico.push(Estudiante);
    res.status(201).send()
     
    } catch {
    res.status(500).send()
    }
    
    });
    app.delete('/Catedratico/:id' ,(req,res )=>{

      const {id}=req.params;
      under.each(Catedratico,(noti,i)=>
      {
        if (noti.id==id){
        Catedratico.splice(i,1);
        }
       
      }) 
      res.send(Catedratico);
    })
 
 ////Colaborador

 const colaborador = [

  { id:"10",
    Carne:'20180333',
    Nombre:'Pablo',
    Fecha: '20/10/1999',
    Telefono :'57789797',
    Correo :'12',

    Nickname:'Jd',
    Contraseña :'124'
    }
    ] 
    app.get('/colaborador', (req, res )=>{
       res.json(colaborador)
    });
    
    app.post('/colaborador', (req, res )=>{
     try{
        const Estudiante ={
          id:req.body.id,
          Carne: req.body.Carne,
          Nombre:req.body.Nombre,
          Fecha: req.body.Fecha,
          Telefono :req.body.Telefono,
          Correo :req.body.Correo,
       
          Nickname:req.body.Nickname,
          Contraseña :req.body.Contraseña
     }
    
colaborador.push(Estudiante);
    res.status(201).send()
     
    } catch {
    res.status(500).send()
    }
    
    });
    app.delete('/colaborador/:id' ,(req,res )=>{

      const {id}=req.params;
      under.each(colaborador,(noti,i)=>
      {
        if (noti.id==id){
          colaborador.splice(i,1);
        }
       
      }) 
      res.send(cursos);
    })
 
/////CursosUsuario


const CursoUsuario = [

  { 
    Curso:'20180333',
    
    }, { 
      Curso:'2asdasd',
  
      }
    ] 
    app.get('/CursoUsuario', (req, res )=>{
       res.json(CursoUsuario)
    });
    
    app.post('/CursoUsuario', (req, res )=>{
     try{
        const Estudiante ={
      
          Curso: req.body.Curso,
   
          
     }
    
CursoUsuario.push(Estudiante);
    res.status(201).send()
    
    } catch {
    res.status(500).send()
    }
    
    });
    app.delete('/CursoUsuario/' ,(req,res )=>{

    
      under.each(CursoUsuario,(noti,i)=>
      {
    
       CursoUsuario.splice(i,1);
       
       
      }) 
      res.send(CursoUsuario);
    })

    /////Asignacion Cursos



    const AsignarCurso = [

      { id:"1",
      idUsuario:"1",
        Curso:'20180333',
        NombreUsuario:'Iker',
        }, { id:"2",
        idUsuario:"1",
          Curso:'2asdasd',
          NombreUsuario:'Iker',
          }
        ] 
        app.get('/AsignarCurso', (req, res )=>{
           res.json(AsignarCurso)
        });
        
        app.post('/AsignarCurso', (req, res )=>{
         try{
            const Estudiante ={
            id:req.body.id,
            idUsuario:req.body.idUsuario,
              Curso: req.body.Curso,
              NombreUsuario:req.body.NombreUsuario,
              
         }
        
    AsignarCurso.push(Estudiante);
        res.status(201).send()
         
        } catch {
        res.status(500).send()
        }
        
        });
        app.delete('/AsignarCurso/:id' ,(req,res )=>{
    
          const {id}=req.params;
          under.each(AsignarCurso,(noti,i)=>
          {
            if (noti.id==id){
              AsignarCurso.splice(i,1);
            }
           
          }) 
          res.send(AsignarCurso);
        })
////Asignacio Actidad


const AsignarActividad = [

  { idUsuario:"1",
    Actividad:'20180333',
    NombreUsuario:'Lucas',
    }
    ] 
    app.get('/AsignarActividad', (req, res )=>{
       res.json(AsignarActividad)
    });
    
    app.post('/AsignarActividad', (req, res )=>{
     try{
        const Estudiante ={
          id:req.body.id,
          idUsuario:req.body.idUsuario,
          Actividad: req.body.Actividad,
          NombreUsuario:req.body.NombreUsuario,
          
     }
    
AsignarActividad.push(Estudiante);
    res.status(201).send()
     
    } catch {
    res.status(500).send()
    }
    
    });
    app.delete('/AsignarActividad/:id' ,(req,res )=>{

      const {id}=req.params;
      under.each(AsignarActividad,(noti,i)=>
      {
        if (noti.id==id){
          AsignarActividad.splice(i,1);
        }
       
      }) 
      res.send(AsignarActividad);
    })
  ///// Estudiante

  const Estudiantes = [
{  id:"1",
Carne:'20180333',
Nombre:'Iker ',
Fecha: '20/10/1999',
Telefono :'57789797',
Correo :'1234',
Universidad :'SanCARLOS',
Nacionalidad :'Guatemalteca',
Nickname:'Jd',
Contraseña :'124'
},
{  id:"2",
  Carne:'20180333',
  Nombre:'Juan ',
  Fecha: '20/10/1999',
  Telefono :'57789797',
  Correo :'Alvarado0@gmail.com',
  Universidad :'SanCARLOS',
  Nacionalidad :'Guatemalteca',
  Nickname:'Jd',
  Contraseña :'1244'
  }
  ] 
  app.get('/Estudiantes', (req, res )=>{
     res.json(Estudiantes)
  });
  
  app.post('/Estudiantes', (req, res )=>{
   try{
      const Estudiante ={
        id:req.body.id,
        Carne: req.body.Carne,
        Nombre:req.body.Nombre,
        Fecha: req.body.Fecha,
        Telefono :req.body.Telefono,
        Correo :req.body.Correo,
        Universidad :req.body.Universidad,
        Nacionalidad :req.body.Nacionalidad,
        Nickname:req.body.Nickname,
        Contraseña :req.body.Contraseña
   }
  
   Estudiantes.push(Estudiante);
  res.status(201).send()
   
  } catch {
  res.status(500).send()
  }
  
  });
  app.delete('/Estudiantes/:id' ,(req,res )=>{

    const {id}=req.params;
    under.each(Estudiantes,(noti,i)=>
    {
      if (noti.id==id){
        Estudiantes.splice(i,1);
      }
     
    }) 
    res.send(Estudiantes);
  })
///// Cursos
const cursos =[
    {   id:"1",
        Nombre :"Mateeeee2",
        Codigo:"088",
       Seccion :"A",
       Universidad :"UNAM",
       Titular:"FAZT"
      
    }
]


app.get('/cursos', (req, res )=>{
  res.json(cursos)
});

app.post('/cursos', (req, res )=>{
try{
   const noticia ={
     id:req.body.id,
  Nombre:req.body.Nombre,
 Codigo:req.body.Codigo,
   Seccion:req.body.Seccion, 
Universidad: req.body.Universidad,
Titular: req.body.Titular

}

cursos.push(noticia);
res.status(201).send()

} catch {
res.status(500).send()
}

});
app.delete('/cursos/:id' ,(req,res )=>{

  const {id}=req.params;
  under.each(cursos,(noti,i)=>
  {
    if (noti.id==id){
      cursos.splice(i,1);
    }
   
  }) 
  res.send(cursos);
})

//// usuarios
const users= [ 
 
{   nombre:"juan ",
    carne :"201807335",
    curso:cursos[0].nombre
}
 ]




app.get('/users', (req, res )=>{




    res.json(users)
})
app.delete('/users/:id' ,(req,res )=>{

  const {id}=req.params;
  under.each(users,(noti,i)=>
  {
    if (noti.id==id){
      users.splice(i,1);
    }
   
  }) 
  res.send(users);
})
//////// noticias
const noticias=[
    {    id :"1",
        Titulo:"Comida",
    Noticia:"req.body.Noticia",
     Usuario:"req.body.Usuario", 
  Comentario: "req.body.Comentario"
    } ]



app.get('/noticias', (req, res )=>{
   res.json(noticias)
});

app.post('/noticias', (req, res )=>{
 try{
    const noticia ={
      id:req.body.id,
   Titulo:req.body.Titulo,
  Noticia:req.body.Noticia,
   Usuario:req.body.Usuario, 
Comentario: req.body.Comentario


 }

 noticias.push(noticia);
res.status(201).send()
 
} catch {
res.status(500).send()
}

});
app.put('/noticias/: id', (req,res) =>
{
const {Titulo,Noticia,Usuario,Comentario} =req.body;
const newNoticia ={ Titulo,Noticia,Usuario,Comentario};
noticias.findByIdAndUpdate(req.params.id,newNoticia);
res,json({status :'Actualizada'});

});

app.delete('/noticias/:id' ,(req,res )=>{

  const {id}=req.params;
  under.each(noticias,(noti,i)=>
  {
    if (noti.id==id){
      noticias.splice(i,1);
    }
   
  }) 
  res.send(noticias);
})
//////Actividades
const Actividades=[{
  Fecha:"20/20/2019",
  id:"1",
  Hora:"8:00 pm",
  Lugar:"Parque de ACTIVIDADES",
  Tipo:"Diversion",
  Cantidad:"10",
  Expositor:"Alejandro Sanza",
  Descripcion:" Sera de gran alegria"
}
]


app.get('/actividades', (req, res )=>{
  res.json(Actividades)
});

app.post('/actividades', (req, res )=>{
try{
   const actividad ={
    id:req.body.id,
    Fecha:req.body.Fecha,
  Hora:req.body.Hora,
 Lugar:req.body.Lugar,
  Tipo:req.body.Tipo, 
Expositor: req.body.Expositor,
Cantidad:req.body.Cantidad,
Descripcion:req.body.Descripcion


}

Actividades.push(actividad);
res.status(201).send()

} catch {
res.status(500).send()
}

});
app.delete('/actividades/:id' ,(req,res )=>{

  const {id}=req.params;
  under.each(Actividades,(noti,i)=>
  {
    if (noti.id==id){
      Actividades.splice(i,1);
    }
   
  }) 
  res.send(Actividades);
})
app.put('/actividades/: id', (req,res) =>
{
const {Titulo,Noticia,Usuario,Comentario} =req.body;
const newNoticia ={ Titulo,Noticia,Usuario,Comentario};
noticias.findByIdAndUpdate(req.params.id,newNoticia);
res,json({status :'Actualizada'});

});
////  Inventario 
const Inventario=[
  {
    id:"1",
codigo :"1",
Nombre :"Silla",
Descripcion:"Para que te sientes ",
Cantidad:"2",
Persona :users[0].nombre,
Ubicacion:"Bodega 1",
Estado :"Utilizado"

  }
]

app.get('/Inventario', (req, res )=>{
  res.json(Inventario)
});

app.post('/Inventario', (req, res )=>{
try{

   const  Inventarios ={
    id:req.body.id,
    codigo:req.body.codigo,
 Nombre:req.body.Nombre,
 Descripcion:req.body.Descripcion,
  Cantidad:req.body.Cantidad, 
Persona: req.body.Persona,
Ubicacion:req.body.Ubicacion,
Estado:req.body.Estado


}

 Inventario.push(Inventarios);
res.status(201).send()

} catch {
res.status(500).send()
}

});

app.delete('/Inventario/:id' ,(req,res )=>{

  const {id}=req.params;
  under.each(Inventario,(noti,i)=>
  {
    if (noti.id==id){
      Inventario.splice(i,1);
    }
   
  }) 
  res.send(Inventario);
})
//// Contactos 

const Contactos=[
  {
    id:"1",

Nombre :"Herman Cortez",
Telefono :"24779874",
Correo:"Juandiego@gmail.com",
Direccion :"2ave z1 Guatemala",
Rol:"Conferencista",
Oportunidades :"Prestamo",
Encargado:Admin[0].Nombre
  }
]

app.get('/Contactos', (req, res )=>{
  res.json(Contactos)
});

app.post('/Contactos', (req, res )=>{
try{

   const  Contacto ={
    id:req.body.id,
    Registro:req.body.Registro,
 Nombre:req.body.Nombre,
 Telefono:req.body.Telefono,
 
 Correo:req.body.Correo,
Direccion:req.body.Direccion,
Rol:req.body.Rol,
Oportunidades:req.body.Oportunidades,
Encargado: req.body.Encargado


}

 Contactos.push(Contacto);
res.status(201).send()

} catch {
res.status(500).send()
}

});

app.delete('/Contactos/:id' ,(req,res )=>{

  const {id}=req.params;
  under.each(Contactos,(noti,i)=>
  {
    if (noti.id==id){
      Contactos.splice(i,1);
    }
   
  }) 
  res.send(Contactos);
})




////// Egresos
const Egreso=[{
  id:"1",
NoFactura:"6549848949868515",
Total:100,
Descripcion:"Por  pobre",
Fecha :"20/10/2019"}

]


app.get('/Egreso', (req, res )=>{
  res.json(Egreso)
});

app.post('/Egreso', (req, res )=>{
try{
   const actividad ={
    id:req.body.id,
    NoFactura:req.body.NoFactura,
     Descripcion:req.body.Descripcion,
 Total:req.body.Total,
  Fecha:req.body.Fecha

}

Egreso.push(actividad);
res.status(201).send()

} catch {
res.status(500).send()
}

});
app.delete('/Egreso/:id' ,(req,res )=>{

  const {id}=req.params;
  under.each(Egreso,(noti,i)=>
  {
    if (noti.id==id){
      Egreso.splice(i,1);
    }
   
  }) 
  res.send(Egreso);
})


////// Ingresos
const Ingreso=[{
  id:"1",
Concepto :"Donativo",
Total:10,
Codigo:"1",
Fecha :"20/10/2019"},
{
  id:"2",
Concepto :"Donativo",
Total:10,
Codigo:"1",
Fecha :"20/10/2019"}

]


app.get('/Ingreso', (req, res )=>{
  res.json(Ingreso)
});

app.post('/Ingreso', (req, res )=>{
try{
   const actividad ={
    id:req.body.id,
    Concepto:req.body.Concepto,
  Total:req.body.Total,
 Codigo:req.body.Codigo,
  Fecha:req.body.Fecha,
  Nombre:req.body.Nombre,
   
}


Ingreso.push(actividad);
res.status(201).send()

} catch {
res.status(500).send()
}

});
app.post('/Ingreso', (req, res )=>{
  try{
     const actividad ={
      id:req.body.id,
      Concepto:req.body.Concepto,
      Nombre:req.body.Nombre,
   
      Total:req.body.Total,

  
  }
  
  
  Ingreso.push(actividad);
  res.status(201).send()
  
  } catch {
  res.status(500).send()
  }
  
  });

app.delete('/Ingreso/:id' ,(req,res )=>{

  const {id}=req.params;
  under.each(Ingreso,(noti,i)=>
  {
    if (noti.id==id){
      Ingreso.splice(i,1);
    }
   
  }) 
  res.send(Ingreso);
})
//// servidor

app.listen(3200);   


