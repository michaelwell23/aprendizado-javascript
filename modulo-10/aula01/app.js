// DATA E HORAS EM JS
const present = new Date();

console.log(present)
console.log('getFullYear:', present.getFullYear());
console.log('getMonth:', present.getMonth()); 
console.log('getDate:', present.getDate()); 
console.log('getDay:', present.getDay()); 

console.log('getHour:', present.getHours()); 
console.log('getMinutes:', present.getMinutes()); 
console.log('getSeconds:', present.getSeconds()); 

console.log('timestamp:', present.getTime())

console.log('toDateString:', present.toDateString());
console.log('toTimeString:', present.toTimeString());
console.log('toLocaleString:', present.toLocaleString());

// COMPARAÇÃO DE TIMESTEMPS
const past = new Date('May 1 2020 7:47:00')

const difference = present.getTime() - past.getTime()
console.log(difference);

const seconds = Math.round(difference / 1000);
console.log({ seconds: seconds })

const minutes = Math.round(seconds / 60);
console.log({ minutes: minutes })

const hour = Math.round(minutes / 24);
console.log({ hour: hour })

const days = Math.round(hour / 24);
console.log(({ days: days }))

const timestamp = 1675938474990
console.log(new Date(timestamp));