import React  from "react";

const Footer = () => {
    return(
     <>
      <footer>
    <div className="painel">

        <div className="cardx">
          <img className="logo2" src="/images/logoIsPace.jpeg" alt="logo" width="140px"/>
          <div className="iconredes">
            <p className=" textsomos"> Somos a <strong> I-SPACE </strong>  e trazemos para vocês os principais lançamentos com ampla
              disponibilidade
              e garantia de autenticidade.</p>
          </div>
          <div className="redes">
            <a href=""><iconify-icon icon="ant-design:facebook-filled"  width="20"></iconify-icon></a>
            
            <a href=""><iconify-icon icon="ant-design:instagram-outlined"  width="20"></iconify-icon></a>
            
          </div>
        </div>
    
        <div className="cardx">
          <h3>INSTITUCIONAL</h3>
          <ul className="lista" style="list-style: none;">
            <li> <a href="../views/sobre.html">Quem Somos</a></li>
            <li> <a href="">Nossas Lojas</a></li>
            <li> <a href="">Quem Somos</a></li>
            <li> <a href="../views/privacidade.html">Política de Privacidade</a></li>
            <li><a href="">Política de reembolso</a></li>
            <li><a href="">Termos de serviço</a></li>
            <li><a href=""> Política de Envio</a></li>
          </ul>
        </div>
    
     <div className="card2">
          <h3>CONTATO</h3>
          <ul className="listaContato" style="list-style: none;">
            <li> <div className="wpp">Whatsapp
              </div><div className="number">+55 11 95454 5560</div></li>
            <li><div className="email">E-mail:</div>
              <div className="enderecoemail">copclub.br@gmail.com</div></li>
            <li><div className="dias">Segunda - Sexta</div><div className="horarios">08:00 - 20:00</div>
              </li>
              <li><div className="dias">Segunda - Sexta</div><div className="horarios">08:00 - 20:00</div>
              </li>
          </ul>
        </div>
    
        <div className="cardx">
          <h3> FIQUE POR DENTRO </h3>
          
          <h5>Receba as novas promoções e produtos.</h5>
          
          <button className="button-footer"> Se inscreva </button>
        </div>
      </div>
      
</footer>
     </>
    )
}

export default Footer