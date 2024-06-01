"use client";

import { useState } from "react";
import { PointsClient } from "point-issuer";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const sdkClient = new PointsClient("99df6ab8254e543fa63e408bd780ebec", "1");

export function PointSetter() {
  const [eventName, setEventName] = useState("");
  const [points, setPoints] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async () => {
    try {
      if (points && address) {
        const response = await sdkClient.distribute(eventName, {
          address,
          points: parseInt(points),
        });
        console.log(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card className="w-full max-w-md p-6 space-y-4">
        <CardHeader>
          <CardTitle>Distribute Points</CardTitle>
          <CardDescription>
            Enter your API details to get started.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="event-name">Event Name</Label>
            <Input
              id="event-name"
              placeholder="Enter the event name"
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="num-points">Number of Points</Label>
            <Input
              id="num-points"
              placeholder="Enter the number of points"
              type="number"
              value={points}
              onChange={(e) => setPoints(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              placeholder="Enter an address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
