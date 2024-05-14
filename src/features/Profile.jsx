import useFetch from "../hooks/useFetch";
import { MapPin, Link } from "lucide-react";

const Profile = () => {
	const { data, loading, error } = useFetch(
		"https://api.github.com/users/AshtonHeald"
	);
	console.log(data);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<div className="min-[816px]:max-w-[200px]">
			{!loading && data && (
				<div className="flex flex-col sm:flex-row sm:gap-4 min-[816px]:flex-col">
					<div className="avatar w-[200px] mb-4 sm:mb-0">
						<img
							src={data.avatar_url}
							alt={data.name}
							className="rounded-lg border "
						/>
					</div>
					<div className="flex flex-col gap-4">
						<div>
							<h1 className="text-2xl font-bold">{data.name}</h1>
							<h1 className="text-xl text-gray-400">
								{data.login}
							</h1>
						</div>
						<h1>{data.bio}</h1>
						<div>
							<h3 className="flex gap-1 items-center">
								<MapPin size={16} className="text-gray-400" />
								{data.location}
							</h3>
							<a
								href={data.blog}
								className="flex gap-1 items-center"
							>
								<Link size={16} className="text-gray-400" />
								{data.blog}
							</a>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Profile;
