// Алтернативно, при положение, че имаме Prisma, тя си генерира автоматично типове, базирано на 
// schema.prisma файла - ProjectRDR\src\generated\prisma\models\users.ts  
export interface User {

    id: string;
    username: string;
    email: string;
    password?: string;
    role_id?: number;
    location_id?: number;
    bio?: string
}

export interface CreateUserDTO{
    name: string;
    email: string;
}