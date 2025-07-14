import { NewsletterSignup } from "@/components/home/newsletter-signup";

export const Newsletter = () => {
	const handleSubmit = async (email: string): Promise<boolean> => {
		// Handle form submission
		try {
			const result = await fetch(
				`${process.env.PUBLIC_API_URL}/newsletter/subscribe`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						email: email,
						list: "main",
						metadata: [{ pathname: "home" }],
					}),
				},
			);

			if (!result.ok) {
				throw new Error("Failed to send email");
			}

			return true;
		} catch (error) {
			throw new Error(error as string);
		}
	};

	return (
		<section id="newsletter">
			<hr className="mx-auto w-11/12" />

			<NewsletterSignup onSubmit={handleSubmit} />

			<hr className="mx-auto w-11/12" />
		</section>
	);
};
