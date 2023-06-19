import {NextRequest, NextResponse} from "next/server";
import {RegisterValidator} from "@/validators";
import {randomSting} from "@/helpers/common";

export const POST = async (req: NextRequest) => {
  const body = await req.json()

  const authValidator = await RegisterValidator.isValid(body);

  if (!authValidator) {
    const errors = await RegisterValidator.validate(body)
    return NextResponse.json({
      message: 'Validation failed',
      data: { errors },
      status: 422
    })
  }

  const { password, agreeToTerms, ...userData } = body;

  return NextResponse.json({
     ...userData, id: randomSting(),
  })
};
