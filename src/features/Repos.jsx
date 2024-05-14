import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Repos = () => {
	const { data, loading, error } = useFetch(
		"https://api.github.com/users/AshtonHeald/repos"
	);
	const [languages, setLanguages] = useState({});

	useEffect(() => {
		if (!loading && data) {
			data.forEach(async (repo) => {
				const response = await fetch(
					`https://api.github.com/repos/AshtonHeald/${repo.name}/languages`
				);
				const data = await response.json();
				if (Object.keys(data).length > 0) {
					// Only update languages state if there are languages
					setLanguages((prevLanguages) => ({
						...prevLanguages,
						[repo.name]: Object.keys(data),
					}));
				}
			});
		}
	}, [loading, data]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<div className="flex-1">
			{!loading && data && (
				<div className="grid sm:grid-cols-2 gap-4">
					{data.map((repo) => (
						<Card
							key={repo.id}
							className="border flex flex-col h-full"
						>
							<CardHeader>
								<CardTitle>
									<a
										href={repo.html_url}
										target="_blank"
										rel="noopener noreferrer"
										className="underline underline-offset-2 hover:text-pink-400"
									>
										{repo.name}
									</a>
								</CardTitle>
							</CardHeader>
							<CardContent className="flex flex-col h-full">
								<p>{repo.description}</p>
								<a href={repo.homepage} className="mb-2 underline hover:text-pink-400">{repo.homepage}</a>
								{languages[repo.name] &&
									languages[repo.name].length > 0 && (
										<div className="flex items-baseline">
											<div className="w-2.5 h-2.5 rounded-full bg-pink-400 mr-1.5"></div>
											<span>
												{languages[repo.name].join(
													", "
												)}
											</span>
										</div>
									)}
							</CardContent>
						</Card>
					))}
				</div>
			)}
		</div>
	);
};

export default Repos;
