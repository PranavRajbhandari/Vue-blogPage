<template>
    <footer>
        <p>{{ copyright }} {{ titles }}</p>
    </footer>
 </template>
  
  <script>
  import {bus} from '../main'
  export default {
   props:{
    titles:{
        type: String
    }
   },
    data () {
      return {
       copyright: 'Copyright 2023 '
      }
    },
    created(){
      bus.$on('titleChanged', (data) =>{
        this.titles = data
      })
    }
  }
  
  
  </script>
  
  <style scoped>
  footer {
    background: #222;
    padding: 6px;

  }

  p {
    color: green;
    text-align: center;
  }
  </style>
k  