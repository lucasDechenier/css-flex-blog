<template>
  <section class="base">
    <div>
      <div>
        <span>Seg / sex - 08:00 ás 18:00</span>
        <a href="tel:+5583999037571">+55 83 99903-7571</a>
        <span>Rua Pastor Jonathas Barros de Oliveira, 30, João Pessoa - PB</span>
      </div>
    </div>

    <header>
      <div>
        <div>
          <router-link to="/">FlexBlog</router-link>
        </div>
        <nav>
          <ul>
            <li><a href="#sobre">Sobre</a></li>
            <li><router-link to="/produtos">Produtos</router-link></li>
            <li><router-link to="/preco">Preço</router-link></li>
            <li><router-link to="/qualidade">qualidade</router-link></li>
          </ul>
        </nav>
      </div>
    </header>

    <h1>Novos valore e <br>Propriedades de CSS</h1>

    <section id="sobre">
      <div>
        <h1>Sobre</h1>
        <span>O que temos que ter sempre em mente é que a determinação 
          clara de objetivos 
          afeta positivamente a correta previsão das 
          condições inegavelmente apropriadas objetivos.</span>
        <span>O que temos que ter sempre em mente é que a determinação 
          clara de objetivos 
          afeta positivamente a correta previsão das 
          condições inegavelmente apropriadas objetivos.</span>
      </div>
      <div>
        <v-img :src="require('../assets/sobre1.jpg')" max-height="550" max-width="220" contain></v-img>
      </div>
      <div>
        <v-img :src="require('../assets/sobre2.jpg')" max-height="550" max-width="220" contain></v-img>
      </div>
    </section>

    <section id="produtos">
      <h1>Produtos</h1>
      <div>
        <div>
          <h2>Purple</h2>
          <v-img :src="require('../assets/produtos1.jpg')" max-height="550" max-width="220" contain></v-img>
        </div>
        <div>
          <h2>Pink</h2>
          <v-img :src="require('../assets/produtos2.jpg')" max-height="550" max-width="220" contain></v-img>
        </div>
         <div>
          <h2>Blue</h2>
          <v-img :src="require('../assets/produtos3.jpg')" max-height="550" max-width="220" contain></v-img>
        </div>
      </div>
    </section>

    <section>
      <div>
        <h2>Cobre</h2>
        <span><sup>R$</sup>19</span>
        <ul>
          <li>Planos ilimitados</li>
          <li>Acesso restrito</li>
          <li>Cateúdo secreto</li>
          <li>Suporte 24h</li>
        </ul>
        <a href="#">Comprar</a>
      </div>

      <div>
        <h2>Prata</h2>
        <span><sup>R$</sup>39</span>
        <ul>
          <li>Planos ilimitados</li>
          <li>Acesso restrito</li>
          <li>Cateúdo secreto</li>
          <li>Suporte 24h</li>
          <li>Compra exclusiva</li>
        </ul>
        <a href="#">Comprar</a>
      </div>

      <div>
        <h2>Ouro</h2>
        <span><sup>R$</sup>79</span>
        <ul>
          <li>Planos ilimitados</li>
          <li>Acesso restrito</li>
          <li>Cateúdo secreto</li>
          <li>Suporte 24h</li>
          <li>Suporte 24h</li>
          <li>Download dos itens</li>
        </ul>
        <a href="#">Comprar</a>
      </div>
    </section>

    <section id="qualidade">
      <div>
        <h2>Inteligente</h2>
        <p>O que temos que ter sempre em mente é que a 
        determinação clara de objetivos afeta positivamente a correta previsão</p>
      </div>

      <div>
        <h2>Compacto</h2>
        <p>O que temos que ter sempre em mente é que a determinação clara de objetivos afeta 
          positivamente a correta previsão das condições inegavelmente</p>
      </div>

      <div>
        <h2>Econômico</h2>
        <p>O que temos que ter sempre em mente é que a determinação clara de objetivos 
          afeta positivamente a correta previsão</p>
      </div>

      <div>
        <h2>Transparente</h2>
        <p>O que temos que ter sempre em mente é que a determinação clara de 
          objetivos afeta positivamente a correta previsão</p>
      </div>

      <div>
        <h2>Opaco</h2>
        <p>O que temos que ter sempre em mente é que a determinação clara de objetivos 
          afeta positivamente a correta previsão das condições inegavelmente</p>
      </div>

      <div>
        <h2>Sustentável</h2>
        <p>O que temos que ter sempre em mente é que a determinação clara de objetivos 
          afeta positivamente a correta previsão</p>
      </div>
    </section>

    <section>
      <div>
        <h1>Newsletter</h1>
        <p>Assine e fique por dentro das novidades</p>
      </div>
      <form>
        <input type="text" placeholder="Seu e-mail">
        <v-btn type="submit">Assinar</v-btn>
      </form>
    </section>

    <footer>
      FlexBlog © Todos os direitos reservados.
    </footer>
  </section>
</template>

<script>
export default {
  data: () => ({
  }),
};
</script>

<style>

</style>