import { articles } from "../../../../data/en";

export default function handler(req, res) {
    res.status(200).json(articles)
}
