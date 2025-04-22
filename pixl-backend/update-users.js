import { PrismaClient } from './generated/prisma/index.js';

const prisma = new PrismaClient();

async function updateUsers() {
  try {
    // Get all users without usernames
    const users = await prisma.user.findMany({
      where: {
        username: null
      }
    });

    console.log(`Found ${users.length} users without usernames`);

    // Update each user with a username based on their email
    for (const user of users) {
      const username = user.email.split('@')[0]; // Use part before @ as username
      await prisma.user.update({
        where: { id: user.id },
        data: { username }
      });
      console.log(`Updated user ${user.id} with username: ${username}`);
    }

    console.log('All users updated successfully');
  } catch (error) {
    console.error('Error updating users:', error);
  } finally {
    await prisma.$disconnect();
  }
}

updateUsers();