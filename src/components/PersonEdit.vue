<template>
    <div>
        <span class="help is-info" v-if="isLoading"><span class="icon"><i class="fas fa-spinner fa-pulse"></i></span> Loading...</span>
        <div class="notification is-danger" v-if="withError">
            {{ errors }}
        </div>
        <form @submit.prevent="submitForm">
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input class="input" type="text" name="name" id="name" v-model="name" placeholder="Name">
                </div>
            </div>
            <div class="field">
                <label class="label">Last Name</label>
                <div class="control">
                    <input class="input" type="text" name="last_name" id="last_name" v-model="last_name" placeholder="Last Name">
                </div>
            </div>
            <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left">
                    <input class="input" type="email" name="email" id="email" v-model="email" placeholder="Email">
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <label class="label">Identification</label>
                <div class="control">
                    <input class="input" type="text" name="identification" id="identification" v-model="identification" placeholder="Identification">
                </div>
            </div>

            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-primary">Submit</button>
                </div>
                <div class="control">
                    <button class="button is-link is-light" v-on:click="back">Cancel</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    data() {
        return {
            name: '',
            last_name: '',
            email: '',
            identification: '',
            isLoading: false,
            withError: false,
            errors: '',
            id: null
        }
    },
    async created () {

        this.isLoading = true;
        this.withError = false;
        this.errors = '';

        try {

            this.id = this.$route.params.id;
            axios.get("http://localhost:8000/personal/" + this.id + "/edit")
            .then(response => {
                this.name = response.data.name;
                this.last_name = response.data.last_name;
                this.email = response.data.email;
                this.identification = response.data.identification;
            }).catch(e => {
                this.errors = e.response.data.errors;
                this.withError = true;
            })
            .finally(() => this.isLoading = false);

        } catch(e) {
            // handle authentication error here
        }
    },
    methods: {
        submitForm: function() {
            this.isLoading = true;
            this.withError = false;
            this.errors = '';
            axios.put("http://localhost:8000/personal/" + this.id + "/update", 
            { 
                name: this.name,
                last_name: this.last_name,
                email: this.email,
                identification: this.identification
            }, 
            {
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded',
                }
            }).then(response => {
                this.$router.push({ name: 'home' }) 
            }).catch(e => {
                this.errors = e.response.data.errors;
                this.withError = true;
            })
            .finally(() => this.isLoading = false);
        },
        back: function() {
            this.$router.push({ name: 'home' });
        }
    }
}
</script>