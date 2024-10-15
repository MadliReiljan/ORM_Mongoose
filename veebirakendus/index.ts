import express, { Express, Request, Response } from "express";
import articleController from "./Controller/articleController";
import authorController from "./Controller/authorController";
import commentController from "./Controller/commentController";
import mongoose from "mongoose";


mongoose.connect("mongodb+srv://madlireiljan:HecateLapsed9@appmongoose.sx8bk.mongodb.net/?retryWrites=true&w=majority&appName=AppMongoose");
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})

const app: Express = express();
app.use(express.json())
app.use('/', articleController);
app.use('/', authorController);
app.use('/', commentController);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(3000,() => {
  console.log(`[server]: Server is running at http://localhost:3000`);
});

