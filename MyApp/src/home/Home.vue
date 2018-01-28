<template>
    <v-flex class="white">
        <v-toolbar color="blue">
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title class="white--text">MyApp</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>
        </v-toolbar>
        
        <v-container
            fluid
            style="min-height: 0;text-align:center"
            grid-list-lg
        >
        <v-card>
            <v-card-title primary-title style="justify-content:center">
                <div>
                    <img src="../assets/img/v.png" style="margin:20px" />

                    <h3 class="headline mb-0">ServiceStack Vuetify project</h3>

                    <v-form>
                        <v-text-field
                            label="Name"
                            v-model="name"
                            :counter="30"
                            required
                        ></v-text-field>
                    </v-form>

                    <h2 class="result">{{result}}</h2>
                </div>                  
            </v-card-title>
            <v-card-actions style="justify-content:center">
                <v-btn flat color="green" to="/">Home</v-btn>
                <v-btn flat color="green" to="/view1">View 1</v-btn>
                <v-btn flat color="green" to="/view2">View 2</v-btn>
            </v-card-actions>
        </v-card>
        </v-container>
    </v-flex>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { client } from '../shared';
import { Hello } from '../dtos';

@Component
export default class HomeComponent extends Vue {
    @Prop() name: string;
    @Prop() result: string;

    activated() {
        this.nameChanged(this.name)
    }

    @Watch('name')
    onNameChanged(value:string, oldValue:string) {
        this.nameChanged(value);
    }

    async nameChanged(name: string) {
        if (name) {
            let request = new Hello();
            request.name = name;
            let r = await client.get(request);
            this.result = r.result;
        } else {
            this.result = '';
        }
    }
}
</script>

<style lang="scss">
@import '../app.scss';

.result {
    height: 30px;
    line-height: 30px;
    color: darken($emphasis-text-color, 5%);
}
</style>