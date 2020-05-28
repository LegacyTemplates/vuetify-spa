<template>
    <v-flex id="view2">
        <v-card>
            <v-img
                class="white--text align-end"
                height="200px"
                :src="require('../assets/img/desert.jpg')"
                >
                <v-card-title>{{message}}</v-card-title>
            </v-img>
            <v-card-actions style="justify-content:center">
                <v-btn text color="green" to="/" exact>Home</v-btn>
                <v-btn text color="green" to="/view1">View 1</v-btn>
                <v-btn text color="green" to="/view2">View 2</v-btn>
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
