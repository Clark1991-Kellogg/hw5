function levelOfService(ride) {
  let levelOfService
  if (ride.length > 1) {
    levelOfService = 'Noober Pool'
  } else if (ride[0].purpleRequested) {
    levelOfService = 'Noober Purple'
  } else if (ride[0].numberOfPassengers > 3) {
    levelOfService = 'Noober XL'
  } else {
    levelOfService = 'Noober X'
  }
  return levelOfService
}
function filterPoolArray(rides) {
  let newArray = []
  console.log(newArray)
  for (z=0; z<rides.length; z++) {
    // console.log(rides[z])
    if (levelOfService(rides[z]) == 'Noober Pool') {
      newArray.push(rides[z])
      console.log('Pool') 
    }
  }
  console.log(newArray)  
  renderRides(newArray)
}
function filterPurpleArray(rides) {
  let newArray = []
  console.log(newArray)
  for (z=0; z<rides.length; z++) {
    // console.log(rides[z])
    if (levelOfService(rides[z]) == 'Noober Purple') {
      newArray.push(rides[z])
      console.log('Purple') 
    }
  }
  console.log(newArray)  
  renderRides(newArray)
}
function filterXLArray(rides) {
  let newArray = []
  console.log(newArray)
  for (z=0; z<rides.length; z++) {
    // console.log(rides[z])
    if (levelOfService(rides[z]) == 'Noober XL') {
      newArray.push(rides[z])
      console.log('XL') 
    }
  }
  console.log(newArray)  
  renderRides(newArray)
}
function filterXArray(rides) {
  let newArray = []
  console.log(newArray)
  for (z=0; z<rides.length; z++) {
    // console.log(rides[z])
    if (levelOfService(rides[z]) == 'Noober X') {
      newArray.push(rides[z])
      console.log('X') 
    }
  }
  console.log(newArray)  
  renderRides(newArray)
}
function renderRides(ridesArray) {
  for (let i = 0; i < ridesArray.length; i++) {
    let ride = ridesArray[i]
    document.querySelector('.rides').insertAdjacentHTML('beforeend', `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${levelOfService(ride)}</span>
      </h1>
    `)
    let borderClass
    let backgroundClass
    if (levelOfService(ride) == 'Noober Purple') {
      borderClass = 'border-purple-500'
      backgroundClass = 'bg-purple-600'
    } else {
      borderClass = 'border-gray-900'
      backgroundClass = 'bg-gray-600'
    }
    for (let i = 0; i < ride.length; i++) {
      let leg = ride[i]
      document.querySelector('.rides').insertAdjacentHTML('beforeend', `
        <div class="border-4 ${borderClass} p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${leg.passengerDetails.first} ${leg.passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${leg.passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl ${backgroundClass} text-white p-2">
                ${leg.numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${leg.pickupLocation.address}</p>
              <p>${leg.pickupLocation.city}, ${leg.pickupLocation.state} ${leg.pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${leg.dropoffLocation.address}</p>
              <p>${leg.dropoffLocation.city}, ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
      `)
    }
  }
}
window.addEventListener('DOMContentLoaded', async function() {
  let url = 'https://kiei451.com/api/rides.json'
  let response = await fetch(url)
  let json = await response.json()
  // console.log(json)
  let allButton = document.querySelector('#all-filter')
  allButton.addEventListener('click', async function(event) {
    event.preventDefault()  
    console.log("ayy i clicked an ALL button")
    renderRides(json)
  })
  let poolButton = document.querySelector('#noober-pool-filter')
  poolButton.addEventListener('click', async function(event) {
    event.preventDefault()  
    // console.log("ayy i clicked a pool button")
    filterPoolArray(json)
  })
  let purpleButton = document.querySelector('#noober-purple-filter')
  purpleButton.addEventListener('click', async function(event) {
    event.preventDefault()  
    // console.log("ayy i clicked a purple button")
    filterPurpleArray(json)
  })
  let xlButton = document.querySelector('#noober-xl-filter')
  xlButton.addEventListener('click', async function(event) {
    event.preventDefault()  
    // console.log("ayy i clicked a XL button")
    filterXLArray(json)
  })
  let xButton = document.querySelector('#noober-x-filter')
  xButton.addEventListener('click', async function(event) {
    event.preventDefault()  
    // console.log("ayy i clicked a X button")
    filterXArray(json)
  })
})