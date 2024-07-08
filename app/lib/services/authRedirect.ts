import { GET } from "@app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

const RedirectToDashboard = async () => {
	const session = await getServerSession(GET);

	if (session) {
		redirect("/dashboard");
	}
};

export default RedirectToDashboard;
