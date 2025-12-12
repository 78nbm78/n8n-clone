import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <Button variant="default" asChild>
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
