<template>
    <div>
        <div class="navbar navbar-light bg-light">
            <span class="navbar-brand mb-0 h1">Generate Reports</span>

        </div>

        <div class="container">
            <form v-on:submit.prevent="onSubmit">
                <div class="form-group">
                    <label for="child_id">Child Id:</label>
                    <input class="form-control" id="child_id" type="number" name="child_id" placeholder="0">
                </div>
                <div class="form-group">
                    <label for="min_date">Date From:</label>
                    <input class="form-control" id="min_date" type="date" name="min_date">
                </div>
                <div class="form-group">
                    <label for="max_date">Date To:</label>
                    <input class="form-control" id="max_date" type="date" name="max_date">
                </div>
                <button v-on:click="getReport()" type="submit" class="btn btn-primary">Submit</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Child</th>
                        <th>Prescription</th>
                        <th>Parent</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="administration in administrations" :key="administration.child_id + administration.prescription_id + administration.parent_id + administration.date">
                        <td>{{administration.child_id}}</td>
                        <td>{{administration.prescription_id}}</td>
                        <td>{{administration.parent_id}}</td>
                        <td>{{administration.date}}</td>
                    </tr>
                </tbody>
            </table>
            <table>
                <thead>
                    <tr>
                        <th>Child</th>
                        <th>Checkout</th>
                        <th>Checkin</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="custody in custody_events" :key="custody.child_id + custody.checkout + custody.checkin">
                        <td>{{custody.child_id}}</td>
                        <td>{{custody.checkout}}</td>
                        <td>{{custody.checkin}}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    computed: {
        administrations() {
            return this.$store.getters.administrations;
        },
        custody_events() {
            return this.$store.getters.custody;
        },
    },
    components: {},
    methods: {
        getReport() {
            this.$store.dispatch('getReport', {
                child_id: $('#child_id').val(),
                min_date: $('#min_date').val(),
                max_date: $('#max_date').val(),
            });
        },
    },
};
</script>
