const app = require('./app');
require('../config/database');


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Receiver Service running on port ${PORT}`);
});
