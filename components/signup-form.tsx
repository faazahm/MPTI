import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "lucide-react";

export function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@gmail.com" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-x-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 48 48"
          >
            <path
              fill="#fbc02d"
              d="M43.6 20.5h-1.9V20H24v8h11.3C33.7 33.3 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C33.6 6.3 28.1 4 22 4 10.9 4 2 12.9 2 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.5-.4-3.5z"
            />
            <path
              fill="#e53935"
              d="M6.3 14.9l6.6 4.8c1.8-3.5 5.5-5.7 9.5-5.7 3 0 5.7 1.1 7.8 3l5.7-5.7C33.6 6.3 28.1 4 22 4c-6.6 0-12.3 3.1-15.7 7.9z"
            />
            <path
              fill="#4caf50"
              d="M24 44c5.1 0 9.6-1.9 13-5l-6.2-5.2c-2.1 1.7-4.8 2.7-7.8 2.7-5.2 0-9.6-3.4-11.2-8.1l-6.5 5c3.4 6.5 10.2 10.6 18.7 10.6z"
            />
            <path
              fill="#1565c0"
              d="M43.6 20.5H42V20H24v8h11.3c-1.3 3.4-4.2 6.1-7.7 7.2 2.1 1.6 4.7 2.6 7.7 2.6 6.6 0 12-5.4 12-12 0-1.2-.1-2.5-.4-3.5z"
            />
          </svg>
          Login with Google
        </Button>
      </div>
    </form>
  );
}
