<template>
    <div>
        <span class="help is-info"  v-if="isLoading">Loading...</span>
        <table class="table" v-else>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Identification</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="personal in personal">
                    <tr v-bind:key="personal.id">
                        <td>{{ personal.id }}</td>
                        <td>{{ personal.name }}</td>
                        <td>{{ personal.last_name }}</td>
                        <td>{{ personal.email }}</td>
                        <td>{{ personal.identification }}</td>
                        <td>
                            <form @submit.prevent="onSubmit(personal)">
                                <button class="button is-primary">Delete</button>
                            </form>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>

    </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'

export default {
    data() {
        return {
            personal: {},
            isLoading: true
        }
    },
    async created () {
        
        try {
            const response = await axios.get('http://localhost:8000/personal')
            this.personal = response.data
            this.isLoading = false
        } catch(e) {
            // handle authentication error here
        }
    },
    methods: {
        onSubmit(personal) {
            
        }
    }
}
</script>