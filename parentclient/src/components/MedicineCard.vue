<template>
    <div>
        <i class="material-icons circle">event_note</i>
        <span class="medicine-title">{{med.name}}</span><span style="margin-left: 15px;">Dosage: {{med.dosage + med.units}}</span>
        <p>Medication Taken:</p>
        <!-- TODO: Last Taken -->
        <div class="container row">
            <div class="col m6 s6">
                <label for="datepicker">Date Taken:</label><input type="text" class="datepicker">
            </div>
            <div class="col m6 s6">
                <label for="timepicker">Time Taken:</label><input type="text" class="timepicker">
            </div>
        </div>
        <span v-on:click="submitTime(med.id)" class="secondary-content">
            <i v-show="addTimeShow" class="material-icons submitTime">add_circle_outline</i>
            <i v-show="successShowTime" class="material-icons">check_circle</i>
        </span>
    </div>
</template>

<script>
    export default {
        name: "medicationCard",
        props: ['med', 'medChildID'],
        data: function() {
            return {
                addTimeShow: true,
                successShowTime: false,
                selectedPrescriptionID: "",
            };
        },
        methods: {
            // TODO: Add a clear button to undo.
            submitTime: function(medicationID) {
                if (!this.successShowTime) {
                    var chosenDate = $(".datepicker").val();
                    var chosenTime = $(".timepicker").val();
                    if (!(chosenDate === "") && !(chosenTime === "")) { // Ensure input has been filled out.
                        var fullDateString = chosenDate + " " + chosenTime;
                        // console.log(fullDateString);
                        var setDate = new Date(fullDateString).getTime();
                        var adminObj = {
                            "child_id": this.medChildID,
                            "parent_id": "2",
                            "date": setDate,
                            "prescription_id": medicationID,
                        }
                        $.ajax({
                            url: 'http://localhost:8000/administration',
                            type: 'POST',
                            data: adminObj,
                            success: (response) => {
                                var resultant = response;
                                console.log(resultant);
                                this.addTimeShow = false;
                                this.successShowTime = true;
                            },
                            error: (error) => {
                                console.log("Error creating post: ", error);
                            }
                        })
                    }
                }
            },
        } // end of methods.
    } // End of export.
</script>

<style scoped>
    .submitTime {
        cursor: pointer;
    }
</style>
