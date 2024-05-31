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

export function PointSetter() {
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
            <Label htmlFor="api-key">API Key</Label>
            <Input id="api-key" placeholder="Enter your API key" type="text" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="num-points">Number of Points</Label>
            <Input
              id="num-points"
              placeholder="Enter the number of points"
              type="number"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" placeholder="Enter an address" type="text" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" type="submit">
            Submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
