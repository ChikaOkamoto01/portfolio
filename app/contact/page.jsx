import { FeedbackForm } from 'components/feedback-form';


export const metadata = {
    title: 'Contact'
};

export default async function Page() {
    return (
        <>
            <h1 className="mb-8">Contact</h1>
            <div className="flex justify-center">
                <FeedbackForm />
            </div>
        </>
    );
}
