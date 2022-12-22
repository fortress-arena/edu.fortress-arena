import { articles } from "../../../../data/kr";

export default function handler(req, res) {
    res.status(200).json(articles)
}