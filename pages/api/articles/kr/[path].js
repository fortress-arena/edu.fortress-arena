import { articles } from "../../../../data/kr";

export default function handler({ query: {path} }, res) {
    const article = articles.filter((a) => a.path === path)

    if (article.length) {
        res.status(200).json(article[0])
    } else {
        res.status(404).json({ message: 'This article is not found' })
    }
}
