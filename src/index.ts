import express from 'express';

const app = express();
const PORT = 3001;

app.use(express.json());

app.use(userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

