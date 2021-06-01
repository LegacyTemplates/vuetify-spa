<template>
    <v-flex id="view1">
        <v-card>
            <v-img
                class="white--text align-end"
                height="200px"
                :src="require('../assets/img/desert.jpg')"
                >
                <v-card-title class="title">{{message}}</v-card-title>
            </v-img>
            <v-card-actions style="justify-content:center">
                <v-btn text color="orange" to="/" exact>Home</v-btn>
                <v-btn text color="orange" to="/view1">View 1</v-btn>
                <v-btn text color="orange" to="/view2">View 2</v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class View1Component extends Vue {
    @Prop({ default: 'This is View 1' }) public message: string;
}
</script>

<style lang="scss">
@import '../app.scss';

#view1 h3 {
    color: darken($navbar-background, 10%);
    text-shadow: 2px 2px 3px rgba(0,0,0,0.2);
}
</style>
