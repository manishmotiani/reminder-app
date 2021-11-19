const shell = require('shelljs');

/**
 * Notify
 * @param {*} param0
 */
function notify ({
    title,
    description
}) {

    const options = {  
        weekday: "long", year: "numeric", month: "short",  
        day: "numeric", hour: "2-digit", minute: "2-digit"  
    };  

    const formattedString = (new Date()).toLocaleTimeString("en-us", options);
    description = description || `Time: ${formattedString}`;

    let command = `notify-send -h string:sound-name:bell ` +
                    `-i ${__dirname}/../icons/goal.png ` +
                    `"${title}" "${description}"`;
    const result = shell.exec(command);


    if (result.code !== 0) {

        console.log('Error in notification command');

    }

}

module.exports = notify;
