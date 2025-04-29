import { getAuthSession } from "@/utils/auth";
import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const session = await getAuthSession();
  
  if (session) {
    try {
      let orders;
      
      if (session.user.isAdmin) {
        orders = await prisma.order.findMany();
      } else {
        orders = await prisma.order.findMany({
          where: {
            userEmail: session.user.email!,
          },
        });
      }

      return NextResponse.json(orders, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { message: "Something went wrong" },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json(
      { message: "You are not authenticated" },
      { status: 401 }
    );
  }
};

export const POST = () => {
  return NextResponse.json({ message: "hello" }, { status: 200 });
};
