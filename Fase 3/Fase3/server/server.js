const express = require('express')
const app = express()
const under = require('underscore');
const fs = require('fs')
app.use(express.json())

app.use(function (req, res, next) {
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

////Calificar Actividad


const Calificacion = fs.readFileSync('CalificacionActividad.json', 'utf-8')
const CalificacionActividad = JSON.parse(Calificacion);
app.get('/CalificacionActividad', (req, res) => {
  res.json(CalificacionActividad)
});

app.post('/CalificacionActividad', (req, res) => {
  try {
    const Estudiante = {
      Usuario: req.body.Usuario,
      Comentario: req.body.Comentario,
      Calificacion :req.body.Calificacion ,
      id:req.body.id,
      Actividad:req.body.Actividad,
      Tipo:req.body.Tipo
    }

    CalificacionActividad.push(Estudiante);
    res.status(201).send()
    const json_Calificacion = JSON.stringify(CalificacionActividad)
    fs.writeFileSync('CalificacionActividad.json', json_Calificacion, 'utf-8')

  } catch {
    res.status(500).send()
  }

});
app.delete('/CalificacionActividad/:id', (req, res) => {

  const { id } = req.params;
  under.each(CalificacionActividad, (noti, i) => {
    if (noti.id == id) {
      CalificacionActividad.splice(i, 1);
    }

  })
  res.send(CalificacionActividad);
})



/////Registro Actividades



const Registro = fs.readFileSync('RegistroActividades.json', 'utf-8')
const RegistroActividades = JSON.parse(Registro);
app.get('/RegistroActividades', (req, res) => {
  res.json(RegistroActividades)
});

app.post('/RegistroActividades', (req, res) => {
  try {
    const Estudiante = {
      Usuario: req.body.Usuario,
      Actividad: req.body.Actividad,
      Valor :req.body.Valor ,
      idPago : req.body.idPago,
      id:req.body.id,
      Tipo:req.body.Tipo
      
    }

    RegistroActividades.push(Estudiante);
    res.status(201).send()
    const json_Registro = JSON.stringify(RegistroActividades)
    fs.writeFileSync('RegistroActividades.json', json_Registro, 'utf-8')

  } catch {
    res.status(500).send()
  }

});
app.delete('/RegistroActividades/:id', (req, res) => {

  const { id } = req.params;
  under.each(RegistroActividades, (noti, i) => {
    if (noti.id == id) {
      RegistroActividades.splice(i, 1);
    }

  })
  res.send(RegistroActividades);
})

////Denuncia  

const Denun = fs.readFileSync('Denuncia.json', 'utf-8')
const Denuncia = JSON.parse(Denun);
app.get('/Denuncia', (req, res) => {
  res.json(Denuncia)
});

app.post('/Denuncia', (req, res) => {
  try {
    const Estudiante = {
      Estado: req.body.Estado,
      Comentario: req.body.Comentario,
  Descripcion: req.body.Descripcion
    
    }

    Denuncia.push(Estudiante);
    res.status(201).send()
    const json_Denuncia = JSON.stringify(Denuncia)
    fs.writeFileSync('Denuncia.json', json_Denuncia, 'utf-8')

  } catch {
    res.status(500).send()
  }

});



/////Comentario 

const Comen = fs.readFileSync('Comentario.json', 'utf-8')
const Comentario = JSON.parse(Comen);
app.get('/Comentario', (req, res) => {
  res.json(Comentario)
});

app.post('/Comentario', (req, res) => {
  try {
    const Estudiante = {
      Usuario: req.body.Usuario,
      Comentario: req.body.Comentario,
  Noticia: req.body.Noticia
    
    }

    Comentario.push(Estudiante);
    res.status(201).send()
    const json_Comentario = JSON.stringify(Comentario)
    fs.writeFileSync('Comentario.json', json_Comentario, 'utf-8')

  } catch {
    res.status(500).send()
  }

});
app.delete('/Comentario/: Noticia', (req, res) => {

  const { Noticia } = req.params;
  under.each(Comentario, (noti, i) => {
    if (noti.Noticia === Noticia) {
    Comentario.splice(i, 1);
  consle.log("borrado")
  }

  })
  res.send(Comentario);
})




//////Mensajes

const Mensa = fs.readFileSync('Mensajes.json', 'utf-8')
const Mensaje = JSON.parse(Mensa);
app.get('/Mensaje', (req, res) => {
  res.json(Mensaje)
});

app.post('/Mensaje', (req, res) => {
  try {
    const Estudiante = {
      Usuario: req.body.Usuario,
      Mensaje: req.body.Mensaje,
      Destinatario: req.body.Destinatario

    }

    Mensaje.push(Estudiante);
    res.status(201).send()
    const json_Mensaje = JSON.stringify(Mensaje)
    fs.writeFileSync('Mensajes.json', json_Mensaje, 'utf-8')

  } catch {
    res.status(500).send()
  }

});
app.delete('/Solicitud/:id', (req, res) => {

  const { id } = req.params;
  under.each(Solicitud, (noti, i) => {
    if (noti.id == id) {
      Solicitud.splice(i, 1);
    }

  })
  res.send(Solicitud);
})












/////Solicitudes

const Soli = fs.readFileSync('Solicitud.json', 'utf-8')
const Solicitud = JSON.parse(Soli);
app.get('/Solicitud', (req, res) => {
  res.json(Solicitud)
});

app.post('/Solicitud', (req, res) => {
  try {
    const Estudiante = {
      id: req.body.id,

      Estado: req.body.Estado,
      NombreUsuario: req.body.NombreUsuario,
      Amigo: req.body.Amigo

    }

    Solicitud.push(Estudiante);
    res.status(201).send()
    const json_Solicitud = JSON.stringify(Solicitud)
    fs.writeFileSync('Solicitud.json', json_Solicitud, 'utf-8')

  } catch {
    res.status(500).send()
  }

});
app.delete('/Solicitud/:id', (req, res) => {

  const { id } = req.params;
  under.each(Solicitud, (noti, i) => {
    if (noti.id == id) {
      Solicitud.splice(i, 1);
    }

  })
  res.send(Solicitud);
})

////Login


const Login = [

  {

    Correo: 'Jd',
    Contraseña: '124'
  }
]
app.get('/Login', (req, res) => {
  res.json(Login)
});

app.post('/Login', (req, res) => {
  try {
    const Estudiante = {

      Correo: req.body.Correo,
      Contraseña: req.body.Contraseña,
      Tipo: req.body.Tipo
    }

    Login.push(Estudiante);
    res.status(201).send()

  } catch {
    res.status(500).send()
  }

});

//// Administradores
const Ad = fs.readFileSync('Admin.json', 'utf-8')
const Admin = JSON.parse(Ad);
app.get('/Admin', (req, res) => {
  res.json(Admin)
});

app.post('/Admin', (req, res) => {
  try {
    const Estudiante = {
      id: req.body.id,
      Carne: req.body.Carne,
      Nombre: req.body.Nombre,
      Fecha: req.body.Fecha,
      Telefono: req.body.Telefono,
      Correo: req.body.Correo,

      Nickname: req.body.Nickname,
      Contraseña: req.body.Contraseña,
      Puesto: req.body.Puesto

    }

    Admin.push(Estudiante);
    res.status(201).send()
    const json_Admin = JSON.stringify(Admin)
    fs.writeFileSync('Admin.json', json_Admin, 'utf-8')

  } catch {
    res.status(500).send()
  }

});
app.delete('/Admin/:id', (req, res) => {

  const { id } = req.params;
  under.each(Admin, (noti, i) => {
    if (noti.id == id) {
      Admin.splice(i, 1);
    }

  })
  res.send(Admin);
})
////// Catedratico


const maestro = fs.readFileSync('Catedratico.json', 'utf-8')
const Catedratico = JSON.parse(maestro);

app.get('/Catedratico', (req, res) => {
  res.json(Catedratico)
});

app.post('/Catedratico', (req, res) => {
  try {
    const Estudiante = {
      id: req.body.id,
      Registro: req.body.Registro,
      Nombre: req.body.Nombre,
      Fecha: req.body.Fecha,

      Correo: req.body.Correo,
      Universidad: req.body.Universidad,

      Nickname: req.body.Nickname,
      Contraseña: req.body.Contraseña
    }

    Catedratico.push(Estudiante);
    res.status(201).send()

    const json_Catedratico = JSON.stringify(Catedratico)
    fs.writeFileSync('Catedratico.json', json_Catedratico, 'utf-8')
  } catch {
    res.status(500).send()
  }

});
app.delete('/Catedratico/:id', (req, res) => {

  const { id } = req.params;
  under.each(Catedratico, (noti, i) => {
    if (noti.id == id) {
      Catedratico.splice(i, 1);
    }

  })
  res.send(Catedratico);
})

////Colaborador
const Colaborador = fs.readFileSync('Colaborador.json', 'utf-8')
const colaborador = JSON.parse(Colaborador);
app.get('/colaborador', (req, res) => {
  res.json(colaborador)
});

app.post('/colaborador', (req, res) => {
  try {
    const Estudiante = {
      id: req.body.id,
      Carne: req.body.Carne,
      Nombre: req.body.Nombre,
      Fecha: req.body.Fecha,
      Telefono: req.body.Telefono,
      Correo: req.body.Correo,

      Nickname: req.body.Nickname,
      Contraseña: req.body.Contraseña
    }

    colaborador.push(Estudiante);
    res.status(201).send()
    const json_colaborador = JSON.stringify(colaborador)
    fs.writeFileSync('colaborador.json', json_colaborador, 'utf-8')

  } catch {
    res.status(500).send()
  }

});
app.delete('/colaborador/:id', (req, res) => {

  const { id } = req.params;
  under.each(colaborador, (noti, i) => {
    if (noti.id == id) {
      colaborador.splice(i, 1);
    }

  })
  res.send(cursos);
})

/////CursosUsuario


const CursoUsuario = [

  {
    Curso: '20180333',

  }, {
    Curso: '2asdasd',

  }
]
app.get('/CursoUsuario', (req, res) => {
  res.json(CursoUsuario)
});

app.post('/CursoUsuario', (req, res) => {
  try {
    const Estudiante = {

      Curso: req.body.Curso,


    }

    CursoUsuario.push(Estudiante);
    res.status(201).send()

  } catch {
    res.status(500).send()
  }

});
app.delete('/CursoUsuario/', (req, res) => {


  under.each(CursoUsuario, (noti, i) => {

    CursoUsuario.splice(i, 1);


  })
  res.send(CursoUsuario);
})

/////Asignacion Cursos



const Asignacion1 = fs.readFileSync('AsignarCurso.json', 'utf-8')
const AsignarCurso = JSON.parse(Asignacion1);
app.get('/AsignarCurso', (req, res) => {
  res.json(AsignarCurso)
});

app.post('/AsignarCurso', (req, res) => {
  try {
    const Estudiante = {
      id: req.body.id,
      idUsuario: req.body.idUsuario,
      Curso: req.body.Curso,
      NombreUsuario: req.body.NombreUsuario,

    }

    AsignarCurso.push(Estudiante);
    res.status(201).send()
    const json_AsignarCurso = JSON.stringify(AsignarCurso)
    fs.writeFileSync('AsignarCurso.json', json_AsignarCurso, 'utf-8')

  } catch {
    res.status(500).send()
  }

});
app.delete('/AsignarCurso/:id', (req, res) => {

  const { id } = req.params;
  under.each(AsignarCurso, (noti, i) => {
    if (noti.id == id) {
      AsignarCurso.splice(i, 1);
    }

  })
  res.send(AsignarCurso);
})
////Asignacio Actidad

const Asignar2 = fs.readFileSync('AsignarActividad.json', 'utf-8')
const AsignarActividad = JSON.parse(Asignar2);


app.get('/AsignarActividad', (req, res) => {
  res.json(AsignarActividad)

});

app.post('/AsignarActividad', (req, res) => {
  try {
    const Estudiante = {
      id: req.body.id,
      idUsuario: req.body.idUsuario,
      Actividad: req.body.Actividad,
      NombreUsuario: req.body.NombreUsuario,

    }

    AsignarActividad.push(Estudiante);
    res.status(201).send()
    const json_AsignarActividad = JSON.stringify(AsignarActividad)
    fs.writeFileSync('AsignarActividad.json', json_AsignarActividad, 'utf-8')

  } catch {
    res.status(500).send()
  }

});
app.delete('/AsignarActividad/:id', (req, res) => {

  const { id } = req.params;
  under.each(AsignarActividad, (noti, i) => {
    if (noti.id == id) {
      AsignarActividad.splice(i, 1);
    }

  })
  res.send(AsignarActividad);
})
///// Estudiante
const Estudiantee = fs.readFileSync('Estudiantes.json', 'utf-8')
const Estudiantes = JSON.parse(Estudiantee);

app.get('/Estudiantes', (req, res) => {
  res.json(Estudiantes)
});

app.post('/Estudiantes', (req, res) => {
  try {
    const Estudiante = {
      id: req.body.id,
      Carne: req.body.Carne,
      Nombre: req.body.Nombre,
      Fecha: req.body.Fecha,
      Telefono: req.body.Telefono,
      Correo: req.body.Correo,
      Universidad: req.body.Universidad,
      Nacionalidad: req.body.Nacionalidad,
      Nickname: req.body.Nickname,
      Contraseña: req.body.Contraseña
    }

    Estudiantes.push(Estudiante);
    res.status(201).send()
    const json_Estudiante = JSON.stringify(Estudiantes)
    fs.writeFileSync('Estudiantes.json', json_Estudiante, 'utf-8')

  } catch {
    res.status(500).send()
  }

});
app.delete('/Estudiantes/:id', (req, res) => {

  const { id } = req.params;
  under.each(Estudiantes, (noti, i) => {
    if (noti.id == id) {
      Estudiantes.splice(i, 1);
    }

  })
  res.send(Estudiantes);
})
///// Cursos
const Cursoo = fs.readFileSync('Cursos.json', 'utf-8')
const cursos = JSON.parse(Cursoo);

app.get('/cursos', (req, res) => {
  res.json(cursos)
});

app.post('/cursos', (req, res) => {
  try {
    const noticia = {
      id: req.body.id,
      Nombre: req.body.Nombre,
      Codigo: req.body.Codigo,
      Seccion: req.body.Seccion,
      Universidad: req.body.Universidad,
      Titular: req.body.Titular

    }

    cursos.push(noticia);
    res.status(201).send()
    const json_cursos = JSON.stringify(cursos)
    fs.writeFileSync('Cursos.json', json_cursos, 'utf-8')

  } catch {
    res.status(500).send()
  }

});


app.put('/Cursos/:id', (req, res) => {
  const { id } = req.params;
  const inven = {
    id: req.body.id,
    Nombre: req.body.Nombre,
    Codigo: req.body.Codigo,
    Seccion: req.body.Seccion,
    Universidad: req.body.Universidad,
    Titular: req.body.Titular

  }
  _.each(Cursos, (inv, i) => {
    if (inv.id == id) {
      try {
        Cursos[i] = inven;
        Cursos[i].id = id;

        res.status(201).send();

      }

      catch {
        res.status(500).send()
      }
    }
  })
  res.json('Editada')
})
app.delete('/cursos/:id', (req, res) => {

  const { id } = req.params;
  under.each(cursos, (noti, i) => {
    if (noti.id == id) {
      cursos.splice(i, 1);
    }

  })
  res.send(cursos);
})

//// usuarios
const users = [

  {
    nombre: "juan ",
    carne: "201807335",
    curso: cursos[0].nombre
  }
]




app.get('/users', (req, res) => {




  res.json(users)
})
app.delete('/users/:id', (req, res) => {

  const { id } = req.params;
  under.each(users, (noti, i) => {
    if (noti.id == id) {
      users.splice(i, 1);
    }

  })
  res.send(users);
})
//////// noticias

const Noti = fs.readFileSync('Noticias.json', 'utf-8')
const noticias = JSON.parse(Noti);



app.get('/noticias', (req, res) => {
  res.json(noticias)
});

app.post('/noticias', (req, res) => {
  try {
    const noticia = {
      id: req.body.id,
      Titulo: req.body.Titulo,
      Noticia: req.body.Noticia,
      Usuario: req.body.Usuario,
      Comentario: req.body.Comentario


    }

    noticias.push(noticia);
    res.status(201).send()
    const json_noticias = JSON.stringify(noticias)
    fs.writeFileSync('Noticias.json', json_noticias, 'utf-8')

  } catch {
    res.status(500).send()
  }

});
app.put('/noticias/: id', (req, res) => {
  const { Titulo, Noticia, Usuario, Comentario } = req.body;
  const newNoticia = { Titulo, Noticia, Usuario, Comentario };
  noticias.findByIdAndUpdate(req.params.id, newNoticia);
  res, json({ status: 'Actualizada' });

});

app.delete('/noticias/:id', (req, res) => {

  const { id } = req.params;
  under.each(noticias, (noti, i) => {
    if (noti.id == id) {
      noticias.splice(i, 1);
    }

  })
  res.send(noticias);
})
//////Actividades
const Acti = fs.readFileSync('Actividades.json', 'utf-8')
const Actividades = JSON.parse(Acti);

app.get('/actividades', (req, res) => {
  res.json(Actividades)
});

app.post('/actividades', (req, res) => {
  try {
    const actividad = {
      id: req.body.id,
      Fecha: req.body.Fecha,
      Hora: req.body.Hora,
      Lugar: req.body.Lugar,
      Tipo: req.body.Tipo,
      Expositor: req.body.Expositor,
      Cantidad: req.body.Cantidad,
      Descripcion: req.body.Descripcion


    }

    Actividades.push(actividad);
    res.status(201).send()
    const json_Actividades = JSON.stringify(Actividades)
    fs.writeFileSync('Actividades.json', json_Actividades, 'utf-8')

  } catch {
    res.status(500).send()
  }

});
app.delete('/actividades/:id', (req, res) => {

  const { id } = req.params;
  under.each(Actividades, (noti, i) => {
    if (noti.id == id) {
      Actividades.splice(i, 1);
    }

  })
  res.send(Actividades);
})
app.put('/actividades/: id', (req, res) => {
  const { Titulo, Noticia, Usuario, Comentario } = req.body;
  const newNoticia = { Titulo, Noticia, Usuario, Comentario };
  noticias.findByIdAndUpdate(req.params.id, newNoticia);
  res, json({ status: 'Actualizada' });

});
////  Inventario 
const Invent = fs.readFileSync('Inventario.json', 'utf-8')
const Inventario = JSON.parse(Invent);

app.get('/Inventario', (req, res) => {
  res.json(Inventario)
});

app.post('/Inventario', (req, res) => {
  try {

    const Inventarios = {
      id: req.body.id,
      codigo: req.body.codigo,
      Nombre: req.body.Nombre,
      Descripcion: req.body.Descripcion,
      Cantidad: req.body.Cantidad,
      Persona: req.body.Persona,
      Ubicacion: req.body.Ubicacion,
      Estado: req.body.Estado,
       Usuario:req.body.Usuario,
       Comida:req.body.Comida,
       Insumo:req.body.Insumo,

       Carne:req.body.Carne

    }

    Inventario.push(Inventarios);
    res.status(201).send()

    const json_Inventario = JSON.stringify(Inventario)
    fs.writeFileSync('Inventario.json', json_Inventario, 'utf-8')

  } catch {
    res.status(500).send()
  }

});

app.delete('/Inventario/:id', (req, res) => {

  const { id } = req.params;
  under.each(Inventario, (noti, i) => {
    if (noti.id == id) {
      Inventario.splice(i, 1);
    }

  })
  res.send(Inventario);
})
//// Contactos 

const Contact = fs.readFileSync('Contacto.json', 'utf-8')
const Contactos = JSON.parse(Contact);


app.get('/Contactos', (req, res) => {
 
  res.json(Contactos)
});


app.get('/Contactos/Telefono', (req, res) => {
  ordenar(Contactos,'Telefono')
  res.json(Contactos)
});
app.get('/Contactos/Nombre', (req, res) => {
  ordenar(Contactos,'Nombre')
  res.json(Contactos)
});


app.get('/Contactos/Correo', (req, res) => {
  ordenar(Contactos,'Correo')
  res.json(Contactos)
});

function ordenar(p_array_json, p_key) {
  p_array_json.sort(function (a, b) {
     return a[p_key] > b[p_key];
  });
}
app.post('/Contactos', (req, res) => {
  try {

    const Contacto = {
      id: req.body.id,
      Registro: req.body.Registro,
      Nombre: req.body.Nombre,
      Telefono: req.body.Telefono,

      Correo: req.body.Correo,
      Direccion: req.body.Direccion,
      Rol: req.body.Rol,
      Oportunidades: req.body.Oportunidades,
      Encargado: req.body.Encargado


    }


    Contactos.push(Contacto);
    res.status(201).send()
    const json_contactos = JSON.stringify(Contactos)
    fs.writeFileSync('Contacto.json', json_contactos, 'utf-8')

  } catch {
    res.status(500).send()
  }

});



app.put('/Contactos/:id', (req, res) => {
  const { id } = req.params;
  const inven = {
    id: req.body.id,
    Registro: req.body.Registro,
    Nombre: req.body.Nombre,
    Telefono: req.body.Telefono,
    Correo: req.body.Correo,
    Direccion: req.body.Direccion,
    Rol: req.body.Rol,
    Oportunidades: req.body.Oportunidades,
    Encargado: req.body.Encargado

  }
  _.each(Contactos, (inv, i) => {
    if (inv.id === id) {
      try {
        Contactos[i] = inven;
        Contactos[i].id = id;

        res.status(201).send();

      }

      catch {
        res.status(500).send()
      }
    }
  })
  res.json('Editada')
})

app.delete('/Contactos/:id', (req, res) => {

  const { id } = req.params;
  under.each(Contactos, (noti, i) => {
    if (noti.id == id) {
      Contactos.splice(i, 1);
    }

  })
  res.send(Contactos);
})




////// Egresos
const Egresos = fs.readFileSync('Egreso.json', 'utf-8')
const Egreso = JSON.parse(Egresos);
app.get('/Egreso', (req, res) => {
  res.json(Egreso)
});

app.post('/Egreso', (req, res) => {
  try {
    const actividad = {
      id: req.body.id,
      NoFactura: req.body.NoFactura,
      Descripcion: req.body.Descripcion,
      Total: req.body.Total,
      Fecha: req.body.Fecha

    }

    Egreso.push(actividad);
    res.status(201).send()
    const json_Egreso = JSON.stringify(Egreso)
    fs.writeFileSync('Egreso.json', json_Egreso, 'utf-8')
  } catch {
    res.status(500).send()
  }

});
app.delete('/Egreso/:id', (req, res) => {

  const { id } = req.params;
  under.each(Egreso, (noti, i) => {
    if (noti.id == id) {
      Egreso.splice(i, 1);
    }

  })
  res.send(Egreso);
})


////// Ingresos
const Noti2 = fs.readFileSync('Ingreso.json', 'utf-8')
const Ingreso = JSON.parse(Noti2);

app.get('/Ingresos', (req, res) => {
  res.json(Ingreso)
});

app.get('/Ingreso', (req, res) => {
  res.json(Ingreso)
});

app.post('/Ingreso', (req, res) => {
  try {
    const actividad = {
      id: req.body.id,
      Concepto: req.body.Concepto,
      Total: req.body.Total,
      Codigo: req.body.Codigo,
      Fecha: req.body.Fecha,
      Nombre: req.body.Nombre,

    }


    Ingreso.push(actividad);
    res.status(201).send()

    const json_Ingreso = JSON.stringify(Ingreso)
    fs.writeFileSync('Ingreso.json', json_Ingreso, 'utf-8')

  } catch {
    res.status(500).send()
  }

});
app.post('/Ingresos', (req, res) => {
  try {
    const actividad2 = {
      id: req.body.id,
      Concepto: req.body.Concepto,
      Nombre: req.body.Nombre,
      Carne: req.body.Carne,

      Total: req.body.Total,


    }


    Ingreso.push(actividad2);
    res.status(201).send()
    const json_Ingreso = JSON.stringify(Ingreso)
    fs.writeFileSync('Ingreso.json', json_Ingreso, 'utf-8')

  } catch {
    res.status(500).send()
  }

});

app.delete('/Ingreso/:id', (req, res) => {

  const { id } = req.params;
  under.each(Ingreso, (noti, i) => {
    if (noti.id == id) {
      Ingreso.splice(i, 1);
    }

  })
  res.send(Ingreso);
})
//// servidor

app.listen(3200);


