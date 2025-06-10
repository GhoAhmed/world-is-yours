import { SignIn } from '@clerk/nextjs'

export default function Sign() {
    return (
        <main className="flex items-center justify-center mt-8">
            <SignIn />
        </main>
    );
}