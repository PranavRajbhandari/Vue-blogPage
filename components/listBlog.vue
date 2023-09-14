<template>
    <!-- using custom directive v-theme, and v-rainbow -->
    <div v-theme:column="'wide'" id="show-blogs">
      <h1>List blog Title</h1>
      <input type="text" v-model="search" placeholder="search blogs"/>
      <div v-for="blog in filteredBlogs" class="single-blog">
        <h2 v-rainbow>{{ blog.title | to-uppercase}}</h2>
       
        <!-- using filter | main.js -->
      </div>
    </div>
  </template>
  
  <script>
    import  searchMixin from '../mixins/searchMixin'

  export default {
    data() {
      return {
        blogs: [],
        search: ""
      };
    },
    methods: {},
    //lifecycle hook
    created() {
      this.$http
        .get("http://jsonplaceholder.typicode.com/posts")
        .then(function(data) {
          this.blogs = data.body.slice(0, 10);
        });
      },
      computed: {
      
      },
      filters:{
          toUppercase(value){
              return value.toUpperCase()
          }
      }, 
      directives:{
          'rainbow':{
              bind(el,binding,vnode){
      // binding-information of connection
      el.style.color = "#" + Math.random().toString().slice(2,8)
  
    }
          }
      },
      mixins:[searchMixin]
  };
  </script>
  
  <style>
  #show-blogs {
    max-width: 800px;
    margin: 0 auto;
  }
  .single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
  }
  </style>
  