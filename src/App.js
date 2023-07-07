import './App.css';
import React,{useState} from "react"
import Banner from './modules/Banner';
import Perguntas from './modules/Perguntas';
import img from "./assets/img1.png"
import img2 from "./assets/img2.png"
import img3 from "./assets/img3.png"
import img4 from "./assets/img4.png"
import Textos from './modules/Textos';



function App() {

  return (
  <div className="App">
    <Banner/>
    <Textos texto={<p>____Visamos com este trabalho criar uma unidade pedagógica que consiga instigar seus usuários a refletirem e conhecerem diversos elementos presente nas mídias que geram significados. Dentre esses elementos destacamos a presença dos códigos técnicos e simbólicos. Onde o primeiro está relacionado aos artifícios técnicos que geram significados(como ângulos de câmera e a música de um filme), e o segundo relacionado aos símbolos presentes nas mídias ( a presença de uma cor ou um gesto para representar algo, por exemplo).</p>}/>
    <Textos texto={
    <div>
        <p>Você já parou para pensar em como os filmes trabalham com diversos recursos responsáveis por nos fazer reagir de uma determinada maneira? Por exemplo, um filme de terror vai gradativamente aumentando a música para gerar uma sensação de desconforto e insegurança, e um filme de ação usa ângulos de câmera exagerados para enfatizar uma determinada cena e aumentar seu impacto.</p>
        <p>É importante saber que as mídias não se comunicam apenas através da linguagem verbal, diversos elementos não verbais também são responsáveis por gerar significados. Alguns desses elementos são: sons, gestos, signos, recursos  técnicos, figurino, estilização, etc.</p>
        <p>Dentro desta unidade você vai conhecer um pouco mais sobre esses recursos e vai aplicar seus conhecimentos com vários  exercícios.
        </p>
    </div>
  }/>
    <Textos texto={"Para começar analise as imagens abaixo: "}/>
    <Textos texto={
    <div>
        <div>
          A)<img src={img} width={360} height={200}/>
          B)<img src={img2} width={360} height={200}/>
        </div>
        <div>
          C)<img src={img3} width={360} height={200}/>
          D)<img src={img4} width={360} height={200}/>
        </div>
    </div>
    }/>
    <Perguntas pergunta={
    <div>
      <p>Essas imagens foram retiradas de filmes que possuem gêneros diversificados.</p>
      <p>Tente identificar a qual gênero cada um deles pertence somente observando seus elementos visuais. Em seguida, converse com seus amigos e veja se chegam na mesma conclusão.</p>
    </div>
    }
    resposta={"A)Fantasia, B)Terror, C)Drama, D)Ficção Científica. Observem como a ambientação, as expressões dos personanagens, seus trajes e outros elementos acabam caracterizando tanto um filme que é capaz de descobrirmos seu gênero apenas com um frame."} 
  />
    <Textos texto={
      <div>
        <p>Vamos analisar agora o trecho de uma animação chamada a voz do silêncio:</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Hmrfas01C_sa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    }/>
    <Perguntas pergunta={
      <div>
        <p> 01 - Observando a cena descontextualizadamente, o que você consegue inferir sobre o personagem e a situação ao qual ele se encontra?</p>
          <input type="text"></input>
        <p>Preste bastante atenção no uso da música, dos elementos, enquadramentos,  efeitos sonoros e responda a seguir:</p>
        <p> 02 - No trecho há uma marcação em formato de “x” nos rostos dos personagens de segundo plano, o que você acha que isso pode significar?</p>
          <input type="text"></input>
        <p> 03 - Note que o enquadramento começa com a câmera bem próxima do personagem e posteriormente se afasta, nos mostrando as várias pessoas que estão ao redor dele. Você acha que esse enquadramento enfatiza algo? De que modo ele acaba contribuindo para expressar a situação vivenciada pelo personagem?
        </p>
          <input></input>
        <p> 04 - O que essa música causa a você? Através dela, podemos identificar o gênero do filme?</p>
      </div>
    }
      resposta={
        <div>
          <p>01 - Podemos presumir que ele está passando por algum tipo de trauma social, ou algo parecido. A cena tenta nos mostrar através de diversos recursos que ele voltar a perceber as pessoas e coisas ao seu redor é uma grande conquista.</p>
          <p>02 - Pode ser um modo de representar as pessoas ao qual o personagem não possui nenhum vínculo, visto que o "x" geralmente é usado como um recurso simbólico para apresentar negação.</p>
          <p>03 - Ele começa próxima do personagem para enfatizar a ideia de que ele tem problemas em espaços públicos e tenta ignorar as pessoas ao seu redor, pois desse ângulo também não conseguimos notar no espaço exterior, assim como o personagem. Conforme a cena avança, o personagem quebra esse obstáculo e aí sim também conseguimos um ângulo diferente, mas dessa vez podemos notar todo o espaço ao redor. O enquadramento conbribui para que consigamos nos sentir como o personagem.</p>
          <p>04 - (pergunta pessoal). Podemos sim inferir que o gênero do filme é drama ou algo parecido, pois essa é uma música que geralmente encontramos nesse tipo de filme.</p>
        </div>
      }/>
    <Textos texto={
      <div>
        <p>assista a cena do filme sound of metal e responda em seguida:</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Hm00Mk5dE3Ee" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>}/>
    <Perguntas pergunta={
      <div>
        <p> 01 - Nessa cena em questão conseguimos ter uma imersão muito grande com os personagens do filme através de um recurso específico. Que recurso é esse? Como ele contribui para que possamos nos sentir como os personagens?</p>
        <input></input>
        <p> 02 - Você acha que esse trecho teria a mesma sensação e sentido se a parte sonora dele fosse diferente? Por quê?</p>
      </div>
    }resposta={
      <div>
        <p> 01 - É o recurso sonoro. Através dele o filme busca uma maneira de representar como esses personagens ouvem as coisas, e com isso conseguimos nos conectar profundamente com eles.</p>
        <p> 02 - Não. Os efeitos sonoros são essenciais para que seja passada a sensação de estar no corpo do personagem e ouvir o mundo do mesmo modo que ele. Sem os efeitos sonoros tudo isso é perdido, juntamente com o impacto da cena.</p>
      </div>
    }/>
    <Textos texto={"Em mídias estáticas como em quadrinhos e mangás temos "}/>
  </div>
  );                                                                    
}

export default App;
