import prisma from "@/lib/prisma";
import crypto from "crypto";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { projectId } = data;

    const existingCredential = await prisma.credential.findFirst({
      where: {
        projectId,
      },
    });
    if (existingCredential) {
      return new Response(
        JSON.stringify({
          apiKey: existingCredential.apiKey,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
    const credential = await prisma.credential.create({
      data: {
        projectId,
        apiKey: crypto.randomBytes(16).toString("hex"),
      },
    });

    return new Response(
      JSON.stringify({
        apiKey: credential.apiKey,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "An error occurred while creating the credential",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

export const dynamic = "force-dynamic";
