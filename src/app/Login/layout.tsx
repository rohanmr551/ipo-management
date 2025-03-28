import Link  from "next/link";
import { ThemeProvider } from "@/context/ThemeContext";
export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>){
    return (
        <div>
            <nav>
                <Link href="/Login"></Link>
            </nav>
            <ThemeProvider>{children}</ThemeProvider>
        </div>
    );
}