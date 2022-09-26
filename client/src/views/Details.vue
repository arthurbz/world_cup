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
        <div v-if="tournament && match && found">
            <h3 class="mt bold">Tournament</h3>
            <tr><span class="bold ml">Host Country:</span> {{ tournament.Country }}</tr>
            <tr><span class="bold ml">Winner:</span> {{ tournament.Winner }}</tr>
            <tr><span class="bold ml">Runners Up:</span> {{ tournament.RunnersUp }}</tr>

            <h3 class="mt bold">About the match:</h3>
            <tr><span class="bold ml">Date and time:</span> {{ match.Datetime }}</tr>
            <tr><span class="bold ml">Stadium:</span> {{ match.Stadium }}</tr>
            <tr><span class="bold ml">Teams:</span> {{ match.HomeTeam }} x {{ match.AwayTeam }}</tr>
            <tr>
                <span class="bold ml">Score:</span>
                {{ match.HomeTeamInitials }} {{ match.HomeTeamGoals }} x {{ match.AwayTeamGoals }} {{ match.AwayTeamInitials }}
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
            tournament: null,
            match: null,
            found: false,
        }
    },
    methods: {
        getData() {
            axios.get("http://localhost:5000/worldcup/details/" + this.year)
            .then((response) => {
                const data = response.data
                this.tournament = data.tournament
                this.match = data.match
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
