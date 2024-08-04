"use client";

import { useSession, signOut } from "next-auth/react";

const Dashboard = () => {
	const { data: session, status } = useSession();

	return (
		<div>
			<h1>Dashboard</h1>
			{status === "authenticated" ? (
				<div>
					<p>Welcome, {session.user?.email}</p>
					<button onClick={() => signOut({ callbackUrl: `${window.location.origin}/login` })}>Sign Out</button>
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default Dashboard;
