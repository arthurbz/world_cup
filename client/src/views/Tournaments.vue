<template>
    <div>
        <div>
            <h1>TOURNAMENTS</h1>
        </div>
        <div class="spacing">
            <input placeholder="Year" v-model="year"/>
            <button @click="getData">
                SEARCH
            </button>
        </div>
        <div v-if="found">
            <tr><span class="bold ml">Host Country:</span> {{ result.Country }}</tr>
            <tr><span class="bold ml">Winner:</span> {{ result.Winner }}</tr>
            <tr><span class="bold ml">Runners Up:</span> {{ result.RunnersUp }}</tr>
        </div>
        <div v-else>
            <h1>Search info about the event on a given year :D</h1>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            year: "",
            result: [],
            found: false,
        }
    },
    methods: {
        getData() {
            axios.get("http://localhost:5000/worldcup/" + this.year)
            .then((response) => {
                this.result = response.data
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
