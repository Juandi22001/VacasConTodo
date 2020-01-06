import React, { Component } from 'react';

import { StyleSheet, Text, View, Card, Picker, Button, Container, Header, Content, Badge, Icon, Form,Title,Body, Subtitle,CardItem,Input,Item,Left,  Right  , Thumbnail} from 'native-base';

import request from 'superagent';
import axios from 'axios';

class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = {
     Insumo:'', 
      Comida:'',
      id: '',
      idPago: '-',
      Carne: '',
      Actividad: '',
      Usuario: '--',
      Valor: '',
      Tipo: '',
      cursos: [],
      actividad: [],
      Admin: [],
      colaborador: [],
      Estudiante: [],
      Catedratico: [],
      AsignarActividad: [],
      RegistroActividades: [],
      Ingresos: [],
      Inventario:[],
      Insumo:'',
      Comida:''
    }
  } componentDidMount() {
    this.NotiRegistro();
     this.NotiIngreso2(); this.state.idPago="......" 
     this.NotiI();
  } 
  
  NotiI  ()  {
    request
      .get('http://192.168.1.10:3200/Inventario')
      .end((err, res) => {
  
        const Inventario = JSON.parse(res.text);
        this.setState({

          Inventario: Inventario

        });
        });
  }
  NotiIngreso2  ()  {
    request
      .get('http://192.168.1.10:3200/Ingresos')
      .end((err, res) => {
  
        const Ingresos = JSON.parse(res.text);
        this.setState({

          Ingresos: Ingresos

        });
        });
  }
 
  NotiRegistro() {
    request.get('http://192.168.1.10:3200/AsignarActividad')
      .end((err, res) => {
   
        const AsignarActividad = JSON.parse(res.text);
        this.setState({

          AsignarActividad: AsignarActividad

        });
      });
  }

  submitHandler = (e) => {
    e.preventDefault()
    
   axios.post('http://192.168.1.10:3200/RegistroActividades',this.state)
      .then(response => {
        
        alert('Registro Actividad'+"-"+this.state.Actividad)
      });
  }

  AgregarInventario = (e) => {
    e.preventDefault()
    
   axios.post('http://192.168.1.10:3200/Inventario',this.state)
      .then(response => {
  
      });
  }
  onValueChangeComida(value){
    this.setState({
      Comida:value
    });
  }
  onValueChangeInsumo(value){
    this.setState({
      Insumo:value
    });
  }
  onValueChangeid(value){
    this.setState({
      id:value
    });
  }

  onValueChangeUsuario(value){
    this.setState({
      Usuario:value
    });
  }
  onValueChangeActividad(value){
    this.setState({
      Actividad:value
    });
  }
  onValueChangePago(value){
    this.setState({
      idPago:value
    });
  }
  onValueChangeCarne(value){
    this.setState({
      Carne:value
    });
  }  

  render() {

    var S = []

    const Invent2 = this.state.Ingresos.map((c4, i) => {
      return (

        <Picker.Item label={c4.Nombre} value={c4.Nombre} />

      )
    });
    const Invent = this.state.Inventario.map((c6, i) => {
     
      return (

        <Picker.Item label={c6.Nombre} value={c6.Nombre} />

      )
     });

 
    const Ingreso5 = this.state.Ingresos.map((c5, i) => {
     
      if(c5.Carne===this.state.Carne){
     return(
 
  alert("Pago"+":"+c5.id)
     )   
     }
     });

    const Ingreso4 = this.state.Ingresos.map((c5, i) => {
     
     if(c5.id===this.state.idPago){
    return(

 alert("Usuario"+ c5.Nombre + " "+c5.Carne)
    )   
    }
    });
    
    const Ingreso3 = this.state.Ingresos.map((c1, i) => {
      return (

        <Picker.Item label={c1.Carne} value={c1.Carne} />

      )
    });
    const Ingreso2 = this.state.Ingresos.map((c4, i) => {
     
      return (

        <Picker.Item label={c4.id} value={c4.id} />

      )
    });

    const Ingreso = this.state.Ingresos.map((c4, i) => {
      return (

        <Picker.Item label={c4.Nombre} value={c4.Nombre} />

      )
    });
    
    const AsignarActividad2 = this.state.AsignarActividad.map((c2, i) => {
      return (

        <Picker.Item label={c2.Actividad} value={c2.Actividad} />

      )
    }); 
    
    var Tipo = this.state.actividad.map((c, i) => {
      if(c.id==this.state.Actividad){
          this.state.Tipo=c.Tipo
        }
        });
    return (
      <Container>
      <Header />
      <Content> 
     
     
      <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: './src/imgs/1234.png'}} />
                <Body>
                  <Text>Registroo Actividades</Text>
                  <Text note>Coecys</Text>
                </Body>
              </Left>
            </CardItem>
     
            <CardItem>
              <Left>
                <Button transparent>
                
                </Button>
              </Left>
              <Body>
                <Button transparent>
                
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
 
     
     
     
     
     
     
      <Card>
          <CardItem header>
            <Text></Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
               Ingrese ID
              </Text>
            </Body>
          </CardItem>
          <CardItem footer>
         
            <Item disabled>
            <Input  style={{ width: 300 }}
                selectedValue={this.state.id}   
                    onValueChange={this.onValueChangeid.bind(this)}/>
            <Icon name='information-circle' />  
          </Item>  
          </CardItem>
       </Card>
    
       <Card>
          <CardItem header>
            <Text>Estudiante</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
               Escoja Estudiante
              </Text>
            </Body>
          </CardItem>
          <CardItem footer>
          <Picker    
           mode="dropdown"
                name="Usuario"
                style={{ width: 300 }}
                selectedValue={this.state.Usuario}
                onValueChange={this.onValueChangeUsuario.bind(this)}
                

          >   
            {Ingreso}
          </Picker>
        
          </CardItem>    
          

       </Card>  
    
        <Card>
          <CardItem header>
            <Text>Actividadeeeeees</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
               Escoja Actividad
              </Text>
            </Body>
          </CardItem>
          <CardItem footer>
          <Picker   
            note
                mode="dropdown"
                name="Actividad"
                style={{ width: 300 }}
                selectedValue={this.state.Actividad}
                onValueChange={this.onValueChangeActividad.bind(this)}
                

          >   
            {AsignarActividad2}
          </Picker>
        
          </CardItem>    
          

       </Card>  
    
       <Button block   sucess onPress={this.submitHandler} >
            <Text> Registrar</Text>
          </Button>
        
          <Card>
          <CardItem header>
            <Text> Buscar Pago</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
               Escoja Pago
              </Text>
            </Body>
          </CardItem>
          <CardItem footer>
          <Picker   
            note
                mode="dropdown"
                name="Actividad"
                style={{ width: 300 }}
                selectedValue={this.state.idPago}
                onValueChange={this.onValueChangePago.bind(this)}
                

          >   
            {Ingreso2}
          </Picker>
        
          </CardItem>    
          

       </Card>  
       
       <Card>
          <CardItem header>
            <Text> Carne</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
          Buscar Carne
              </Text>
            </Body>
          </CardItem>
          <CardItem footer>
          <Picker   
            note
                mode="dropdown"
                name="Actividad"
                style={{ width: 300 }}
                selectedValue={this.state.Carne}
                onValueChange={this.onValueChangeCarne.bind(this)}
                

          >   
            {Ingreso3}
          </Picker>
        
          </CardItem>    
          

       </Card>  
     
       <Button block   sucess onPress={this.submitHandler} >
            <Text> </Text>
          </Button>
    
     
       <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: './src/imgs/1234.png'}} />
                <Body>
                  <Text>Registroo Alimentos</Text>
                  <Text note>Coecys</Text>
                </Body>
              </Left>
            </CardItem>
     
            <CardItem>
              <Left>
                <Button transparent>
                
                </Button>
              </Left>
              <Body>
                <Button transparent>
                
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
     
          <Card>
          <CardItem header>
            <Text>  Registro Alimentos  </Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
         Registrar Alimento
              </Text>
            </Body>
          </CardItem>
          <CardItem footer>
          <Picker   
            note
                mode="dropdown"
                name="Actividad"
                style={{ width: 300 }}
                selectedValue={this.state.Comida}
                onValueChange={this.onValueChangeComida.bind(this)}
                

          >   
           <Picker.Item label="Coffe"value="Coffe" />
           <Picker.Item label="Almuerzo"value="Almuerzo" />
          </Picker>
        
          </CardItem>    
          

       </Card>  
       
       <Card>
          <CardItem header>
            <Text>  Registro Insumo  </Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
         Registrar Insumo
              </Text>
            </Body>
          </CardItem>
          <CardItem footer>
          <Picker   
            note
                mode="dropdown"
                name="Actividad"
                style={{ width: 300 }}
                selectedValue={this.state.Insumo}
                onValueChange={this.onValueChangeInsumo.bind(this)}
                

          >   
         {Invent}
          </Picker>
        
          </CardItem>    
          

       </Card>  

       <Card>
          <CardItem header>
            <Text>Estudiante</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
               Escoja Estudiante
              </Text>
            </Body>
          </CardItem>
          <CardItem footer>
          <Picker    
           mode="dropdown"
                name="Usuario"
                style={{ width: 300 }}
                selectedValue={this.state.Usuario}
                onValueChange={this.onValueChangeUsuario.bind(this)}
                

          >   
            {Ingreso}
          </Picker>
        
          </CardItem>    
          

       </Card>  
       <Button block   sucess onPress={this.AgregarInventario} >
            <Text> </Text>
          </Button>
    
      </Content>
    </Container>

    );
  }
}
export default Registro