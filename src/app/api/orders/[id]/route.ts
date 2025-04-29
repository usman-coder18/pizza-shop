import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";
import type { RouteHandlerContext } from "next/dist/server/future/route-modules/app-route/module";

export const PUT = async (
  req: NextRequest,
  context: RouteHandlerContext
) => {
  const { id } = context.params as { id: string };

  try {
    const { status } = await req.json();

    await prisma.order.update({
      where: { id },
      data: { status },
    });

    return new NextResponse(
      JSON.stringify({ message: "Order has been updated!" }),
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
