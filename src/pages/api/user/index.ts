import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

// POST /api/user
// Required fields in body: name, email
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { name, email } = req.body

  // Validation
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are both required.' })
  }

  try {
    // Use a service for database interaction
    const result = await createUser(name, email)
    return res.status(201).json(result)
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error while creating user: ', error)

    // Respond with a general server error status code and the error message
    if (error instanceof Error) {
      return res.status(500).json({ error: `There was an error while creating the user: ${error.message}` })
    } else {
      // If error is not an instance of Error, you can return a more generic message
      return res.status(500).json({ error: 'There was an error while creating the user.' })
    }
  }
}

// This service could be moved to another file
async function createUser(name: string, email: string) {
  return await prisma.user.create({
    data: {
      name,
      email,
    },
  })
}
