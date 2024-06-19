export default async function getAllPosts() {
    // const res = await fetch('https://raw.githubusercontent.com/cruip/cruip-dummy/main/job-board-posts.json')
    const res = await fetch("https://infinity-api-v2.onrender.com/ppf");

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}