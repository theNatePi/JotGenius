import Image from "next/image";
import { Button } from "@nextui-org/button";
import { SignupFormDemo } from "@/components/ui/signup-form";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-background">
            <SignupFormDemo></SignupFormDemo>
        </main>
    );
}
