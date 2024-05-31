import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { projectId, name } = data;

    const campaign = await prisma.campaign.create({
      data: {
        name,
        projectId,
      },
    });

    return new Response(JSON.stringify(campaign), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "An error occurred while creating the campaign",
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
