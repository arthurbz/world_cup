<template>
    <div>
        <div>
            <h1>FINALS</h1>
        </div>
        <div class="spacing">
            <input placeholder="Year" v-model="year"/>
            <button @click="getData">
                SEARCH
            </button>
        </div>
        <div v-if="match && found">
            <h3 class="mt bold">About the match:</h3>
            <tr><span class="bold ml">Date and time:</span> {{ match.Datetime }}</tr>
            <tr><span class="bold ml">Stadium:</span> {{ match.Stadium }}</tr>
            <tr><span class="bold ml">Teams:</span> {{ match.HomeTeam }} x {{ match.AwayTeam }}</tr>
            <tr>
                <span class="bold ml">Score:</span>
                {{ match.HomeTeamInitials }} {{ match.HomeTeamGoals }} x {{ match.AwayTeamGoals }} {{ match.AwayTeamInitials }}
            </tr>
            <tr><span class="bold ml">Win conditions:</span> {{ match.WinConditions }} </tr>
        </div>
        <div v-else>
            <h1>Search details about the finals on a given year :D</h1>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            year: "",
            match: null,
            found: false,
        }
    },
    methods: {
        getData() {
            axios.get("http://localhost:5000/worldcup/finals/" + this.year)
            .then((response) => {
                this.match = response.data
                this.match.WinConditions = this.match.WinConditions ?? "No special conditions"
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
