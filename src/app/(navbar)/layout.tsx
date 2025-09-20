import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "NYTimes",
  description: "Build by Arslan",
};
export default function WithNavbarLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            {/* <Footer/> */}
        </>
    );
}