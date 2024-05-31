import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name } = data;

    const project = await prisma.project.create({
      data: {
        name,
      },
    });

    return new Response(JSON.stringify(project), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "An error occurred while creating the project" }),
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
