const os = require("os");

//info about current user
const user = os.userInfo();
console.log(user);

//method returns the system uptimes in seconds

console.log(`The system uptime is ${os.uptime}secs`);
