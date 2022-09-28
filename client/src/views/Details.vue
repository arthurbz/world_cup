<template>
    <div>
        <div>
            <h1>DETAILS</h1>
        </div>
        <div class="spacing">
            <input placeholder="Year" v-model="year"/>
            <button @click="getData">
                SEARCH
            </button>
        </div>
        <div v-if="details && found">
            <h3 class="mt bold">Tournament</h3>
            <tr><span class="bold ml">Host Country:</span> {{ details.tournament.Country }}</tr>
            <tr><span class="bold ml">Winner:</span> {{ details.tournament.Winner }}</tr>
            <tr><span class="bold ml">Runners Up:</span> {{ details.tournament.RunnersUp }}</tr>

            <h3 class="mt bold">About the match:</h3>
            <tr><span class="bold ml">Date and time:</span> {{ details.Datetime }}</tr>
            <tr><span class="bold ml">Stadium:</span> {{ details.Stadium }}</tr>
            <tr><span class="bold ml">Teams:</span> {{ details.HomeTeam }} x {{ details.AwayTeam }}</tr>
            <tr>
                <span class="bold ml">Score:</span>
                {{ details.HomeTeamInitials }} {{ details.HomeTeamGoals }} x {{ details.AwayTeamGoals }} {{ details.AwayTeamInitials }}
            </tr>
        </div>
        <div v-else>
            <h1>Search details about a given year :D</h1>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            year: "",
            details: "",
            found: false,
        }
    },
    methods: {
        getData() {
            axios.get("http://localhost:5000/worldcup/details/" + this.year)
            .then((response) => {
                this.details = response.data.details
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

.mt {
    margin-top: 25px;
}

.mb {
    margin-bottom: 25px;
}
</style>
