import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function rawSql(){
    console.log('Running Raw SQL Seed...')

    // Dependency order to seed the tables
    // 1 - Independent tables - categories, roles, locations
    // 2 - skills, users
    // 3 - user_skills, orders, reviews
    // 4 - conversations

    // Seed categories table
    const categoriesResult = await prisma.$executeRawUnsafe(`
        INSERT IGNORE INTO categories (category_id, category_name)
        VALUES (1, 'Programming'), (2, 'Languages'), (3, 'Design'), (4, 'Education'), (5, 'Trades')
        `);
    console.log('Inserted rows: ', categoriesResult)

    // Seed roles table
    const rolesResult = await prisma.$executeRawUnsafe(`
        INSERT IGNORE INTO roles (role_id, role_name)
        VALUES (1, 'admin'), (2, 'user')
        `);
    console.log('Inserted rows: ', rolesResult)

    // Seed locations table
    const locationsResult = await prisma.$executeRawUnsafe(`
        INSERT IGNORE INTO locations (location_id, location_name)
        VALUES (1, 'Varna'), (2, 'Sofia')
        `);
    console.log('Inserted rows: ', locationsResult)

    // Seed users table
    const usersResult = await prisma.$executeRawUnsafe(`
        INSERT IGNORE INTO users (user_id, username, email, password, role_id, location_id, bio )
        VALUES (1, 'radi', 'radi@umenie.com', 'password', 1, 1, 'Your favorite administrator'),
        (2, 'ralitsa', 'ralitsa@gmail.com', 'password', 2, 1, "Arduino Uno Master"),
        (3, 'didka', 'delyana@gmail.com', 'password', 2, 1, "Programming Enthusiast and Cat Lover")
        `);
    console.log('Inserted rows: ', usersResult)

    // Seed skills table
    const skillsResult = await prisma.$executeRawUnsafe(`
    INSERT IGNORE INTO skills (skill_id, skill_name, category_name, skill_description) VALUES 
    (1, 'TypeScript', 'Programming', 'Full-stack development with TS and Node.js'),
    (2, 'UI/UX Design', 'Design', 'Creating beautiful interfaces in Figma'),
    (3, 'English', 'Languages', 'Business English for software engineers');
    `);
    console.log('Inserted rows: ', skillsResult)

    // Seed user_skills table
    const userskillsResult = await prisma.$executeRawUnsafe(`
    INSERT IGNORE INTO user_skills (user_skills_id, user_id, skill_id) VALUES 
    (1, 2, 1), 
    (2, 3, 2);
    `);
    console.log('Inserted rows: ', userskillsResult)


}

rawSql()
    .catch(console.error)
    .finally(async () => {
        await prisma.$disconnect()
    })