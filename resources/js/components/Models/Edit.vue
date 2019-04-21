<template>
    <div class="new-model">
        <form @submit.prevent="edit">
            <div class="form-row">
                <div class="col">
                    <label for="name">Name</label>
                    <input type="text" v-model="models.name" class="form-control" id="name" placeholder="Model Name">
                </div>
                <div class="col">
                    <label for="manufacturer">Manufacture</label>
                    <select v-model="models.manfacturer_id" class="form-control">
                        <option v-for="manufacturer in manufacturers" v-bind:key="manufacturer.id" v-bind:value="manufacturer.id">
                            {{ manufacturer.title }}
                        </option>
                    </select>
                </div>
            </div>

            <div class="form-group">
                <label for="color">Color</label>
                <input class="form-control" v-model="models.color" id="color" placeholder="Color" />
            </div>

            <div class="form-group">
                <label for="year">Manufacture Year</label>
                <input class="form-control" v-model="models.manufacturer_year" id="year" placeholder="Manufacturer Year" />
            </div>

            <div class="form-group">
                <label for="register_no">Register Number</label>
                <input class="form-control" v-model="models.register_no" id="register_no" placeholder="Register No." />
            </div>

            <div class="form-group">
                <label for="note">Notes</label>
                <textarea class="form-control" v-model="models.note" id="note" placeholder="Notes" ></textarea>
            </div>
            
            <router-link class="btn btn-primary" to="/models">Cancel</router-link>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <div class="errors" v-if="errors">
            <ul>
                <li v-for="(fieldsError, fieldName) in errors" :key="fieldName">
                    <strong>{{ fieldName }}</strong> {{ fieldsError.join('\n') }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import validate from 'validate.js'
import Axios from 'axios';
export default {
    name:'new',
    created() {
        Axios.get(`/api/manufacturers`)
        .then((response)=> {
            this.manufacturers = response.data.manufacturers
        })
         Axios.get(`/api/models/${this.$route.params.id}`)
        .then((response)=> {
            this.models = response.data.model
        })
    },
    data(){
        return {
            models:{
             name: '',
             manfacturer_id: '',
             color: '',
             manufacturer_year: '',
             register_no: '',
             note: ''
            },
            errors: null,
            manufacturers: null
        }
    },
    methods: {
        edit() {
            this.errors = null;
            const constraints = this.getConstraints();
            const errors = validate(this.$data.models, constraints);
            if(errors) {
                this.errors = errors;
                return;
            }
            Axios.patch(`/api/models/${this.$route.params.id}`, this.$data.models)
            .then((response) => {
                this.$router.push('/models');
            })
        },
        getConstraints() {
            return {
                name: {
                    presence: true,
                    length: {
                        minimum: 3,
                        message: 'Must be at least 3 characters long.'
                    }
                }
            }
        }
    }
}
</script>
<style>
.errors {
    background: lightcoral;
    border-radius:5px;
    padding: 21px 0 2px 0;
    margin: 5px;
}
</style>

