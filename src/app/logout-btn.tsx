"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const LogoutBtn = () => {
    const [loading, setLoading] = useState(false)
    const router = useRouter();

    const logoutHandler = () => {
        setLoading(true)

        try {
            authClient.signOut({
                fetchOptions: {
                    onSuccess: () => {
                        toast.success("Logout successfully!")
                        router.push("/login")
                        setLoading(false)
                    },
                    onError: (ctx) => {
                        toast.error(ctx.error.message)
                        setLoading(false)
                    }
                }
            })
        } catch (error: unknown) {
            console.error(error)
            setLoading(false)
        }
    }

    return (
        <Button
            onClick={logoutHandler}
            disabled={loading}
        >
            {loading ? <Loader2 className="animate-spin" /> : "Logout"}
        </Button>
    )
}

export default LogoutBtn