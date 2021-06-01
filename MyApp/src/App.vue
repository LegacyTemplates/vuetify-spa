<template>
  <v-app>
    <v-navigation-drawer fixed :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">My App</v-list-item-title>
          <v-list-item-subtitle>subtext</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item router :to="item.to" :key="i" v-for="(item, i) in items" exact>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    <v-app-bar fixed app :clipped-left="clipped">
      <v-app-bar-nav-icon  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'mdi-chevron-right' : 'mdi-chevron-left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text to="/" exact>Home</v-btn>
        <v-btn text to="/view1" exact>View 1</v-btn>
        <v-btn text to="/view2" exact>View 2</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    
    <v-main>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>
            <router-view></router-view>
          </v-layout>
        </v-slide-y-transition>
      </v-container>
    </v-main>
    
    <v-footer :fixed="fixed" class="d-flex justify-center">
      <div style="margin:10px">
        <div>
          <img src="/svg/svg-icons/logo.svg?fill=%23212529" height="32" style="vertical-align:middle;margin-right:5px;" />
          <a href="https://servicestack.net/vs-templates/vuetify-spa">Learn about this Vuetify VS.NET template</a>
        </div>
      </div>
    </v-footer>

  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class AppComponent extends Vue {
    public clipped = false;
    public drawer = false;
    public fixed = false;
    public items = [
      { icon: 'home', title: 'Home', to: '/' },
      { icon: 'bubble_chart', title: 'View 1', to: '/view1' },
      { icon: 'contacts', title: 'View 1', to: '/view2' },
    ];
    public miniVariant = false;
    public right = true;
    public title = '';
    public name = '';
}
</script>
