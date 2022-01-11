import React from 'react'
import styled from 'styled-components'
import '../../assets/style/style.css'
import ButtonWhite from '../../components/data-display/Button/ButtonWhite'


const ContainerContato = styled.div`
     
     position: relative;

    padding: 0 35px 26px 136px;

    max-height: 635px;

    display: flex;
    flex-wrap: wrap;
    width: 100%;
`
    
const Row = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px; 
`

const H3 = styled.h3`
    font-family: 'Lato';
    font-size: 18px;
    font-weight: 300;
    text-transform: uppercase;
    
    color: #1C86A4;
`

const H4 = styled.h4`
    font-family: 'Lato';
    font-size: 22px;
    font-weight: 300;

    color: #1C86A4;
`

const P = styled.p`
    font-family: 'Lato';
    font-size: 16px;
    font-weight: 300;

    color: #828282;
`

const Form = styled.form`
    width: 100%;

    position: relative;
`

const Label = styled.label`
    width: 100%;
`

const Input = styled.input`
    width: 100%;

    border: solid 1px #1C86A4;

    ::placeholder {
      font-family: 'Lato';
      font-weight: 300;
      font-size: 14px;
      line-height: 17px;

      padding: 12px;

      color: #C4C4C4;
    }
`

const ButtonInput = styled.input`
    width: 100%;
    height: 50px;
    
    color: #E5E5E5;
    background-color: #014561;
    border: none;
`

const Textarea = styled.textarea`
    width: 100%;

    border: solid 1px #1C86A4;

    ::placeholder {
      font-family: 'Lato';
      font-weight: 300;
      font-size: 14px;
      line-height: 17px;

      padding: 12px;

      color: #C4C4C4;
    }
`


const H2 = styled.h2`
    font-family: 'Cormorant';

    position: relative;
    text-align: left;
    color: #1C86A4;
    bottom: 40px;
    font-weight: 300;
    font-size: 38px;
    
    display: inline-block;

    ::before {
    content: '';
    position: absolute;

    border-bottom: 3px solid #1C86A4;
    width: 45px;
    
    left: 35%;
    bottom: 0;
    }

    :hover::before {
    border-bottom: 3px solid #1C86A4;
    width: 250px;
    
    left: -50%;
    }   
`





export const SectionContato = () => {
    return (
    <ContainerContato className='col-md-12'>
        <Row>
            <div className="col-md-4">
                <H3>Telefones</H3>
                <P>+55 (11) 3088-0757 </P>
                <H3>Email</H3>
                <P>renee@reneetrajar.com.br</P>

                <H4>Atendimento personalizado</H4>
                <ButtonWhite href="facebook.com" text='Clique aqui!'/>
              </div>
              <div className="col-md-7">
                <H2>Contato</H2>
                <Form>
                  <Label>
                    <Input name='nome' placeholder="Nome" type="text" />
                  </Label>
                  <Label>
                    <Input name='email' placeholder="Email" type="text" />
                  </Label>
                  <Label>
                    <Textarea placeholder="Mensagem"></Textarea>
                  </Label>
                  <ButtonInput type="submit" value="Enviar Mensagem" />
                </Form>
            </div>
        </Row>
    </ContainerContato>
  )
}

export default SectionContato;