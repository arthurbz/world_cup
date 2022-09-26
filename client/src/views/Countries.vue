<template>
    <div>
        <div>
            <h1>COUNTRIES</h1>
        </div>
        <div class="spacing">
            <input placeholder="Country" v-model="country"/>
            <button @click="getData">
                SEARCH
            </button>
        </div>
        <div v-if="found && Array.isArray(results)">
            <tr v-for="result in results">
                <td><span class="bold ml">Year:</span> {{ result.Year }}</td>
                <td><span class="bold ml">Host Country:</span> {{ result.Country }}</td>
                <td><span class="bold ml">Position:</span> {{ result.Position }}</td>
            </tr>
        </div>
        <div v-else-if="found">
            <h1>I'm sorry, I didn't found this country :(</h1>
        </div>
        <div v-else>
            <h1>Search info about how well a team has performed :D</h1>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            country: "",
            results: [],
            found: false,
        }
    },
    methods: {
        getData() {
            axios.get("http://localhost:5000/worldcup/country/" + this.country)
            .then((response) => {
                this.results = response.data
                this.found = true
            }).catch((error) => {
                this.found = false
            });
        }
    },
}
</script>

<style>
.spacing {
    margin-top: 15px;
    margin-bottom: 15px;
}

.bold {
    font-weight: bold;
}

.ml {
    margin-left: 10px;
}
</style>
