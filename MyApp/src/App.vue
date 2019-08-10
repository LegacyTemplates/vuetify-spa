<template>
  <v-app>
    <v-navigation-drawer
      fixed
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-tile 
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/" exact>Home</v-btn>
        <v-btn flat to="/view1">View 1</v-btn>
        <v-btn flat to="/view2">View 2</v-btn>
      </v-toolbar-items>

    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">

          <v-layout column align-center>
            <router-view></router-view>
          </v-layout>

        </v-slide-y-transition>
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app style="justify-content:center">
      <div style="text-align:center;margin:10px">
        <div>
            <img src="/metadata/svg/logo.svg?fill=%23212529" height="32" style="vertical-align:middle;margin-right:5px;" />
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
    public drawer = true;
    public fixed = false;
    public items = [
      { icon: 'home', title: 'Home', to: '/' },
      { icon: 'bubble_chart', title: 'View 1', to: '/view1' },
      { icon: 'contacts', title: 'View 1', to: '/view2' },
    ];
    public miniVariant = true;
    public right = true;
    public title = 'MyApp';
    public name = '';
}
</script>