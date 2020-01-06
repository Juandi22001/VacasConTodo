import React, { Component } from 'react';
import logo from './Mensaje.svg';
import './App.css';
import axios from 'axios';
import request from 'superagent';
import Admin from './Admin';
const a = window.localStorage.getItem('id')

class MensajeColaborador extends Component {
    constructor() {
        super();
        this.state = {

            Usuario: '',

            UsuarioR: '',
            Mensaje: '',
            Destinatario: '',

            cursos: [],
            Mensajes: [],
            Admin: [],
            colaborador: [],
            Estudiante: [],
            Catedratico: [],
            AsignarCurso: [],
            Contactos: [],
            Solicitud: []
        }
    }



    NotiCursos = async () => {
        request.get('http://localhost:3200/Cursos')
            .end((err, res) => {
                console.log(res);
                const cursos = JSON.parse(res.text);
                this.setState({

                    cursos: cursos

                });
            });

    }
    NotiSolicitud = async () => {
        request.get('http://localhost:3200/Solicitud')
            .end((err, res) => {
                console.log(res);
                const Solicitud = JSON.parse(res.text);
                this.setState({

                    Solicitud: Solicitud

                });
            });

    }


    NotiContact = async () => {
        request.get('http://localhost:3200/Contactos')
            .end((err, res) => {
                console.log(res);
                const Contactos = JSON.parse(res.text);
                this.setState({

                    Contactos: Contactos

                });
            });

    }


    NotiMensaje = async () => {

        request.get('http://localhost:3200/Mensaje')
            .end((err, res) => {
                console.log(res);
                const Mensajes = JSON.parse(res.text);
                this.setState({

                    Mensajes: Mensajes

                });
            });
    }


    Noti0 = async () => {

        request.get('http://localhost:3200/Admin')
            .end((err, res) => {
                console.log(res);
                const Admin = JSON.parse(res.text);
                this.setState({

                    Admin: Admin

                });
            });
    }

    Noti01 = async () => {

        request.get('http://localhost:3200/AsignarCurso')
            .end((err, res) => {
                console.log(res);
                const AsignarCurso = JSON.parse(res.text);
                this.setState({

                    AsignarCurso: AsignarCurso

                });
            });
    }

    Noti2 = async () => {

        request.get('http://localhost:3200/colaborador')
            .end((err, res) => {
                console.log(res);
                const colaborador = JSON.parse(res.text);
                this.setState({

                    colaborador: colaborador

                });
            });
    }
    Noti3 = async () => {

        request.get('http://localhost:3200/Estudiantes')
            .end((err, res) => {
                console.log(res);
                const Estudiante = JSON.parse(res.text);
                this.setState({

                    Estudiante: Estudiante
                });
            });
    }
    Noti4 = async () => {

        request.get('http://localhost:3200/Catedratico')
            .end((err, res) => {
                console.log(res);
                const Catedratico = JSON.parse(res.text);
                this.setState({

                    Catedratico: Catedratico
                });
            });
    }


    Noti = async () => {
        request.get('http://localhost:3200/cursos')
            .end((err, res) => {
                console.log(res);
                const cursos = JSON.parse(res.text);
                this.setState({
                    cursos: cursos
                });
            });
    }
    Delete = async (id) => {
        await axios.delete('http://localhost:3200/AsignarCurso/' + id);
        this.Noti01();
    }
    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:3200/Mensaje', this.state)
            .then(response => {
                console.log(response)
            });
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    componentDidMount() {
        this.Noti();
        this.Noti0();
        this.Noti01(); this.Noti3(); this.Noti2();
        this.Noti4(); this.NotiContact();
        this.NotiMensaje(); this.NotiSolicitud();
        this.NotiCursos();

    }


    Validar = (e) => {

        let valCurso = false;

        let valAsignacion = false;

        let valAdmin = false;
        let valColaborador = false;
        let valEstudiante = false;
        let valCatedratico = false;

        var cursos = this.state.cursos.map((c, i) => {
            if (c.Nombre === this.state.Curso) {
                valCurso = true;
            }
        });

        var AsignarCurso = this.state.AsignarCurso.map((c, i) => {
            if (c.Nombre === this.state.Curso) {
                valCurso = true;
            }
        });

        var colaborador = this.state.colaborador.map((E2, i) => {
            if (E2.Nombre === this.state.NombreUsuario) {
                valColaborador = true;
            }
        });

        var Admin = this.state.Admin.map((E, i) => {
            if (E.Nickname === this.state.Usuario) {
                valAdmin = true;
            }



        });

        var Estudiante = this.state.Estudiante.map((E3, i) => {
            if (E3.Nombre === this.state.NombreUsuario) {

                valEstudiante = true;
            }



        });


        var Catedratico = this.state.AsignarCurso.map((E3, i) => {
            if (E3.Nombre === this.state.Titular) {

                valCatedratico = true;
            }



        });

        if (valCurso === true) {
            alert('Datos Correctos')

        }

        else if (valColaborador === true) {
            alert('Datos Correctos')

        }

        else if (valEstudiante === true) {
            alert('Datos Correctos')
        }

        else if (valCatedratico === true) {
            alert('Datos Correctos')
        }
        else {
            alert("Datos incorrectos")
        }


    }


