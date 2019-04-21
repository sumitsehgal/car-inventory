<template>
    <div class="manufacturer-view" v-if="manufacturer">
        <div class="manufacturer-info">
            <table class="table">
                <tbody>
                    <tr>
                        <td>Id</td>
                        <td>{{manufacturer.id}}</td>
                    </tr>
                    <tr>
                        <td>Title</td>
                        <td>{{manufacturer.title}}</td>
                    </tr>
                </tbody>
            </table>
            <router-link to="/manufacturers">Back to All</router-link>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';
export default {
    name:'view',
    created() {
        Axios.get(`/api/manufacturers/${this.$route.params.id}`)
        .then((response)=> {
            console.log(response.data.manufacturer);
            this.manufacturer = response.data.manufacturer
        })
    },
    data() {
        return {
            manufacturer: null
        }
    }
}
</script>
