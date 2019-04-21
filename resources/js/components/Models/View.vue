<template>
    <div class="model-view" v-if="model">
        <div class="model-info">
            <table class="table">
                <tbody>
                    <tr>
                        <td>Id</td>
                        <td>{{model.id}}</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>{{model.name}}</td>
                    </tr>
                    <tr>
                        <td>Manufacturer</td>
                        <td>{{model.manufacturer.title}}</td>
                    </tr>
                    <tr>
                        <td>Color</td>
                        <td>{{model.color}}</td>
                    </tr>
                    <tr>
                        <td>Register Number</td>
                        <td>{{model.register_no}}</td>
                    </tr>
                    <tr>
                        <td>Notes</td>
                        <td>{{model.note}}</td>
                    </tr>
                </tbody>
            </table>
            <router-link to="/models">Back to All</router-link>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';
export default {
    name:'view',
    created() {
        Axios.get(`/api/models/${this.$route.params.id}`)
        .then((response)=> {
            console.log(response.data.model);
            this.model = response.data.model
        })
    },
    data() {
        return {
            model: null
        }
    }
}
</script>
