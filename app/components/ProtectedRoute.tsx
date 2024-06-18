"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

type ProtectedRouteProps = { children: ReactNode };

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
	return <SessionProvider>{children}</SessionProvider>;
};

export default ProtectedRoute;
