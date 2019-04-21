<template>
  <div class="manufacturers">
        <div class="loading" v-if="loading">
            Loading...
        </div>

        <div v-if="error" class="error">
            {{ error }}
        </div>
        <br/>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Manufacturers <a href="javascript:void(0);" class="btn btn-primary float-right" >Add New</a></div>

                    <div class="card-body">
                        <table class="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Sr.No.</th>
                                    <th scope="col">Title</th>
                                </tr>
                            </thead>
                            <tbody v-if="manufacturers">
                                <tr v-for=" manufacturer  in manufacturers" v-bind:key="manufacturer.id">
                                    <td>{{ manufacturer.id }}</td>
                                    <td>{{ manufacturer.title }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <!-- <ul v-if="manufacturers">
            <li v-for=" manufacturer  in manufacturers" v-bind:key="manufacturer.id">
                <strong>Title:</strong> {{ manufacturer.title }}
            </li>
        </ul> -->
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            loading: false,
            manufacturers: null,
            error: null,
        };
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.error = this.manufacturers = null;
            this.loading = true;
            axios
                .get('/api/manufacturers')
                .then(response => {
                   this.manufacturers = response.data;
                   this.loading = false;
                });
        }
    }
}
</script>