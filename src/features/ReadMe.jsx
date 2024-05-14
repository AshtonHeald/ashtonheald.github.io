import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import gfm from "remark-gfm";
import useFetch from "../hooks/useFetch";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"

const schema = {
	tagNames: ["img"],
	attributes: {
		div: ["class"],
		img: ["src", "alt", "class", "height"],
	},
};

const ReadMe = () => {
	const { data, loading, error } = useFetch(
		"https://api.github.com/repos/AshtonHeald/AshtonHeald/readme"
	);

	const [readmeContent, setReadmeContent] = useState("");

	useEffect(() => {
		if (data && data.download_url) {
			fetch(data.download_url)
				.then((response) => response.text())
				.then(setReadmeContent)
				.catch(console.error);
		}
	}, [data]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<Card className="w-full">
			<CardHeader>
        <CardDescription>AshtonHeald/README.md</CardDescription>
      </CardHeader>
			<CardContent>
			<ReactMarkdown
				remarkPlugins={[gfm]}
				rehypePlugins={[rehypeRaw, rehypeSanitize(schema)]}
				components={{
					p: ({ ...props }) => <p {...props} className=" flex flex-wrap gap-1 items-baseline leading-7" />,
					h2: ({ ...props }) => <h2 {...props} className="text-2xl font-bold pb-1 border-b mb-4" />,
					h4: ({ ...props }) => <h2 {...props} className="font-semibold mt-4 mb-2" />,
					code: ({ ...props }) => (
						<code
							{...props}
							className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
						/>
					),
					div: ({ ...props }) => {
						if (props.className === "stats") {
							return <div {...props} className="flex flex-wrap gap-1" />;
						} else if (props.className === "support") {
							return <div {...props} className="mt-4 flex flex-wrap gap-1" />;
						} else {
							return <div {...props} className="flex flex-wrap gap-1" />;
						}
					},
					img: ({ ...props }) => {
						if (props.className === "icon") {
							return <img {...props} className="h-5" />;
						} else if (props.className === "social") {
							return <img {...props} className="h-[30px]" />;
						} else if (props.className === "stat"){
							return <img {...props} className="h-[180px]" />;
						} else {
							return <img {...props} className="mr-1" />;
						}
					},
				}}
			>
				{readmeContent}
			</ReactMarkdown>
			</CardContent>
		</Card>
	);
};

export default ReadMe;
