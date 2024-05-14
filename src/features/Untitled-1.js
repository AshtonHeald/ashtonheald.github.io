const fetchReadme = async (repoName) => {
		const response = await fetch(`https://api.github.com/repos/AshtonHeald/${repoName}/readme`);
		const data = await response.json();
		const readmeContent = atob(data.content); // Decode base64 encoded content
		console.log(readmeContent); // Print the README.md content
};

<button onClick={() => fetchReadme(repo.name)}>View README</button>