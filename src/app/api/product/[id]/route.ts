import { getAuthSession } from "@/utils/auth";
import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// GET Handler with Correct Typing
export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }  // Correct typing in Next.js 15
) => {
  const { id } = params;  // Destructure params correctly

  try {
    const product = await prisma.product.findUnique({
      where: { id },
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

// DELETE Handler with Correct Typing
export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }  // Correct typing for DELETE in Next.js 15
) => {
  const { id } = params;  // Destructure params correctly

  const session = await getAuthSession();

  if (!session?.user.isAdmin) {
    return new NextResponse(
      JSON.stringify({ message: "You are not allowed" }),
      { status: 403 }
    );
  }

  try {
    await prisma.product.delete({
      where: { id },
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
