export const getDbConnectionString = () => {
    return "mongodb+srv://MizzleTheHorse:HestePik42069@backend-db-cloud-sdu.uknb4ny.mongodb.net/?retryWrites=true&w=majority"
    return process.env.MONGO_DB_CONNECTION_STRING!;
}