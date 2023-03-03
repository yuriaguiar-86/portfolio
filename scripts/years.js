// Idade sobre mim
const dateBirth = new Date('2000-04-03');
const dateCurrent = new Date();
const timeDifference = dateCurrent.getTime() - dateBirth.getTime();
const age = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25));
document.getElementById("age").innerHTML = age;

// Ano atual footer
const currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;