import '../../../styles/admin/admin.css'
import Providers from '@/components/Providers'

export default function AdminLayout({children}){
    return(
        <Providers>
            <main> {children} </main>
        </Providers>
    )
}