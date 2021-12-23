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
      <div class="flex-img d-flex align-center justify-center ma-3">
        <v-img :src="require('../assets/sobre1.jpg')" position='center' max-width="100%" contain></v-img>
      </div>
      <div class="flex-img d-flex justify-center ma-3">
        <v-img :src="require('../assets/sobre2.jpg')" position='bottom' max-width="100%" contain></v-img>
      </div>
    </section>

    <section id="produtos" class="max-w-960 my-15 margin-auto">
      <h1 class="title_2--bold mb-15 mx-3">Produtos</h1>
      <div class="d-flex flex-wrap align-end" :class="smAndDown ? 'justify-center' : ''">
        <div class="ma-3">
          <h2 class="title_2--bold color-gray-prod bg-gray-back px-5 py-15 b-purple">Purple</h2>
          <v-img :src="require('../assets/produtos1.jpg')" max-width="290"></v-img>
        </div>
        <div class="ma-3">
          <h2 class="title_2--bold color-gray-prod bg-gray-back px-5 py-15 b-pink">Pink</h2>
          <v-img :src="require('../assets/produtos2.jpg')" max-width="290"></v-img>
        </div>
        <div class="ma-3">
          <h2 class="title_2--bold color-gray-prod bg-gray-back px-5 py-15 b-blue">Blue</h2>
          <v-img :src="require('../assets/produtos3.jpg')" max-width="290"></v-img>
        </div>
      </div>
    </section>

    <section class="bg-gray-back preco d-flex flex-wrap align-end" id="preco">
      <div class="flex-grow border pa-5 ma-3 preco-item">
        <h2 class="title_2--bold color-gray-prod text-center mt-5">Cobre</h2>
        <span 
          class="max-w-300 margin-auto display-block my-5 text-center title_2--bold pt-3 pb-1 border-preco">
          <sup class="large--bold mb-10">R$</sup>19
        </span>
        <div class="max-w-300 my-5 margin-auto subtitle d-flex flex-column gap-1">
          <span class="item">Planos ilimitados</span>
          <span class="item">Acesso restrito</span>
          <span class="item">Cateúdo secreto</span>
          <span class="item">Suporte 24h</span>
        </div>
        <a href="#" class="title_1--bold uppercase text-center py-4 max-w-300 display-block margin-auto my-5 color-black border-send">
          Comprar
        </a>
      </div>

      <div class="flex-grow border pa-5 ma-3 preco-item">
        <h2 class="title_2--bold color-gray-prod text-center mt-5">Prata</h2>
        <span 
          class="max-w-300 margin-auto display-block my-5 text-center title_2--bold pt-3 pb-1 border-preco">
          <sup class="large--bold mb-10">R$</sup>39
        </span>
        <div class="max-w-300 my-5 margin-auto subtitle d-flex flex-column gap-1">
          <span class="item">Planos ilimitados</span>
          <span class="item">Acesso restrito</span>
          <span class="item">Cateúdo secreto</span>
          <span class="item">Suporte 24h</span>
          <span class="item">Compra exclusiva</span>
        </div>
        <a href="#" class="title_1--bold uppercase text-center py-4 max-w-300 display-block margin-auto my-5 color-black border-send">
          Comprar
        </a>
      </div>

      <div class="flex-grow border pa-5 ma-3 preco-item">
        <h2 class="title_2--bold color-gray-prod text-center mt-5">Ouro</h2>
        <span 
          class="max-w-300 margin-auto display-block my-5 text-center title_2--bold pt-3 pb-1 border-preco">
          <sup class="large--bold mb-10">R$</sup>79
        </span>
        <div class="max-w-300 my-5 margin-auto subtitle d-flex flex-column gap-1">
          <span class="item">Planos ilimitados</span>
          <span class="item">Acesso restrito</span>
          <span class="item">Cateúdo secreto</span>
          <span class="item">Suporte 24h</span>
          <span class="item">Suporte 24h</span>
          <span class="item">Download dos itens</span>
        </div>
        <a href="#" class="title_1--bold uppercase text-center py-4 max-w-300 display-block margin-auto my-5 color-black border-send">
          Comprar
        </a>
      </div>
    </section>

    <section id="qualidade" class="max-w-960 margin-auto my-15 d-flex flex-wrap">
      <div class="qualidade-item">
        <h2 class="title_1--bold color-gray-prod mb-5">Inteligente</h2>
        <span class="subtitle color-gray-text">O que temos que ter sempre em mente é que a 
        determinação clara de objetivos afeta positivamente a correta previsão</span>
      </div>

      <div class="qualidade-item">
        <h2 class="title_1 color-gray-prod mb-5">Compacto</h2>
        <span class="subtitle color-gray-text">O que temos que ter sempre em mente é que a determinação clara de objetivos afeta 
          positivamente a correta previsão das condições inegavelmente</span>
      </div>

      <div class="qualidade-item">
        <h2 class="title_1--bold color-gray-prod mb-5">Econômico</h2>
        <span class="subtitle color-gray-text">O que temos que ter sempre em mente é que a determinação clara de objetivos 
          afeta positivamente a correta previsão</span>
      </div>

      <div class="qualidade-item">
        <h2 class="title_1--bold color-gray-prod mb-5">Transparente</h2>
        <span class="subtitle color-gray-text">O que temos que ter sempre em mente é que a determinação clara de 
          objetivos afeta positivamente a correta previsão</span>
      </div>

      <div class="qualidade-item">
        <h2 class="title_1--bold color-gray-prod mb-5">Opaco</h2>
        <span class="subtitle color-gray-text">O que temos que ter sempre em mente é que a determinação clara de objetivos 
          afeta positivamente a correta previsão das condições inegavelmente</span>
      </div>

      <div class="qualidade-item">
        <h2 class="title_1--bold color-gray-prod mb-5">Sustentável</h2>
        <span class="subtitle color-gray-text">O que temos que ter sempre em mente é que a determinação clara de objetivos 
          afeta positivamente a correta previsão</span>
      </div>
    </section>

    <section class="newsletter d-flex flex-wrap">
      <div class="newsletter-info">
        <h1 class="title_2--bold color-gray-prod mb-2">Newsletter</h1>
        <h2 class="subtitle color-gray-text mb-3">assine e fique por dentro das novidades</h2>
      </div>
      <form class="newsletter-form d-flex flex-wrap">
        <input type="text" class="subtitle color-gray-text" placeholder="Seu e-mail">
        <button type="submit" class="title_1--bold bg-menu color-white ma-0 pointer">ASSINAR</button>
      </form>
    </section>

    <footer class="footer d-flex">
      <span class="text-center flex-grow title_2 color-info ma-5">FlexBlog © Todos os direitos reservados.</span>
    </footer>
  </section>
