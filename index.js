document.addEventListener("DOMContentLoaded", e =>{

const BASE_URL = "http://localhost:3000/";

fetch(BASE_URL+ "workouts")
.then((response)=>response.json())
.then((workouts) => {
console.log(workouts)

const selectButtonLegs = document.getElementById('Legs')
const selectButtonPush = document.getElementById('Push')
const selectButtonPull = document.getElementById('Pull')
const selectButtonCore = document.getElementById('Core')
const selectButtonCardio = document.getElementById('Cardio')

const selectButtonWorkout = [selectButtonLegs,selectButtonPush , selectButtonPull, selectButtonCore, selectButtonCardio]
selectButtonWorkout.forEach(workoutPreselected => {
    workoutPreselected.addEventListener("click", e => {
    
    console.log(e)
    console.log(workoutPreselected.id)
    let num = 0;
    if (workoutPreselected.id==="Legs") {
        num = 0;
    }
    else if (workoutPreselected.id==="Push") {
        num = 1;
    }
    else if (workoutPreselected.id==="Pull") {
        num = 2;
    }

    else if (workoutPreselected.id==="Core") {
        num = 3;
    }
    else if (workoutPreselected.id==="Cardio") {
        num = 4;
    }

    for (i=0; i<4; i++){
    const detailWorkout = document.getElementById(`tr${i+1}-exercise`)
    detailWorkout.innerText = workouts[num].exercises[i];
    const detailWorkoutReps = document.getElementById(`tr${i+1}-reps`)
    detailWorkoutReps.innerText = workouts[num].Reps
    const detailWorkoutSets = document.getElementById(`tr${i+1}-sets`)
    detailWorkoutSets.innerText = workouts[num].Sets
    }

})
});

    const submitButton = document.getElementById("new-exercises")
    submitButton.addEventListener("submit", (e) => {
        const updatedTable = document.getElementById("exercise-table")
        const newExerciseEntry = document.getElementById("new-exercise-text").value
        const newSetsEntry = document.getElementById("new-exercise-sets").value
        const newRepsEntry = document.getElementById("new-exercise-reps").value
        const newExerciseRow = document.createElement("tr")
        const newExerciseAdded = document.createElement("td")
        const newRepsAdded = document.createElement("td")
        const newSetsAdded = document.createElement("td")
        const deleteButton = document.createElement("button")
       
        updatedTable.appendChild(newExerciseRow)

        newExerciseRow.appendChild(newExerciseAdded)
        newExerciseRow.appendChild(newSetsAdded)
        newExerciseRow.appendChild(newRepsAdded)
        newExerciseRow.appendChild(deleteButton)

        newExerciseAdded.innerText = newExerciseEntry
        newSetsAdded.innerText = newSetsEntry
        newRepsAdded.innerText = newRepsEntry
        deleteButton.innerText = "x"

        deleteButton.addEventListener("click", ()=> {
            newExerciseRow.remove();
        })
        e.preventDefault()
    })
    
})
})
