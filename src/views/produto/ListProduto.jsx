import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Modal, Header, Icon, Table } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function ListProduto () {

   const [lista, setLista] = useState([]);

   useEffect(() => {
       carregarLista();
   }, [])

   function carregarLista() {

       axios.get("http://localhost:8080/api/produto")
       .then((response) => {
           setLista(response.data)
       })
}
return(
    <div>
        <MenuSistema />
        <div style={{marginTop: '3%'}}>

            <Container textAlign='justified' >

                <h2> Produto </h2>
                <Divider />

                <div style={{marginTop: '4%'}}>
                    <Button
                        label='Novo'
                        circular
                        color='orange'
                        icon='clipboard outline'
                        floated='right'
                        as={Link}
                        to='/form-produto'
                    />
  <br/><br/><br/>
                  
                  <Table color='orange' sortable celled>

                      <Table.Header>
                          <Table.Row>
                              <Table.HeaderCell>Titulo</Table.HeaderCell>
                              <Table.HeaderCell>Código do Produto</Table.HeaderCell>
                              <Table.HeaderCell>Descrição</Table.HeaderCell>
                              <Table.HeaderCell>valor Unitario</Table.HeaderCell>
                              <Table.HeaderCell>Tempo de Entrega Mínimo do Cliente </Table.HeaderCell>
                              <Table.HeaderCell>Tempo de Entrega Máximo do Cliente</Table.HeaderCell>
                              <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                          </Table.Row>
                      </Table.Header>
                 
                      <Table.Body>

                          { lista.map(produto => (

                              <Table.Row key={produto.id}>
                                  <Table.Cell>{produto.Titulo}</Table.Cell>
                                  <Table.Cell>{produto.CódigodoProduto}</Table.Cell>
                                  <Table.Cell>{produto.Descrição}</Table.Cell>
                                  <Table.Cell>{produto.valorUnitario}</Table.Cell>
                                  <Table.Cell>{produto.TempodeEntregaMínimodoCliente}</Table.Cell>
                                  <Table.Cell>{produto.TempodeEntregaMáximodoCliente}</Table.Cell>
                                  <Table.Cell textAlign='center'>

                                      <Button
                                          inverted
                                          circular
                                          color='green'
                                          title='Clique aqui para editar os dados deste produto'
                                          icon>
                                               <Icon name='edit' />
                                      </Button> &nbsp;
                                      <Button
                                               inverted
                                               circular
                                               color='red'
                                               title='Clique aqui para remover este produto'
                                               icon>
                                                   <Icon name='trash' />
                                           </Button>

                                       </Table.Cell>
                                   </Table.Row>
                               ))}

                           </Table.Body>
                       </Table>
                   </div>
               </Container>
           </div>
           <Modal
               basic
               onClose={() => setOpenModal(false)}
               onOpen={() => setOpenModal(true)}
               open={openModal}
         >
               <Header icon>
                   <Icon name='trash' />
                   <div style={{marginTop: '5%'}}> Tem certeza que deseja remover esse registro? </div>
               </Header>
               <Modal.Actions>
                   <Button basic color='red' inverted onClick={() => setOpenModal(false)}>
                       <Icon name='remove' /> Não
                   </Button>
                   <Button color='green' inverted onClick={() => remover()}>
                       <Icon name='checkmark' /> Sim
                   </Button>
               </Modal.Actions>
         </Modal>
       </div>
   )
}