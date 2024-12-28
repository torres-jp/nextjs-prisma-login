const { NextResponse } = require('next/server')

export async function POST(req) {
  const data = await req.json()

  console.log(data)

  return NextResponse.json('register..')
}
