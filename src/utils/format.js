const subjects = [
    "Artes",
    "Biologia",
    "Ciência",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
];
const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-ferira",
    "Quarta-ferira",
    "Quinta-ferira",
    "Sexta-ferira",
    "Sábado",
];

function convertHoursToMinutes(time) {
    const [hour, minutes] = time.split(":")
    return Number((hour * 60) + minutes)
}

function getSubject(subjectNumber){
    const position = +subjectNumber - 1
    return subjects[position]
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}
