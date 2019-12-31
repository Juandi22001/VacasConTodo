import React, { Component } from 'react';
import logo from './Solicitud.svg';
import './App.css';
import axios from 'axios';
import request from 'superagent';
import Admin from './Admin';
const a = window.localStorage.getItem('id')
let B = 100;
class VerSolicitud extends Component {
    constructor() {
        super();
        this.state = {

            NombreUsuario: '',
            id: '',
            Amigo: '',
            Estado: 'Aceptada',
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

    Sumar = async () => {

        B = B + 1
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
        await axios.delete('http://localhost:3200/Solicitud/' + id);
        this.NotiSolicitud();
    }
    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:3200/Solicitud', this.state)

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
        this.Noti4(); this.NotiSolicitud();
        this.NotiMensaje(); this.Sumar();
    }


    Validar = (e) => {

        let valCurso = false;

        let valAsignacion = false;

        let valAdmin = false;
        let valColaborador = false;
        let valEstudiante = false;
        let valCatedratico = false;

        var Aceptar = this.state.Solicitud.map((c, i) => {

            alert("Si")
            this.state.Estado = "Aceptada"


        });


        var Catedratico = this.state.Catedratico.map((E3, i) => {
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










        var Admin = this.state.Estudiante.map((E, i) => {
            if (E.id === a) {
                B = B + 3;
                ADMIN = E.Nombre;
                this.state.Amigo = E.Nickname
                this.state.id = B
                ADMIN1 = E.Nickname
            }
        });

        var Soli = this.state.Solicitud.map((c, i) => {
            if (c.Amigo === ADMIN1) {

                return (


                    <option key={c.NombreUsuario}  > {c.NombreUsuario}</option>






                );
            }
        });







        var SoliU = this.state.Solicitud.map((E2, i) => {




            if (E2.Amigo === ADMIN1 && E2.Estado === "Pendiente") {


                return (
                    <div className="card" >
                        <div className="card-body">
                            <span className="badge badge-info"> Id</span>

                            <h5 className="card-title">  {E2.id} </h5>

                            <span className="badge badge-info"> Usuario</span>

                            <h5 className="card-title">  {E2.NombreUsuario} </h5>
                            <button className="btn btn-light" onClick={() => this.Delete(E2.id)}>Eliminar </button>

                        </div>  </div>
                );
            }
        });











        var A_colaborador = this.state.colaborador.map((c, i) => {
            return (


                <option key={c.Nickname}  > {c.Nickname}</option>






            );
        });


        var A_Catedratico = this.state.Catedratico.map((c, i) => {
            return (


                <option key={c.Nickname}  > {c.Nickname}</option>






            );
        });
        var A_Admin = this.state.Admin.map((c, i) => {
            return (


                <option key={c.Nickname}  > {c.Nickname}</option>






            );
        });




        const { Amigo, Estado, NombreUsuario } = this.state

        return (

            <div>
                <form on onSubmit={this.submitHandler}>
                    <nav className="navbar navbar-dark bg-primary">

                        <a className="navbar-brand" href="http://localhost:3000/EnviarS" >Solicitud</a>

                        <a className="navbar-brand" href="http://localhost:3000/AsignarCursosUsuario" >Cursos</a>

                        <a className="navbar-brand" href="http://localhost:3000/PerfilEstudiante" >Perfil</a>

                        <a className="navbar-brand" href="http://localhost:3000/AsignarActividadUsuario" >Actividad</a>
                        <a className="navbar-brand" href="http://localhost:3000/ComentarNoticia" >Actividad</a>


                    </nav>

                    <h1><span className="badge badge-primary">Nuevo Amigo </span>

                    </h1>
                    <h2><span className="badge badge-primary" >Usuario :{ADMIN}</span>

                    </h2>
                    <img src={logo} className="App-logo3" alt="logo" />

                    <  div className="container-fluid" align="center">
                        <div className="col-md-4 text-center">
                            <h3><span className="badge badge-primary"> Enviar Solicitud  </span>

                            </h3>

                            <div className="form-group">

                                <h3><span className="badge badge-info">Escoja el Nombre del Usuario </span> </h3>

                                <select class="selectpicker" name="NombreUsuario" defaultValue={NombreUsuario} onChange={this.changeHandler} >

                                    {Soli}

                                </select>

                            </div>
                            <input type="text" className="form-control" placeholder=".." aria-label="Username" aria-describedby="addon-wrapping" name="NombreUsuario" value={NombreUsuario} onChange={this.changeHandler} ></input>


                            <button type="submit" className="btn btn-light"> Enviar </button>

                        </div>

                        <h1><span className="badge badge-info">ver Solicitudes </span> </h1>
                        {SoliU}





                    </div>

                </form>

            </div>


















        );
    }
}
export default VerSolicitud