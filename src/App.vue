<template>
  <div id="app">
    <Header id="header"></Header>
    <main id="main">
      <router-view/>
    </main>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
import Header from '@/components/header'
import footer from '@/components/footer'

export default {
  name: 'App',
  components:{
    Header,
    footer
  }
}
</script>

<style lang="less">
@import "./assets/common.less";

#app {
  display: grid;
  grid-template-columns: 12% auto 12%;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: "header header header"
                       ".      main   ."
                       "footer footer footer";
  #header {
    grid-area: header;
    padding-left: 12%;
    padding-right: 12%;
  }
  #main {
    grid-area: main;
  }                     
  #footer {
    grid-area: footer;
    padding-left: 12%;
    padding-right: 12%;
  }       
}

@media (max-width: 768px) {
  #app {
    grid-template-columns: 10x auto 10px;

    #header,#footer {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
}
</style>
