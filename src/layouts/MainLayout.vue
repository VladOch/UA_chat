<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="row justify-between">
         <q-btn 
         flat
         dense
         v-go-back.single
         color="white" 
         icon="arrow_back" 
         label="Back" 
         v-if="this.$route.fullPath == '/chat'"
         />

        <q-toolbar-title class="absolute-center">
         {{title}}
        </q-toolbar-title>
        <router-link to="/auth">
        <q-btn 
         flat
         dense
         @click="loginRouter"
         color="white" 
         icon="login" 
         label="Login" 
         v-if="this.$route.fullPath !== '/auth'"
         class="col-md-4 offset-md-4"
         />
        </router-link>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import routes from '../router/routes';

export default {
  computed: {
    title() {
      console.log(this.$route)
    const RoutePathTitle = 
    (this.$route.path == '/') ? 'Main page' :
    (this.$route.path == '/auth') ? 'Login page' : 'Chat page';
       return RoutePathTitle
    }
  },  
  methods: {
    loginRouter() {
      routes.push('/login')
    }
  }
}
</script>