</template>

<script>
export default {
  data: () => ({
  }),
  computed: {
    smAndDown() {
      return this.$vuetify.breakpoint.smAndDown
    },
  }
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

.b-purple{
  border-top: 8px solid #ae81ff;
}

.b-pink{
  border-top: 8px solid #f9265e;
}

.b-blue{
  border-top: 8px solid #66d9eb;
}

.border{
  border: 4px solid white;
}

.border-preco{
  border-top: 4px solid white;
  border-bottom: 4px solid white;
}

.item::after{
  content: '';
  display: block;
  width: 6px;
  height: 6px;
  background: #2c70ff;
  border-radius: 50%
}

.item{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.border-send{
  border: 4px solid;
}

.preco{
  padding-left: 60px;
  padding-right: 60px;
}

.qualidade-item{
  flex: 1 1 300px;
  margin: 20px 10px;
}

.qualidade-item h2::before{
  content: '';
  display: inline-block;
  width: 8px;
  height: 30px;
  margin-right: 10px;
}

.qualidade-item:nth-of-type(3n + 1) h2::before{
  background: #ae81ff;
}

.qualidade-item:nth-of-type(3n + 2) h2::before{
  background: #f9265e;
}

.qualidade-item:nth-of-type(3n + 3) h2::before{
  background: #66d9eb;
}

.newsletter{
  background: #f7f7f7;
  padding: 60px calc((100% - 960px)/2);
}

.newsletter-info{
  flex: 1 1 240px;
  margin: 0 10px;
}
.newsletter-info h2{
  font-style: italic;
  width: 240px;
}

.newsletter-form{
  flex: 2 1 260px;
  margin: 0 10px;
  align-self: center;
}

.newsletter-form input{
  flex: 3 1 260px;
  border: 4px solid #2c70ff;
  background: transparent;
  padding: 15px 10px;
  margin: 0px;
  border-radius: 0px;
  outline: none;
}

.newsletter-form button{
  flex: 1 1 260px;
  border: 0px;
  padding: 15px 10px;
}

.footer{
  display: flex;
  min-height: 200px;
  background: #2c70ff;
  align-items: center;
}

@media (max-width: 800px) {
  .preco{
    padding-left: 10px !important;
    padding-right: 10px !important;
  }
  .preco .preco-item:nth-child(3){
    order: -2;
  }
  .preco .preco-item:nth-child(2){
    order: -1;
  }
  .newsletter-form button{
    font-size: 1.5em !important;
  }
}

</style>