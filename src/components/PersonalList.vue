<template>
    <div>
        <span class="help is-info" v-if="isLoading"><span class="icon"><i class="fas fa-spinner fa-pulse"></i></span> Loading...</span>
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
                            <a href="#" @click="log(personal)"><span class="icon"><i class="fas fa-edit"></i></span></a> &nbsp;
                            <a href="#" @click="log(personal)"><span class="icon has-text-danger"><i class="fas fa-trash"></i></span></a>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>

    </div>
</template>

<script>

import axios from 'axios'

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
        log: function (personal) {

            console.log(personal);
        }
    }
}
</script>