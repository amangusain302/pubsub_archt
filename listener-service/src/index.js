require('../config/database'); 

require('./events/redisSubscriber'); 


const app = require('./app');

const PORT = process.env.PORT || 3001;


app.listen(PORT, () => {
    console.log(`Listener Service running on port ${PORT}`);
});
