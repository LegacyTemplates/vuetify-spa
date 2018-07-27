<template>
    <v-flex id="view2">
        <v-card>
            <v-card-media :src="require('../assets/img/desert.jpg')" height="200px"></v-card-media>
            <v-card-title primary-title style="justify-content:center">
                <div>
                    <h2>{{message}}</h2>
                </div>                  
            </v-card-title>
            <v-card-actions style="justify-content:center">
                <v-btn flat color="green" to="/" exact>Home</v-btn>
                <v-btn flat color="green" to="/view1">View 1</v-btn>
                <v-btn flat color="green" to="/view2">View 2</v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class View2Component extends Vue {
    @Prop({ default: 'This is View 2' }) public message: string;
}
</script>
