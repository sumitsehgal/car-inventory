<template>
    <div class="new-manufacturer">
        <form @submit.prevent="add">
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" v-model="manufacturer.title" class="form-control" id="title" placeholder="Manufacturer Name">
            </div>
            <router-link class="btn btn-primary" to="/manufacturers">Cancel</router-link>
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
    data(){
        return {
            manufacturer:{
             title: ''   
            },
            errors: null,
        }
    },
    methods: {
        add() {
            this.errors = null;
            const constraints = this.getConstraints();
            const errors = validate(this.$data.manufacturer, constraints);
            console.log(errors);
            if(errors) {
                this.errors = errors;
                return;
            }
            Axios.post('/api/manufacturers', this.$data.manufacturer)
                .then((response) => {
                    this.$router.push('/manufacturers');
                })
        },
        getConstraints() {
            return {
                title: {
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

