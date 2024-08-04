export default async function Api() {
    const url = "https://api.github.com/users/JulioLima97/repos";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching project data:", error.message);
        return null;
    }
}
