import { ArrowUpToLine } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export const ScrollToTop = () => {
	const [showTopBtn, setShowTopBtn] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 400) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		});
	}, []);

	const goToTop = () => {
		window.scroll({
			top: 0,
			left: 0,
		});
	};

	return (
		<>
			{showTopBtn && (
				<Button
					onClick={goToTop}
					className="fixed right-4 bottom-4 opacity-90 shadow-md"
					size="icon"
				>
					<ArrowUpToLine className="h-4 w-4" />
				</Button>
			)}
		</>
	);
};
