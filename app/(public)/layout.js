import '../../styles/public/globals.css'
import Header from '@/components/Header';
import Footer from "@/components/Footer";

export default function PublicLayout({children}){
    return(
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    )
}