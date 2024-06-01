import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const {
      eventName,
      pointsData: { points, address },
      metadata,
      campaignId,
      apiKey,
    } = data;

    const credential = await prisma.credential.findFirst({
      where: { apiKey },
    });
    if (credential) {
      const projectId = credential.projectId;
      let event = await prisma.event.findFirst({
        where: {
          projectId,
          name: eventName,
        },
      });
      if (!event) {
        event = await prisma.event.create({
          data: {
            name: eventName,
            projectId,
          },
        });
      }
      const point = await prisma.point.create({
        data: {
          address,
          points,
          metadata,
          eventId: event.id,
          campaignId,
          projectId,
        },
      });
      return new Response(JSON.stringify(point), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*", // Allow any origin
          "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE,OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    } else {
      throw new Error("Invalid API Key");
    }
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "An error occurred while creating the point" + error,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*", // Allow any origin
          "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE,OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      }
    );
  }
}

export async function GET(request: Request) {
  try {
    const data = await request.json();
    const { address, eventName, apiKey, campaignId } = data;

    const credential = await prisma.credential.findFirst({
      where: { apiKey },
    });
    if (credential) {
      const projectId = credential.projectId;

      let event;
      if (eventName) {
        event = await prisma.event.findFirst({
          where: {
            projectId,
            name: eventName,
          },
        });
        if (!event) {
          return new Response(JSON.stringify([]), {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*", // Allow any origin
              "Access-Control-Allow-Methods":
                "GET,POST,PUT,PATCH,DELETE,OPTIONS",
              "Access-Control-Allow-Headers": "Content-Type",
            },
          });
        }
      }

      const points = await prisma.point.findMany({
        where: {
          projectId,
          address,
          campaignId,
          eventId: event?.id,
        },
      });

      return new Response(JSON.stringify(points), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*", // Allow any origin
          "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE,OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    } else {
      throw new Error("Invalid API Key");
    }
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "An error occurred while getting the point" + error,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*", // Allow any origin
          "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE,OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      }
    );
  }
}

export const dynamic = "force-dynamic";
