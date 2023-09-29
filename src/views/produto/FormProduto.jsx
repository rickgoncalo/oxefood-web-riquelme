import axios from "axios";
import React, { useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';
export default function FormProduto () {

    const [titulo, setTitulo] = useState();
    const [codigodoproduto, setCodigoDoProduto] = useState();
    const [descricao, setDescricao] = useState();
    const [valorunitario, setValorUnitario] = useState();
    const [tempodeentregaminimoemminutos, setTempodeEntregaMinimoEmMinutos] = useState();
    const [tempodeentregamaximoemminutos, setTempoDeEntregaMaximoEmMinutos] = useState();

    function salvar() {

		let clienteRequest = {
		     titulo:titulo,
		     codigodoproduto: codigodoproduto,
		     descricao: descricao,
		     valorunitarior: valorunitario,
             tempodeentregaminimoemminutos: tempodeentregaminimoemminutos,
		     tempodeentregamaximoemminutos: tempodeentregamaximoemminutos,
		}
	
		axios.post("http://localhost:8080/api/cliente", clienteRequest)
		.then((response) => {
		     console.log('Cliente cadastrado com sucesso.')
		})
		.catch((error) => {
		     console.log('Erro ao incluir o um cliente.')
		})
	}


    return (

        <div>
 <MenuSistema />

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Cliente &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Titulo'
                                    maxLength="100"
                                    value={titulo}
			                        onChange={e => setTitulo(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Código do Produto'>
                                    <InputMask
                                        required
                                        mask="Informe o código do produto"
                                        value={codigodoproduto}
				                        onChange={e => setCodigoDoProduto(e.target.value)} 
                                        />
                
                                </Form.Input>

                            </Form.Group>


                                <Form.Input
                                    fluid
                                    label='Descrição'
                                    width={6}>
                                    <InputMask 
                                        mask="Informe a descrição do produto"
                                        value={descricao}
				                        onChange={e => setDescricao(e.target.value)}
                                    /> 
                                </Form.Input>
                                <Form.Group>
                                <Form.Input
                                    fluid
                                    label='Valor Unitário'
                                    width={6}>
                                    <InputMask 
                                        mask="55481"
                                        value={valorunitario}
				                        onChange={e => setValorUnitario(e.target.value)}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de entrega minimo em minutos'
                                    width={6}
                                >
                                    <InputMask 
                                        mask="541475" 
                                        maskChar={null}
                                        value={tempodeentregaminimoemminutos}
				                        onChange={e => setTempodeEntregaMinimoEmMinutos(e.target.value)}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de entrega maximo em minutos'
                                    width={6}
                                >
                                    <InputMask 
                                        mask="0" 
                                        maskChar={null}
                                        value={tempodeentregamaximoemminutos}
				                        onChange={e => setTempoDeEntregaMaximoEmMinutos(e.target.value)}
                                    /> 
                                </Form.Input>

                                </Form.Group>
                            
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Voltar
                            </Button>
                                
                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                                onClick={() => salvar()}
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>
                    
                </Container>
            </div>
        </div>

    );

}