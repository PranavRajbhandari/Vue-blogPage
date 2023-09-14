<template>
    <header>
        <h1 v-on:click="changeTitle">{{ titles }}</h1>
        
    </header>
  </template>
  
  <script>
  import {bus} from '../main'
  export default {
     props:{
        titles:{
            type:String
        }
    },
    data () {
      return {
       
       title: 'Vue Pranav'
      }
    },
    methods:{
        changeTitle:function(){
            this.titles ='Vue wizards'
            bus.$emit('titleChanged','Vue Wizards')
            // this.$emit('changeTitle','Vue wizard')
            // event is ('change title'' this is what we want to change')

        }
    }
  }
  
  
  </script>
  
  <style scoped>
    header {
        background: lightgreen;
       padding: 10px;
    }
    h1 {
        color: #222;
        text-align: center;
    }
  </style>
  