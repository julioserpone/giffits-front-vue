<template>
    <div>
        <nav>
            <router-link to='/person/create' class="button is-link">Create Person</router-link>
        </nav>
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
                <template v-for="person in personal">
                    <tr v-bind:key="person.id">
                        <td>{{ person.id }}</td>
                        <td>{{ person.name }}</td>
                        <td>{{ person.last_name }}</td>
                        <td>{{ person.email }}</td>
                        <td>{{ person.identification }}</td>
                        <td>
                            <router-link :to="`/person/edit/${person.id}`"><span class="icon"><i class="fas fa-edit"></i></span> &nbsp;</router-link>
                            <a href="#" @click="deletePerson(person)"><span class="icon has-text-danger"><i class="fas fa-trash"></i></span></a>
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
            const response = await axios.get(this.$hostname + "/personal")
            this.personal = response.data
            this.isLoading = false
        } catch(e) {
            // handle authentication error here
        }
    },
    methods: {
        findPersonal: function () {

            axios.get(this.$hostname + '/personal')
            .then(response => {
                this.personal = response.data
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => this.isLoading = false);
        },
        deletePerson: function (person) {

            if(confirm("Do you really want to delete?")) {
                this.isLoading = true;
                axios.delete(this.$hostname + "/personal/" + person.id + "/delete")
                .then(resp => {
                    this.findPersonal();
                })
                .catch(error => {
                    console.log(error);
                })
            }
        }
    }
}
</script>