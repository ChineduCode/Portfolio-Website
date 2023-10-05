export const metadata = {
    title: 'Blogs',
    description: 'ChineduCode Blogs'
}
import Link from "next/link";

export default function BlogPage() {
    return ( 
        <section className="blog">
            <section className="header">
                <h2 className="heading">Blog</h2>
                <span className="sub_heading">Blog List</span>
            </section>

            <section className="hero">
                <Link href={'/blog/'} className="content">
                    <div className="png"></div>
                    <div className="category_timestamp">
                        <span className="category"></span>
                        <span className="timestamp"></span>
                    </div>
                    <div className="title"></div>
                </Link>

                No blog Post Yet
            </section>
        </section>
    );
}
