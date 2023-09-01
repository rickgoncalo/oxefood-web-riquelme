import React from "react";
import { Container, Grid, Image } from 'semantic-ui-react';

export default function Home () {

   return(
       <div>

           <div style={{marginTop: '5%'}}>
               <Container>
                   <Grid columns={2} divided>
                       <Grid.Row>
                           <Grid.Column>
                               <Image src='/logo-IFPE.png' size='large' />
                           </Grid.Column>
                           <Grid.Column>
                              
                               Bem vindo ao sistema <strong>OxeFood</strong> ! <br/>
                               Este sistema foi desenvolvido na disciplina de Desenvolvimento para WEB III. <br/> <br/>
                               Para acessar o código da <strong>API</strong> do sistema, acesse: <a href='https://github.com/rickgoncalo/oxefood-web-riquelme.git' target='_blank'> https://github.com/rickgoncalo/oxefood-web-riquelme.git </a> <br/> <br/>
                               Para acessar o código do <strong>Módulo WEB</strong>, acesse: <a href='https://github.com/rickgoncalo/oxefood-web-riquelme.git' target='_blank'> https://github.com/rickgoncalo/oxefood-web-riquelme.git </a>

                           </Grid.Column>
                       </Grid.Row>
                   </Grid>
               </Container>
           </div>
       </div>
   )
}
