const addReminder = require('./lib/addReminder');

addReminder({
    cronRule: '*/30 * * * *',
    title: 'Drink Water'
});

