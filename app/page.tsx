import { GalleryVerticalEnd } from "lucide-react";
import { LoginForm } from "../components/login-form";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 py-10">
      <div className="absolute top-6 left-6">
        <a href="#" className="flex items-center gap-2 font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Alkadi.
        </a>
      </div>
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
