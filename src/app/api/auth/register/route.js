import { NextResponse } from 'next/server'
import db from '../../../../libs/db'
import bcrypt from 'bcrypt'

export async function POST(req) {
  try {
    const data = await req.json()

    const emailFound = await db.user.findUnique({
      where: {
        email: data.email,
      },
    })

    if (emailFound) {
      return NextResponse.json(
        { message: 'Email already exists' },
        {
          status: 400,
        }
      )
    }

    const userFound = await db.user.findUnique({
      where: {
        username: data.username,
      },
    })

    if (userFound) {
      return NextResponse.json(
        { message: 'Username already exists' },
        {
          status: 400,
        }
      )
    }

    const hashPassword = await bcrypt.hash(data.password, 10)

    const newUser = await db.user.create({
      data: {
        email: data.email,
        username: data.username,
        password: hashPassword,
      },
    })

    const { password: _, ...user } = newUser

    return NextResponse.json(user)
  } catch (error) {
    NextResponse.json({ message: error.message }, { status: 500 })
  }
}
