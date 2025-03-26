import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Chika Okamoto',
        default: 'Chika Okamoto'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="ja">
            <head>
                <link rel="icon" href="/smile.svg" sizes="any" />
                <link 
                rel="stylesheet" 
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
                />
            </head>
            <body className="antialiased text-black bg-white">
            <div className="flex flex-col min-h-screen px-6 bg-noise sm:px-12">
                    <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                        <Header />
                        <main className="grow">{children}</main>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
