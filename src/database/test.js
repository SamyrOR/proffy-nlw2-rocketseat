const Database = require('./db')
const createProffy = require('./createProffy')
Database.then( async (db) => {
    proffyValue = {
        name: "Samyr Ribeiro",
        avatar: "https://avatars0.githubusercontent.com/u/60448782?s=460&u=89c5749851a9e99443080e8df44381b688f870d5&v=4",
        whatsapp: "119999848578",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    }

    classValue = {
        subject: 1,
        cost: "20",

    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1200
        },
        {
        weekday: 3,
        time_from: 520,
        time_to: 1200
        }
    ]
    //await createProffy(db, {proffyValue, classValue, classScheduleValues})
    const selectedProffys = await db.all("SELECT * FROM proffys")
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*,proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1; 
    `)
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "3"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)
    //console.log(selectClassesSchedules)

})