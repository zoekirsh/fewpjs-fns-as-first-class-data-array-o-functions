function wakeDog(name, breed) {
  let wake = `Wake ${name} the ${breed}`
  console.log(wake)
  return wake
}

function leashDog(name, breed){
  let leash = `Leash ${name} the ${breed}`
  console.log(leash)
  return leash
}

function walkToPark(name, breed) {
  let park = `Walk to the park with ${name} the ${breed}`
  console.log(park)
  return park
}

function throwFrisbee(name, breed) {
  let frisbee = `Throw the frisbee for ${name} the ${breed}`
  console.log(frisbee)
  return frisbee
}

function walkHome(name, breed) {
  let home = `Walk home with ${name} the ${breed}`
  console.log(home)
  return home
}

function unleashDog(name, breed) {
  let unleash = `Unleash ${name} the ${breed}`
  console.log(unleash)
  return unleash
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(name, breed) {
  const exercises = []
  for (let i = 0; i < routine.length; i++){
    exercises.push(routine[i](name, breed))
  }
  return exercises
}