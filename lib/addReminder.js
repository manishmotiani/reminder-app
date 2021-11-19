const schedule = require('node-schedule');
const notify = require('./notify');

function addReminder({
    cronRule,
    title,
    description,
    runNow = true
}) {


    if (runNow) {

        notify({
            title,
            description
        });

    }
    schedule.scheduleJob(cronRule, () => {

        notify({
            title,
            description
        });

    });

}

module.exports = addReminder;
