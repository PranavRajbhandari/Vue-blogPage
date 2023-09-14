<template>
  <div>
    <head-blog></head-blog>
  <router-view></router-view>

  </div>
</template>

<script>
import addBlog from './components/addBlog.vue';
import showBlog from './components/showBlog.vue';
import listBlog from './components/listBlog.vue';
import head from './components/head.vue'
export default {
  components:{
    'add-blog':addBlog,
    'show-blog': showBlog,
    'list-blog':listBlog,
    'head-blog':head
  },

  data(){
    return {

    }
  },
  methods:{

  },
}

</script>

<style>
body{
  margin: 0;
  font-family: 'Nunito SemiBold';
}
</style>



















<!-- <template>
  <div>
      <keep-alive>
          <component v-bind:is="component"></component>
      </keep-alive>
      <button v-on:click="component = 'form-one'">Show form one</button>
      <button v-on:click="component = 'form-two'">Show form two</button>
  </div>
</template>

<script>
// Imports
import formOne from './components/formOne.vue';
import formTwo from './components/formTwo.vue';

export default {
  components: {
      'form-one': formOne,
      'form-two': formTwo
  },
  data () {
      return {
          component: 'form-one'
      }
  },
  methods: {
      handleSubmit: function(){
          alert('thanks for submitting');
      }
  }
}
</script>

<style>
body{
  margin: 0;
  font-family: 'Nunito SemiBold';
}
</style> -->

<!-- <template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>This is the title from the form</h3>
        <p>Information about form</p>
      </div>

      <div slot="form-fields">
        <input type="text" placeholder="Name" required />
        <input type="password" placeholder="Password" required />
      </div>

      <div slot="form-control">
        <button v-on:click="handleSumit">Submit</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import formHelper from "./components/formHelper.vue";
export default {
  components: {
    "form-helper": formHelper
  },
  data() {
    return {
      title: "hi i am title"
    };
  },
  methods: {}
};
</script>
<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
</style> -->
<!-- ----------------------------------------------------------------------------------------- -->
<!-- <template>
  <div>

    <app-header v-bind:titles="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-ninjas v-bind:ninjas="ninjas"> </app-ninjas>
    <app-footer  v-bind:titles="title"></app-footer>

  </div>
  </template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';
import Ninjas from './components/Ninjas.vue';

export default {
  components: {
    'app-header': Header,
    'app-footer':Footer,
    'app-ninjas': Ninjas
  },
  data () {
    return {
      ninjas: [
                {name: 'Ryu', speciality: 'Vue Components', show: false},
                {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
                {name: 'Hitoshi', speciality: 'Click Events', show: false},
                {name: 'Tango', speciality: 'Conditionals', show: false},
                {name: 'Kami', speciality: 'Webpack', show: false},
                {name: 'Yoshi', speciality: 'Data Diggin', show: false}
            ],
            title: "Vue Pranav"
    }
  },
  methods:{
    updateTitle:function(updatedTitle){
      this.title = updatedTitle;
    }
  }

}


</script>

<style scoped>

</style> -->
