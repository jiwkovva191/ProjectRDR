import express from 'express';
import userRoutes from "../routes/user.routes";
import searchRoutes from "../routes/search.routes";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

//app.use(userRoutes);   ТОВА Е КОМЕНТИРАНО, ЗАЩОТО ОЩЕ НЯМАМЕ BACKEND ЗА USER
app.use(searchRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

