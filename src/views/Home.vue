<template>
  <section>
    <div class="bg-info d-flex pt-3 centralize">
      <div class="d-flex color-white max-w-960 justify-between flex-grow flex-wrap">
        <span class="mx-3 mb-3">Seg / sex - 08:00 ás 18:00</span>
        <a href="tel:+5583999037571" class="color-white mx-3 mb-3">+55 83 99903-7571</a>
        <span class="mx-3 mb-3">Rua Jonathas Barros de oliveira, 30 ,João Pessoa - PB</span>
      </div>
    </div>

    <header class="bg-menu centralize d-flex">
      <div class="flex-grow max-w-960 d-flex flex-wrap justify-between align-center py-4">
        <div>
          <router-link to="/" class="color-white title_1--bold mx-3">FlexBlog</router-link>
        </div>
        <nav>
          <div class="d-flex flex-wrap">
            <span><a href="#sobre" class="color-white subtitle pa-3 hover-color-info">Sobre</a></span>
            <span><a href="#produtos" class="color-white subtitle pa-3 hover-color-info">Produtos</a></span>
            <span><a href="#preco" class="color-white subtitle pa-3 hover-color-info">Preço</a></span>
            <span><a href="#qualidade" class="color-white subtitle pa-3 hover-color-info">Qualidade</a></span>
          </div>
        </nav>
      </div>
    </header>

    <div class="d-flex centralize">
      <h1 class="title_2--bold flex-grow max-w-960 py-15 px-3">Novos valores e <br> Propriedades de CSS</h1>
    </div>

    <section id="sobre" class="sobre flex-wrap d-flex max-w-960 margin-auto py-15">
      <div class="sobre-info pa-3">
        <h1 class="title_2--bold mb-4">Sobre</h1>
        <div class="subtitle mb-4 color-gray-text">O que temos que ter sempre em mente é que a determinação 
          clara de objetivos 
          afeta positivamente a correta previsão das s
          condições inegavelmente apropriadas objetivos.</div>
        <div class="subtitle color-gray-text">O que temos que ter sempre em mente é que a determinação 
          clara de objetivos 
          afeta positivamente a correta previsão das 
          condições inegavelmente apropriadas objetivos.</div>
      </div>
      <div class="flex-img ma-3">
        <v-img :src="require('../assets/sobre1.jpg')" position='left left' max-height="550" contain></v-img>
      </div>
      <div class="flex-img ma-3">
        <v-img :src="require('../assets/sobre2.jpg')" position='left left' max-height="550" max-width="300" contain></v-img>
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
.sobre{
  border-top: 2px solid #2c70ff;
  border-bottom: 2px solid #2c70ff;
}

.sobre-info{
  flex: 2 1 300px;
}

.flex-img{
  flex: 1 1 160px;
}

</style>