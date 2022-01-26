const BASE_URL = "http://localhost:3000/";

fetch(BASE_URL+ "workouts")
.then((response)=>response.json())
.then((legWorkouts) => {
console.log(legWorkouts)

const workoutDisplay = document.getElementById('tr1-exercise')
const selectButton = document.getElementById('submit')

// legWorkouts.foreach(oneExercise => {
    // const newContent = document.createElement('li')
    // newContent.innerText = oneExercise.exercise1
    // workoutDisplay.appendChild(newContent)

selectButton.addEventListener("click", (event) => {
    
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
});
// })