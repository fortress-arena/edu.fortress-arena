import { server } from "../../../config";

const enlishArticle = ({ article }) => {
    return (
        <>
         <h1>{article.title}</h1>
        </>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/en/${context.params.path}`)
  
    const article = await res.json()
  
    return {
      props: {
        article,
      },
    }
  }
  
  export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles/en`)
    const articles = await res.json()
    const urls = articles.map((article) => article.path)
    const paths = urls.map((path) => ({ params: { path: path.toString() } }))

    return {
      paths,
      fallback: false,
    }
  }

export default enlishArticle