    render() {

        let ADMIN;

        let ADMIN1;

        let ADMIN2;

        let ADMIN3;

        let ADMIN4;
        let ADMIN5;
        let Mensajes = []

        var AMensajes = this.state.Mensajes.map((E2, i) => {

            var Admin_Mensajes = this.state.Estudiante.map((E, i) => {


                if (E2.Destinatario === E.Nickname && E2.Usuario === this.state.UsuarioR) {

                    Mensajes.push("Usuario:" + E2.Usuario + "----" + E2.Mensaje)
                }

            });


        });





        var E = this.state.Catedratico.map((E, i) => {
            if (E.id === a) {

                ADMIN = E.Nombre;
                this.state.Usuario = E.Nickname
                ADMIN1 = E.Nickname
                ADMIN2 = E.Nickname


            }
        });

        var A_Estudiantes = this.state.Solicitud.map((c, i) => {
            if (c.Estado === "Aceptada" && c.Amigo === ADMIN1) {
                return (




                    <option key={c.NombreUsuario}  > {c.NombreUsuario}</option>






                );
            }
        });
        var A_Estudiantes3 = this.state.Solicitud.map((c, i) => {
            if (c.Estado === "Aceptada" && c.Amigo === ADMIN1) {
                return (



                    <option key={c.Amigo}  > {c.Amigo}</option>






                );
            }
        });



        var A_Estudiantes2 = this.state.Solicitud.map((c2, i) => {
            if (c2.Estado === "Aceptada" && c2.NombreUsuario === ADMIN2) {
                return (



                    <option key={c2.NombreUsuario}  > {c2.NombreUsuario}</option>






                );
            }
        });


        var A_Estudiantes4 = this.state.Solicitud.map((c2, i) => {
            if (c2.Estado === "Aceptada" && c2.NombreUsuario === ADMIN2) {
                return (



                    <option key={c2.Amigo}  > {c2.Amigo}</option>






                );
            }
        });



        var MensajesU2 = this.state.Mensajes.map((E2, i) => {



            if (E2.Destinatario === ADMIN) {

                return (
                    <div className="card" >
                        <div className="card-body">
                            <span className="badge badge-info"> Usuario</span>

                            <h5 className="card-title">  {E2.Destinatario} </h5>

                            <span className="badge badge-info"> Mensaje</span>

                            <h5 className="card-title">  {E2.Mensaje} </h5>
                        </div>  </div>
                );
            }


        });



        var MensajesU = this.state.Mensajes.map((E2, i) => {



            if (E2.Usuario === ADMIN1) {

                return (
                    <div className="card" >
                        <div className="card-body">
                            <span className="badge badge-info"> Usuario</span>

                            <h5 className="card-title">  {E2.Destinatario} </h5>

                            <span className="badge badge-info"> Mensaje</span>

                            <h5 className="card-title">  {E2.Mensaje} </h5>
                        </div>  </div>
                );
            }


        });





        var A_colaborador = this.state.colaborador.map((c, i) => {
            return (


                <option key={c.Nickname}  > {c.Nickname}</option>






            );
        });


        var Titular = [];

        var A_Catedratico = this.state.AsignarCurso.map((c, i) => {
            var A_CURSOS = this.state.cursos.map((c2, i) => {
        var A_CURSOS2 = this.state.Estudiante.map((c3, i) => {
                if (c2.Titular === ADMIN && c.Curso === c2.Nombre &&  c.NombreUsuario===c3.Nombre) {
                    Titular.push("-----"+c.NombreUsuario+"--------"+c3.Nickname)
                }





            });


        });


        });




        const { Destinatario, Mensaje, Usuario, UsuarioR } = this.state

        return (

            <div>
                <form on onSubmit={this.submitHandler}>
                    <nav className="navbar navbar-dark bg-primary">
                        < a className="navbar-brand" href="http://localhost:3000/EnviarS" >Solicitud</a>

                        <a className="navbar-brand" href="http://localhost:3000/AsignarCursosUsuario" >Cursos</a>

                        <a className="navbar-brand" href="http://localhost:3000/PerfilEstudiante" >Perfil</a>

                        <a className="navbar-brand" href="http://localhost:3000/AsignarActividadUsuario" >Actividad</a>
                        <a className="navbar-brand" href="http://localhost:3000/ComentarNoticia" >Actividad</a>

                    </nav>

                    <h1><span className="badge badge-primary">Mis mensajes </span>

                    </h1>
                    <h2><span className="badge badge-primary" value="Usuario" name="Usuario">Usuario :{ADMIN}</span>

                    </h2>
                    <img src={logo} className="App-logo3" alt="logo" />

                    <  div className="container-fluid" align="center">
                        <div className="col-md-4 text-center">
                            <h3><span className="badge badge-primary"> Enviar Mensaje  </span>

                            </h3>

                            <h3><span className="badge badge-primary"> Estudiantes  </span>

</h3>

                                {Titular}


                                <input type="text" className="form-control" placeholder="Escoja Estudiante" aria-label="Username" aria-describedby="addon-wrapping" name="Destinatario" value={Destinatario} onChange={this.changeHandler} ></input>

                            <input type="text" className="form-control" placeholder="Mensaje" aria-label="Username" aria-describedby="addon-wrapping" name="Mensaje" value={Mensaje} onChange={this.changeHandler} ></input>

                            <button type="submit" className="btn btn-light"> Enviar </button>

                        </div>


                        <h1><span className="badge badge-primary">Ver Mensajes </span> </h1>
                
              
                        {MensajesU2}
                    </div>

                    <h3><span className="badge badge-info">Mensajes Enviados </span> </h3>
                    {MensajesU}
                </form>

            </div>


















        );
    }
}
export default MensajeColaborador