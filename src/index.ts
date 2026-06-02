import express, { Application } from 'express';
import userRoutes from "../routes/user.routes";
import searchRoutes from "../routes/search.routes";
import cors from "cors";
import categoryRoutes from "../routes/category.routes";
import skillRoutes from "../routes/skill.routes";

const app: Application = express();
const PORT = process.env.SERVER_PORT;

app.use(express.json());
app.use(cors());


app.use(userRoutes);  
app.use(searchRoutes);
app.use(categoryRoutes);
app.use(skillRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

