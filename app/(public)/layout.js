import '../../styles/public/globals.css'
import Footer from "@/components/Footer";

export default function PublicLayout({children}){
    return(
        <main>
            {children}
            <Footer />
        </main>
    )
}