export const metadata = {
    title: 'skills'
};

export default async function Page() {
    return (
        <div className="max-w-4xl mx-auto space-y-12 py-8">
            {/* Web系スキル */}
            <section className="border-b pb-6">
                <h2 className="flex items-center text-2xl font-bold mb-4">
                    <i className="fas fa-desktop mr-3"></i>
                    Web系スキル
                </h2>
                <div className="space-y-8">
                    {/* プログラミング言語 */}
                    <div>
                        <h3 className="text-xl font-bold mb-3">
                            <i className="fas fa-code mr-2"></i>
                            プログラミング言語
                        </h3>
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            <li className="p-2 bg-gray-100 rounded">C#</li>
                            <li className="p-2 bg-gray-100 rounded">Java</li>
                            <li className="p-2 bg-gray-100 rounded">JavaScript</li>
                            <li className="p-2 bg-gray-100 rounded">SQL</li>
                        </ul>
                    </div>

                    {/* Webテクノロジー */}
                    <div>
                        <h3 className="text-xl font-bold mb-3">
                            <i className="fas fa-globe mr-2"></i>
                            マークアップ言語
                        </h3>
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            <li className="p-2 bg-gray-100 rounded">HTML</li>
                            <li className="p-2 bg-gray-100 rounded">CSS</li>
                        </ul>
                    </div>

                    {/* フレームワーク・ライブラリ */}
                    <div>
                        <h3 className="text-xl font-bold mb-3">
                            <i className="fas fa-layer-group mr-2"></i>
                            フレームワーク・ライブラリ
                        </h3>
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            <li className="p-2 bg-gray-100 rounded">React</li>
                            <li className="p-2 bg-gray-100 rounded">Next.js</li>
                            <li className="p-2 bg-gray-100 rounded">Node.js</li>
                        </ul>
                    </div>

                    {/* 資格 */}
                    <div>
                        <h3 className="text-xl font-bold mb-3">
                            <i className="fas fa-certificate mr-3"></i>
                            資格
                        </h3>
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            <li className="p-2 bg-gray-100 rounded">基本情報技術者試験</li>
                            <li className="p-2 bg-gray-100 rounded">AZ-900 Microsoft Azure Fundamentals</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* 教育系スキル */}
            <section className="border-b pb-6">
                <h2 className="flex items-center text-2xl font-bold mb-4">
                    <i className="fas fa-book-open mr-3"></i>
                    教育系スキル
                </h2>
                <div>
                    <h3 className="text-xl font-bold mb-3">
                        <i className="fas fa-certificate mr-3"></i>
                        資格
                    </h3>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        <li className="p-2 bg-gray-100 rounded">中学校教諭 一種（数学科）</li>
                        <li className="p-2 bg-gray-100 rounded">高等学校教諭 一種（数学科）</li>
                        <li className="p-2 bg-gray-100 rounded">学芸員（芸術）</li>
                        <li className="p-2 bg-gray-100 rounded">社会教育士</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
