const express=require("express");
const { ServerConfig, Logger }=require('./config')
const apiRoutes=require('./routes')
const app=express();
const { sequelize } = require('./models');
const db = require('./models');
console.log(Object.keys(db));

const PORT=ServerConfig.PORT;

app.use('/api', apiRoutes);

// app.listen(PORT,()=>{
//     console.log(`Successfully started the server on PORT : ${PORT}`);
//     // Logger.info("Successfully started the server", "root", {});
// })
app.listen(PORT, async () => {
    console.log(`Successfully started the server on PORT : ${PORT}`);
    
    try {
        await sequelize.sync({ alter: true });
        console.log("Database synced successfully");
    } catch (error) {
        console.error("Error syncing database:", error);
    }
});