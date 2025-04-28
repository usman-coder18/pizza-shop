import { getAuthSession } from "@/utils/auth";
import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  context: { params: { id: string } }
) => {
  const { id } = context.params; // ✅ Access inside

  try {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    });

    if (!product) {
      return new NextResponse(
        JSON.stringify({ message: "Product not found" }),
        { status: 404 }
      );
    }

    return new NextResponse(
      JSON.stringify(product),
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

export const DELETE = async (
  req: NextRequest,
  context: { params: { id: string } }
) => {
  const { id } = context.params; // ✅ Access inside

  const session = await getAuthSession();

  if (!session?.user.isAdmin) {
    return new NextResponse(
      JSON.stringify({ message: "You are not allowed" }),
      { status: 403 }
    );
  }

  try {
    await prisma.product.delete({
      where: {
        id,
      },
    });
    return new NextResponse(
      JSON.stringify("Product deleted successfully"),
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
