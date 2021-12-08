import { useRouter } from 'next/router';

const TestimonialPage = () => {
    const router = useRouter();
    return (
        <h1 className="text-2x1 text-center p-20">
            Hi from {''}
            <span className="text-red-400">{router.query.testimonialId}</span>
        </h1>
    );
};

export default TestimonialPage;
