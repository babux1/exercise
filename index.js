document.addEventListener("DOMContentLoaded", e =>{

const BASE_URL = "http://localhost:3000/";

fetch(BASE_URL+ "workouts")
.then((response)=>response.json())
.then((legWorkouts) => {
console.log(legWorkouts)

const selectButtonLegs = document.getElementById('Legs')
const selectButtonPush = document.getElementById('Push')
const selectButtonPull = document.getElementById('Pull')
const selectButtonCore = document.getElementById('Core')
const selectButtonCardio = document.getElementById('Cardio')


// click for leg workouts
selectButtonLegs.addEventListener("click", (event) => {
    
    const detailWorkout1 =document.getElementById('tr1-exercise')
    detailWorkout1.innerText = legWorkouts[0].exercise1;
    const detailWorkout1Reps = document.getElementById('tr1-reps')
    detailWorkout1Reps.innerText = legWorkouts[0].Reps
    const detailWorkout1Sets = document.getElementById('tr1-sets')
    detailWorkout1Sets.innerText = legWorkouts[0].Sets
    
    const detailWorkout2 = document.getElementById('tr2-exercise')
    detailWorkout2.innerText = legWorkouts[0].exercise2;
    const detailWorkout2Reps = document.getElementById('tr2-reps')
    detailWorkout2Reps.innerText = legWorkouts[0].Reps
    const detailWorkout2Sets = document.getElementById('tr2-sets')
    detailWorkout2Sets.innerText = legWorkouts[0].Sets

    const detailWorkout3 = document.getElementById('tr3-exercise')
    detailWorkout3.innerText = legWorkouts[0].exercise3;
    const detailWorkout3Reps = document.getElementById('tr3-reps')
    detailWorkout3Reps.innerText = legWorkouts[0].Reps
    const detailWorkout3Sets = document.getElementById('tr3-sets')
    detailWorkout3Sets.innerText = legWorkouts[0].Sets

    const detailWorkout4 = document.getElementById('tr4-exercise')
    detailWorkout4.innerText = legWorkouts[0].exercise4;
    const detailWorkout4Reps = document.getElementById('tr4-reps')
    detailWorkout4Reps.innerText = legWorkouts[0].Reps
    const detailWorkout4Sets = document.getElementById('tr4-sets')
    detailWorkout4Sets.innerText = legWorkouts[0].Sets

})
// click for push workout
selectButtonPush.addEventListener("click", (event) => {
    
    const detailWorkout1 =document.getElementById('tr1-exercise')
    detailWorkout1.innerText = legWorkouts[1].exercise1;
    const detailWorkout1Reps = document.getElementById('tr1-reps')
    detailWorkout1Reps.innerText = legWorkouts[1].Reps
    const detailWorkout1Sets = document.getElementById('tr1-sets')
    detailWorkout1Sets.innerText = legWorkouts[1].Sets
    
    const detailWorkout2 = document.getElementById('tr2-exercise')
    detailWorkout2.innerText = legWorkouts[1].exercise2;
    const detailWorkout2Reps = document.getElementById('tr2-reps')
    detailWorkout2Reps.innerText = legWorkouts[1].Reps
    const detailWorkout2Sets = document.getElementById('tr2-sets')
    detailWorkout2Sets.innerText = legWorkouts[1].Sets

    const detailWorkout3 = document.getElementById('tr3-exercise')
    detailWorkout3.innerText = legWorkouts[1].exercise3;
    const detailWorkout3Reps = document.getElementById('tr3-reps')
    detailWorkout3Reps.innerText = legWorkouts[1].Reps
    const detailWorkout3Sets = document.getElementById('tr3-sets')
    detailWorkout3Sets.innerText = legWorkouts[1].Sets

    const detailWorkout4 = document.getElementById('tr4-exercise')
    detailWorkout4.innerText = legWorkouts[1].exercise4;
    const detailWorkout4Reps = document.getElementById('tr4-reps')
    detailWorkout4Reps.innerText = legWorkouts[1].Reps
    const detailWorkout4Sets = document.getElementById('tr4-sets')
    detailWorkout4Sets.innerText = legWorkouts[1].Sets
})
selectButtonPull.addEventListener("click", (event) => {
    
    const detailWorkout1 =document.getElementById('tr1-exercise')
    detailWorkout1.innerText = legWorkouts[2].exercise1;
    const detailWorkout1Reps = document.getElementById('tr1-reps')
    detailWorkout1Reps.innerText = legWorkouts[2].Reps
    const detailWorkout1Sets = document.getElementById('tr1-sets')
    detailWorkout1Sets.innerText = legWorkouts[2].Sets
    
    const detailWorkout2 = document.getElementById('tr2-exercise')
    detailWorkout2.innerText = legWorkouts[2].exercise2;
    const detailWorkout2Reps = document.getElementById('tr2-reps')
    detailWorkout2Reps.innerText = legWorkouts[2].Reps
    const detailWorkout2Sets = document.getElementById('tr2-sets')
    detailWorkout2Sets.innerText = legWorkouts[2].Sets

    const detailWorkout3 = document.getElementById('tr3-exercise')
    detailWorkout3.innerText = legWorkouts[2].exercise3;
    const detailWorkout3Reps = document.getElementById('tr3-reps')
    detailWorkout3Reps.innerText = legWorkouts[2].Reps
    const detailWorkout3Sets = document.getElementById('tr3-sets')
    detailWorkout3Sets.innerText = legWorkouts[2].Sets

    const detailWorkout4 = document.getElementById('tr4-exercise')
    detailWorkout4.innerText = legWorkouts[2].exercise4;
    const detailWorkout4Reps = document.getElementById('tr4-reps')
    detailWorkout4Reps.innerText = legWorkouts[2].Reps
    const detailWorkout4Sets = document.getElementById('tr4-sets')
    detailWorkout4Sets.innerText = legWorkouts[2].Sets
})
selectButtonCore.addEventListener("click", (event) => {
    
    const detailWorkout1 =document.getElementById('tr1-exercise')
    detailWorkout1.innerText = legWorkouts[3].exercise1;
    const detailWorkout1Reps = document.getElementById('tr1-reps')
    detailWorkout1Reps.innerText = legWorkouts[3].Reps
    const detailWorkout1Sets = document.getElementById('tr1-sets')
    detailWorkout1Sets.innerText = legWorkouts[3].Sets
    
    const detailWorkout2 = document.getElementById('tr2-exercise')
    detailWorkout2.innerText = legWorkouts[3].exercise2;
    const detailWorkout2Reps = document.getElementById('tr2-reps')
    detailWorkout2Reps.innerText = legWorkouts[3].Reps
    const detailWorkout2Sets = document.getElementById('tr2-sets')
    detailWorkout2Sets.innerText = legWorkouts[3].Sets

    const detailWorkout3 = document.getElementById('tr3-exercise')
    detailWorkout3.innerText = legWorkouts[3].exercise3;
    const detailWorkout3Reps = document.getElementById('tr3-reps')
    detailWorkout3Reps.innerText = legWorkouts[3].Reps
    const detailWorkout3Sets = document.getElementById('tr3-sets')
    detailWorkout3Sets.innerText = legWorkouts[3].Sets

    const detailWorkout4 = document.getElementById('tr4-exercise')
    detailWorkout4.innerText = legWorkouts[3].exercise4;
    const detailWorkout4Reps = document.getElementById('tr4-reps')
    detailWorkout4Reps.innerText = legWorkouts[3].Reps
    const detailWorkout4Sets = document.getElementById('tr4-sets')
    detailWorkout4Sets.innerText = legWorkouts[3].Sets
})
selectButtonCardio.addEventListener("click", (event) => {
    
    const detailWorkout1 =document.getElementById('tr1-exercise')
    detailWorkout1.innerText = legWorkouts[4].exercise1;
    const detailWorkout1Reps = document.getElementById('tr1-reps')
    detailWorkout1Reps.innerText = legWorkouts[4].Reps
    const detailWorkout1Sets = document.getElementById('tr1-sets')
    detailWorkout1Sets.innerText = legWorkouts[4].Sets
    
    const detailWorkout2 = document.getElementById('tr2-exercise')
    detailWorkout2.innerText = legWorkouts[4].exercise2;
    const detailWorkout2Reps = document.getElementById('tr2-reps')
    detailWorkout2Reps.innerText = legWorkouts[4].Reps
    const detailWorkout2Sets = document.getElementById('tr2-sets')
    detailWorkout2Sets.innerText = legWorkouts[4].Sets

    const detailWorkout3 = document.getElementById('tr3-exercise')
    detailWorkout3.innerText = legWorkouts[4].exercise3;
    const detailWorkout3Reps = document.getElementById('tr3-reps')
    detailWorkout3Reps.innerText = legWorkouts[4].Reps
    const detailWorkout3Sets = document.getElementById('tr3-sets')
    detailWorkout3Sets.innerText = legWorkouts[4].Sets

    const detailWorkout4 = document.getElementById('tr4-exercise')
    detailWorkout4.innerText = legWorkouts[4].exercise4;
    const detailWorkout4Reps = document.getElementById('tr4-reps')
    detailWorkout4Reps.innerText = legWorkouts[4].Reps
    const detailWorkout4Sets = document.getElementById('tr4-sets')
    detailWorkout4Sets.innerText = legWorkouts[4].Sets
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
       
        updatedTable.appendChild(newExerciseRow)

        newExerciseRow.appendChild(newExerciseAdded)
        newExerciseRow.appendChild(newSetsAdded)
        newExerciseRow.appendChild(newRepsAdded)

        newExerciseAdded.innerText = newExerciseEntry
        newSetsAdded.innerText = newSetsEntry
        newRepsAdded.innerText = newRepsEntry
        e.preventDefault()
    })
})
