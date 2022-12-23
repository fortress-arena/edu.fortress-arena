import { server } from "../../../config";
import Content from '../../../components/Content'
import Footer from "../../../components/footer";

const koreanArticle = ({ article, titles }) => {
    return (
        <>
         <div style={{backgroundColor: article.background_color}}>
          <Content article={article} />
          <Footer titles={titles} />
         </div>
        </>
    )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/kr/${context.params.path}`)
  const article = await res.json()

  const res_2 = await fetch(`${server}/api/articles/kr`)
  const articles = await res_2.json()
  const titles = articles.map((article) => article.title)

  return {
    props: {
      article,
      titles,
    },
  }
}

  
export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles/kr`)
  const articles = await res.json()
  const urls = articles.map((article) => article.path)
  const paths = urls.map((path) => ({ params: { path: path.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

export default koreanArticle