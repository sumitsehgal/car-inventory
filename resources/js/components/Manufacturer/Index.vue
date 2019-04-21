<template>
    <div>
        <div class="btn-wrapper">
            <router-link to="/manufacturers/new" class="btn btn-primary">New</router-link>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Sr.No.</th>
                    <th scope="col">Title</th>
                </tr>
            </thead>
            <tbody>
                <template v-if="!manufacturers.length">
                    <tr>
                        <td colspan="3" class="text-center">No Manufacturer</td>
                    </tr>
                </template>
                <template v-else>
                    <tr v-for=" manufacturer  in manufacturers" v-bind:key="manufacturer.id">
                        <td>{{ manufacturer.id }}</td>
                        <td>{{ manufacturer.title }}</td>
                        <td>
                            <router-link :to="`/manufacturers/${manufacturer.id}`">View</router-link>
                            <router-link :to="`/manufacturers/edit/${manufacturer.id}`">Edit</router-link>
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
        this.$store.dispatch("getManufacturers");
    },
    computed: {
        manufacturers (){
            return this.$store.getters.manufacturers
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

