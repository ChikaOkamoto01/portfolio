import { Card } from 'components/card';
import { getNetlifyContext } from 'utils';

const contextExplainer = `
The card below is rendered on the server based on the value of \`process.env.CONTEXT\` 
([docs](https://docs.netlify.com/configure-builds/environment-variables/#build-metadata)):
`;

const preDynamicContentExplainer = `
The card content below is fetched by the client-side from \`/quotes/random\` (see file \`app/quotes/random/route.js\`) with a different quote shown on each page load:
`;

const postDynamicContentExplainer = `
On Netlify, Next.js Route Handlers are automatically deployed as [Serverless Functions](https://docs.netlify.com/functions/overview/).
Alternatively, you can add Serverless Functions to any site regardless of framework, with acccess to the [full context data](https://docs.netlify.com/functions/api/).

And as always with dynamic content, beware of layout shifts & flicker! (here, we aren't...)
`;

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <div className="max-w-4xl mx-auto space-y-12 py-8">
            {/* 経歴の概要 */}
            <section className="border-b pb-6">
                <h2 className="flex items-center text-2xl font-bold mb-4">
                    <i className="far fa-grin mr-3"></i>
                    岡本 知佳
                </h2>

                <div className="prose dark:prose-invert">
                <p>
                    東京大学大学院教育学研究科修了後、政令指定都市にて高齢者・障害者を対象とする福祉事業を推進。
                </p>
                <p>
                    その後、Webアプリの自社開発・販売を行うスタートアップ企業にてエンジニアや営業など幅広い業務に従事。
                </p>
                <p>
                    また、ユーザー系SIerにてクラウドエンジニアとして最新技術を用いたシステムの要件定義から開発運用まで幅広く担当。
                </p>
                <p>
                    その他、NPO法人にて地域教育やアントレプレナーシップ教育に係るプロジェクトを複数推進。
                </p>
                </div>
            </section>

            {/* 所属 */}
            <section className="border-b pb-6">
                <h2 className="flex items-center text-2xl font-bold mb-4">
                    <i className="fas fa-building mr-3"></i>
                    所属
                </h2>
                <div className="prose dark:prose-invert">
                <a 
                    href="https://startup-lab.chiba-u.jp/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-bold hover:opacity-80"
                >
                    千葉大学 学術研究・イノベーション推進機構（IMO）スタートアップ・ラボ
                </a>
                <p></p>
                <p>Business ＆ Technology Advisor</p>
                </div>
            </section>

            {/* 職歴 */}
            <section className="border-b pb-6">
                <h2 className="flex items-center text-2xl font-bold mb-4">
                    <i className="fas fa-building mr-2"></i>
                    職歴
                </h2>
                <div className="prose dark:prose-invert space-y-6">
                    {/*
                    <div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-gray-600">2025.04.01～現在</span>
                            <span className="font-bold">千葉大学 学術研究・イノベーション推進機構（IMO）</span>
                        </div>
                        <div className="ml-6 mt-1 text-gray-800">
                            URA（リサーチ・アドミニストレータ）
                        </div>
                    </div>
                    */}

                    <div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-gray-600">2023.09.01～2025.03.31</span>
                            <span className="font-bold">株式会社カジマアイシーティ</span>
                        </div>
                        <div className="ml-6 mt-1 text-gray-800">
                            クラウドエンジニア
                        </div>
                    </div>

                    <div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-gray-600">2022.01.01～2023.08.31</span>
                            <span className="font-bold">株式会社アイピア</span>
                        </div>
                        <div className="ml-6 mt-1 text-gray-800">
                            エンジニア/カスタマーサポーター/営業
                        </div>
                    </div>

                    <div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-gray-600">2020.04.01～2021.12.31</span>
                            <span className="font-bold">神戸市役所</span>
                        </div>
                        <div className="ml-6 mt-1 text-gray-800">
                            総合事務
                        </div>
                    </div>
                </div>
            </section>

            {/* 学歴 */}
            <section className="border-b pb-6">
                <h2 className="flex items-center text-2xl font-bold mb-4">
                    <i className="fas fa-graduation-cap mr-2"></i>
                    学歴
                </h2>
                <div className="prose dark:prose-invert space-y-6">
                    <div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-gray-600">2017.04.01～2020.03.31</span>
                            <span className="font-bold">東京大学大学院教育学研究科</span>
                        </div>
                        <div className="ml-6 mt-1 text-gray-800">
                            修士（教育学）
                        </div>
                    </div>

                    <div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-gray-600">2013.04.01～2017.03.31</span>
                            <span className="font-bold">千葉大学教育学部</span>
                        </div>
                        <div className="ml-6 mt-1 text-gray-800">
                            学士（教育学）
                        </div>
                    </div>
                </div>
            </section>

            
            {/* 活動 */}
            <section className="border-b pb-6">
                <h2 className="flex items-center text-2xl font-bold mb-4">
                    <i className="fas fa-tasks mr-3"></i>
                    活動
                </h2>
                <div className="prose dark:prose-invert">
                    <div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-gray-600">2017.04.01～2020.03.31</span>
                            <a 
                                href="https://m-hongo.com/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="font-bold hover:opacity-80"
                            >
                                認定NPO法人街ing本郷
                            </a>
                        </div>
                        <div className="ml-6 mt-1 text-gray-800">
                            メンバー
                        </div>
                    </div>

                    <div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-gray-600">2015.04.01～2018.09.30</span>
                            <a 
                                href="https://www.drops-c.org/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="font-bold hover:opacity-80"
                            >
                                認定NPO法人Drops
                            </a>
                        </div>
                        <div className="ml-6 mt-1 text-gray-800">
                            メンバー
                        </div>
                    </div>
                </div>
            </section>

            {/* 資格 */}
            <section className="border-b pb-6">
                <h2 className="flex items-center text-2xl font-bold mb-4">
                    <i className="fas fa-certificate mr-3"></i>
                    資格
                </h2>
                <div className="prose dark:prose-invert">
                <ul>
                    <li>基本情報技術者試験</li>
                    <li>AZ-900 Microsoft Azure Fundamenta士ls</li>
                    <li>学芸員（芸術）</li>
                    <li>社会教育士</li>
                    <li>高等学校教諭 一種（数学科）</li>
                    <li>中学校教諭 一種（数学科）</li>
                </ul>
                </div>
            </section>
        </div>
    );
}

function RuntimeContextCard() {
    const title = `Netlify Context: running in ${ctx} mode.`;
    if (ctx === 'dev') {
        return (
            <Card title={title}>
                <p>Next.js will rebuild any page you navigate to, including static pages.</p>
            </Card>
        );
    } else {
        return (
            <Card title={title}>
                <p>This page was statically-generated at build time.</p>
            </Card>
        );
    }
}
