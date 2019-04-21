<template>
    <div>
        <div class="btn-wrapper">
            <router-link to="/models/new" class="btn btn-primary">New</router-link>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Sr.No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Manufacturer</th>
                     <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <template v-if="!models.length">
                    <tr>
                        <td colspan="4" class="text-center">No Models</td>
                    </tr>
                </template>
                <template v-else>
                    <tr v-for=" model  in models" v-bind:key="model.id">
                        <td>{{ model.id }}</td>
                        <td>{{ model.name }}</td>
                        <td>{{ model.manufacturer.title }}</td>
                        <td>
                            <router-link :to="`/models/${model.id}`">View</router-link>
                            <router-link :to="`/models/edit/${model.id}`">Edit</router-link>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'index',
    mounted() {
        this.$store.dispatch("getModels");
    },
    computed: {
        models() {
            return this.$store.getters.models
        }
    }
}
</script>

<style>
.btn-wrapper {
    text-align: right;
    margin-bottom: 20px;
}
</style>

