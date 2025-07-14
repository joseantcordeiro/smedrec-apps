// @ts-check

import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "SMEDREC DOCS",
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/smedrec/smedrec-apps",
				},
			],
			sidebar: [
				{
					label: "Guides",
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: "Example Guide", slug: "guides/example" },
					],
				},
				{
					label: "Apps",
					autogenerate: { directory: "apps" },
				},
			],
		}),
	],
});
