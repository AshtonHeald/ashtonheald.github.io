//

import { ThemeProvider } from "@/components/theme-provider";

import Profile from "@/features/Profile";
import ReadMe from "@/features/ReadMe";
import Repos from "@/features/Repos";

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div className=" grid place-items-center">
				<div className="p-4  max-w-[800px]">
					<div className="min-[816px]:flex grid gap-4 mb-4">
						<Profile />
						<ReadMe />
					</div>
					<Repos />
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
