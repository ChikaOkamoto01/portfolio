
import { PortfolioCard } from 'components/portfolio-card';

export const metadata = {
    title: 'Works'
};

{/* プロジェクトのデータ */}
const works = [
    {
        title: "Sample",
        description: "HP制作",
        image: "/images/project1.png",
        tags: ["React", "TypeScript", "Tailwind CSS"],
        link: "https://okamotochika.netlify.app/"
    }
    // 他のプロジェクトを追加
];

export default function Page() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Works</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {works.map((work, index) => (
                    <PortfolioCard key={index} {...work} />
                ))}
            </div>
        </div>
    );
}