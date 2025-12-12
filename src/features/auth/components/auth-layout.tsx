import { ReactNode } from "react";

interface IProps {
    children: ReactNode;
}

const AuthLayout = ({ children }: IProps) => {
    return (
        <section className="min-h-screen min-w-screen flex items-center justify-center bg-muted p-6 md:p-8 xl:p-10">
            <div className="w-full max-w-md mx-auto space-y-6 bg-white p-4 md:p-6 rounded-lg shadow-md">
                {children}
            </div>
        </section>
    );
}

export default AuthLayout;