import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { Model, Schema, model } from 'mongoose';
const app: Application = express();

// using cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
   // inserting data into mongodb database
   //Step1: Create an interface representing a document in MongoDB. Done here
   //Step2: Create a Schema corresponding to the document interface. Done here
   //Step3: Create a Model. Done here
   //Step4: Connect to MongoDB. Done here

   // Creating An Interface
   interface IUser {
      id: string;
      role: string;
      password: string;
      name: {
         firstName: string;
         middleName?: string;
         lastName: string;
      };
      dateOfBirth: string;
      gender: "male" | "female";
      email?: string;
      contactNo: string;
      emergencyContact: string;
      presentAddress: string;
      pertmanentAddress: string;
   }
   // creating Schema using Interface
   const userSchema = new Schema<IUser>({
      id: {
         type: String,
         required: true,
         unique: true,
      },
      role: {
         type: String,
         required: true,
      },
      password: {
         type: String,
         required: true,
      },
      name: {
         firstName: {
            type: String,
            required: true,
         },
         middleName: {
            type: String,
         },
         lastName: {
            type: String,
            required: true
         }
      },
      dateOfBirth: {
         type: String,
         required: true
      },
      gender: {
         type: String,
         enum: ['male', 'female'],
      },
      email: {
         type: String,
      },
      contactNo: {
         type: String,
         required: true
      },
      emergencyContact: {
         type: String,
         required: true
      },
      presentAddress: {
         type: String,
         required: true
      },
      pertmanentAddress: {
         type: String,
         required: true
      }
      // res.send('Hello World!')
      // next();
   });

   // creating a model
   const User = model<IUser>("user", userSchema);

   const createUserToDB = async () => {
      const user = new User({
         id: "924",
         role: "Student",
         password: "password",
         name: {
            firstName: "Sohanur",
            middleName: "Rahman",
            lastName: "Jahin",
         },
         dateOfBirth: "2002-02-18",
         gender: "male",
         email: "sohan75632@gmail.com",
         contactNo: "01722562608",
         emergencyContact: "01744953139",
         presentAddress: "mohipur , jamtola, sherpur, Bogura",
         pertmanentAddress: "marupara, theakorpara , panchagarh"
      })
      await user.save();
      console.log(user);
   }
   createUserToDB();
});


export default app;