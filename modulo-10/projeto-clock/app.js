const clockContainer = document.querySelector('.clock-container');

const updateClock = () => {
  const present = new Date()
  const hours = present.getHours()
  const minutes = present.getMinutes()
  const seconds = present.getSeconds()

  const clockHTML = `
    <span>${String(hours).length === 1 ? `0${hours}`: hours }</span> :
    <span>${String(minutes).length === 1 ? `0${minutes}`: minutes }</span> : 
    <span>${String(seconds).length === 1 ? `0${seconds}`: seconds }</span>
  `

  const dayHTML = `
    <p>${dateFns.format(present, 'DD,MMM, YYYY')}</p>
  `

  clockContainer.innerHTML =  dayHTML + clockHTML

}

setInterval(updateClock, 1000)