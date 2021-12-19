<template>
  <section class="base">
    <div class="bg-info d-flex pt-3">
      <div class="d-flex color-white max-w-960 justify-between flex-grow flex-wrap">
        <span class="mx-3 mb-3">Seg / sex - 08:00 ás 18:00</span>
        <a href="tel:+5583999037571" class="color-white mx-3 mb-3">+55 83 99903-7571</a>
        <span class="mx-3 mb-3">Rua Jonathas Barros de oliveira, 30 ,João Pessoa - PB</span>
      </div>
    </div>

    <header>
      <div>
        <div>
          <router-link to="/">FlexBlog</router-link>
        </div>
        <nav>
          <div>
            <span><a href="#sobre">Sobre</a></span>
            <span><a href="#produtos">Produtos</a></span>
            <span><a href="#preco">Preço</a></span>
            <span><a href="#qualidade">qualidade</a></span>
          </div>
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
        <v-img :src="require('../assets/sobre1.jpg')" max-height="550" max-width="100%" contain></v-img>
      </div>
      <div>
        <v-img :src="require('../assets/sobre2.jpg')" max-height="550" max-width="100%" contain></v-img>
      </div>
    </section>

    <section id="produtos">
      <h1>Produtos</h1>
      <div>
        <div>
          <h2>Purple</h2>
          <v-img :src="require('../assets/produtos1.jpg')" max-height="550" max-width="100%" contain></v-img>
        </div>
        <div>
          <h2>Pink</h2>
          <v-img :src="require('../assets/produtos2.jpg')" max-height="550" max-width="100%" contain></v-img>
        </div>
         <div>
          <h2>Blue</h2>
          <v-img :src="require('../assets/produtos3.jpg')" max-height="550" max-width="100%" contain></v-img>
        </div>
      </div>
    </section>

    <section>
      <div>
        <h2>Cobre</h2>
        <span><sup>R$</sup>19</span>
        <div>
          <span>Planos ilimitados</span>
          <span>Acesso restrito</span>
          <span>Cateúdo secreto</span>
          <span>Suporte 24h</span>
        </div>
        <a href="#">Comprar</a>
      </div>

      <div id="preco">
        <h2>Prata</h2>
        <span><sup>R$</sup>39</span>
        <div>
          <span>Planos ilimitados</span>
          <span>Acesso restrito</span>
          <span>Cateúdo secreto</span>
          <span>Suporte 24h</span>
          <span>Compra exclusiva</span>
        </div>
        <a href="#">Comprar</a>
      </div>

      <div>
        <h2>Ouro</h2>
        <span><sup>R$</sup>79</span>
        <div>
          <span>Planos ilimitados</span>
          <span>Acesso restrito</span>
          <span>Cateúdo secreto</span>
          <span>Suporte 24h</span>
          <span>Suporte 24h</span>
          <span>Download dos itens</span>
        </div>
        <a href="#">Comprar</a>
      </div>
    </section>

    <section id="qualidade">
      <div>
        <h2>Inteligente</h2>
        <span>O que temos que ter sempre em mente é que a 
        determinação clara de objetivos afeta positivamente a correta previsão</span>
      </div>

      <div>
        <h2>Compacto</h2>
        <span>O que temos que ter sempre em mente é que a determinação clara de objetivos afeta 
          positivamente a correta previsão das condições inegavelmente</span>
      </div>

      <div>
        <h2>Econômico</h2>
        <span>O que temos que ter sempre em mente é que a determinação clara de objetivos 
          afeta positivamente a correta previsão</span>
      </div>

      <div>
        <h2>Transparente</h2>
        <span>O que temos que ter sempre em mente é que a determinação clara de 
          objetivos afeta positivamente a correta previsão</span>
      </div>

      <div>
        <h2>Opaco</h2>
        <span>O que temos que ter sempre em mente é que a determinação clara de objetivos 
          afeta positivamente a correta previsão das condições inegavelmente</span>
      </div>

      <div>
        <h2>Sustentável</h2>
        <span>O que temos que ter sempre em mente é que a determinação clara de objetivos 
          afeta positivamente a correta previsão</span>
      </div>
    </section>

    <section>
      <div>
        <h1>Newsletter</h1>
        <span>Assine e fique por dentro das novidades</span>
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