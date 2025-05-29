import { Helmet } from 'react-helmet';
import Header from './Header';
import Footer from './Footer';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Helmet>
                <title>ABOUT - 청년을 위한 콘텐츠 플랫폼</title>
            </Helmet>

            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
            </div>
        </>
    );
}
