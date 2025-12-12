import AuthLayout from "@/features/auth/components/auth-layout";
import { ReactNode } from "react";

interface IProps {
    children: ReactNode;
}

const Layout = ({ children }: IProps) => {
    return (
        <AuthLayout>
            {children}
        </AuthLayout>
    );
}

export default Layout;