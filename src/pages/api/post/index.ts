import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

// POST /api/post
// Required fields in body: title, authorEmail
// Optional fields in body: content
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { title, content, authorEmail } = req.body
    const result = await prisma.post.create({
      data: {
        title: title,
        content: content,
        author: { connect: { email: authorEmail } },
      },
    })
    return res.status(201).json(result)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
