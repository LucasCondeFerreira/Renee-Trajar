import React from 'react';
import Header from '../components/surfaces/header/Header'
import Footer from '../components/surfaces/footer/Footer'
import ImageTitle from '../assets/images/ImageTitle.png'
import FundoCitacao from '../assets/images/fundo-citacao.png'
import ReneePicture from '../assets/images/ReneePicture.png'
import NelsonGarey from '../assets/images/Nelson-Garey.png'
import Terno from '../assets/images/Terno-section-5.png'
import Grupo1 from '../assets/images/Group27.png'
import Grupo2 from '../assets/images/Group25.png'
import Grupo3 from '../assets/images/Group26.png'
import Camisa1 from '../assets/images/Camisa-1.png'
import Camisa2 from '../assets/images/Camisa-2.png'
import '../assets/style/style.css'
import '../assets/style/section.css'

export default class Container extends React.Component  {
    render() {
        return (
          <React.Fragment>

            <Header />

            <div className='col-md-12 section-1'>
              <section>
                <img src={ImageTitle} width={'100%'} className='pb-5' alt='Title' />
                <h3 className='pb-4 '>COMPRE HOJE, <span>PAGUE EM ATÉ 3X COM 12% DE DESCONTO</span> E TENHA 10 MESES PARA CONFECCIONAR!</h3>
                <a href="facebook.com" className='btn'>Faça já um orçamento</a>
              </section>
            </div>
            <div className="col-md-12 section-2">
              <div className="row">
                <section className="col-md-4 mr-4">
                  <img src={ReneePicture} alt='Renee Trajar' />
                </section>
                <section className="col-md-7">
                  <h3>Rene Trajar</h3>
                  <p>Com mais de 35 anos de experiência em camisas, calças e ternos sob medida, possuímos profissionais experientes e altamente qualificados. 

                  Cada cliente tem seu molde exclusivamente desenvolvido para seu biotipo através das medidas tiradas pelo próprio Sr. Renee, no escritório ou residência do cliente.
                  </p>
                  <div>
                    <p>
                    “Nosso objetivo é superar a expectativa do cliente proporcionando-lhe satisfação ao usar nossos produtos, aliado a um relacionamento franco e honesto, valorizando o ser humano.” 
                    </p>
                    <img src={FundoCitacao} alt="Fundo citação" />
                  </div>

                  <a href="facebook.com" className='btn mt-3'>Agende uma visita!</a>
                </section>
              </div>
            </div>

            <div className="col-md-12 section-3">
              <div className="row">
                <section className="col-md-7">
                  <div>
                    <p>
                    “Faço roupas com o Renee Trajar há mais de duas décadas, o serviço é impecável em todos os detalhes, desde a  costura ao caimento. O Renee tem uma equipe de mestre!”
                    </p>
                  </div>
                  <div className='mt-4'>
                    <h4>
                      Nelson Garey
                    </h4>
                    <h5>Advogado  |  Nelson Garey Advogados Associados</h5>
                  </div>
                </section>
                <section className="col-md-2 mr-4">
                  <img src={NelsonGarey} alt='Nelson Garey' />
                </section>
                <section className="col-md-2"></section>
              </div>
            </div>

            <div className="col-md-12 section-4">
              <div className="row">
                <img src={Grupo1} alt="Grupo 1" />
                <img src={Grupo2} className='img-meio' alt="Grupo 2" />
                <img src={Grupo3} alt="Grupo 3" />
              </div>
            </div>

            <div className="col-md-12 section-5">
              <div className="row">
                <div className="col-md-7 pr-3">
                  <h2>Condição Imperdível</h2>
                  <h4>Compre hoje e garanta:</h4>
                  <ul>
                    <li>
                      12% de desconto e pagamento em até <span>3x sem juros;</span>
                    </li>
                    <li>
                    Até <span>10 meses</span> para confeccionar sua roupa. Não se preocupe se suas medidas aumentaram ou diminuíram, estará sempre elegante;
                    </li>
                    <li>
                      Condição muito especial <span>por tempo limitado</span>;
                    </li>
                    <li>
                    Poder presentear alguém com uma roupa de alta costura, <span>exclusiva.</span>
                    </li>
                  </ul>

                  <a href="facebook.com" className="btn mt-4">Garanta essa condição especial!</a>
                </div>
                <div className="col-md-5">
                  <img src={Terno} alt="" />
                </div>
              </div>
            </div>

            <div className="col-md-12 section-6">
              <div className="row">
                <div className="col-md-6 div-imagem">
                  <img src={Camisa1} alt="" />
                  <div className='borda-imagem'></div>
                </div>
                <div className="col-md-6 div-texto">
                  <h2>Camisaria</h2>
                  <h5>confeccionadas artesanalmente</h5>
                  <div className="row">
                    <ul>
                      <li>
                        100% algodão
                      </li>
                      <li>
                        Monograma
                      </li>
                      <li>
                        Slim
                      </li>
                    </ul>
                    <ul>
                      <li>
                        Nacionais e Importadas
                      </li>
                      <li>
                        Tradicionais e Esportivas
                      </li>
                      <li>
                        Casamentos
                      </li>
                    </ul>
                    <div className="borda-texto"></div>
                  </div>
                  <a href="facebook.com" className="btn btn-danger">Quero um orçamento</a>
                </div>
              </div>
            </div>
            <div className="col-md-12 section-7">
              <div className="row">
                <div className="col-md-6 div-texto">
                  <h2>Alfaiataria</h2>
                  <h5>Totalmente feito a mão sob medida</h5>
                  <div className="row">
                    <ul>
                      <li>
                        Fio Super 120 e 130
                      </li>
                      <li>
                        Lã Fria Australiana
                      </li>
                      <li>
                        Botões Importados
                      </li>
                    </ul>
                    <ul>
                      <li>
                        Ternos e Calças
                      </li>
                      <li>
                        Paletés e Smokings
                      </li>
                      <li>
                        Sociais e Esportivos
                      </li>
                    </ul>
                  </div>
                  <div className="borda-texto"></div>
                  <a href="facebook.com" className="btn btn-danger">Quero um orçamento</a>
                </div>
                <div className="col-md-6 div-imagem">
                  <div className='borda-imagem'></div>
                  <img src={Camisa2} alt="" />
                </div>
              </div>
            </div>

            <div className='col-md-12 section-9'>
              <div className="row">
                <div className="col-md-4">
                  <h3>Telefones</h3>
                  <p>+55 (11) 3088-0757 </p>
                  <h3>Email</h3>
                  <p>renee@reneetrajar.com.br</p>

                  <h4>Atendimento personalizado</h4>
                  <a href="facebook.com" className="btn btn-danger">Clique aqui!</a>
                </div>
                <div className="col-md-7">
                  <h2>Contato</h2>
                  <form>
                    <label>
                      <input name='nome' placeholder="Nome" type="text" />
                    </label>
                    <label>
                      <input name='email' placeholder="Email" type="text" />
                    </label>
                    <label>
                      <textarea placeholder="Mensagem"></textarea>
                    </label>
                    <input type="submit" value="Enviar Mensagem" />
                  </form>
                </div>
              </div>
            </div>
            <Footer />
          </React.Fragment>
        )
      }
}