import Image from "next/image";
import { Button } from "@nextui-org/button";
import { LoginForm } from "@/components/ui/login-form";
//This is the dashboard code so adjust soon
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-background">
            <LoginForm></LoginForm>
        </main>
    );
}