import { server } from "../../../config";
import Content from '../../../components/Content'
import Footer from "../../../components/footer";
import Nav from "../../../components/Nav";
import Head from 'next/head';

const enlishArticle = ({ article, titles, paths }) => {
    return (
        <>
         <Head>
         <title>{article.title ? article.title : 'fortress arena education'}</title>
         <meta name="description" content={article.desc} key="desc" />
         <meta name="keywords" content={article.keywords} />
         </Head>
         <div style={{backgroundColor: article.background_color}}>
          <Nav article={article} />
          <Content article={article} />
          <Footer titles={titles} paths={paths} />
         </div>
        </>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/en/${context.params.path}`)
    const article = await res.json()

    const res_2 = await fetch(`${server}/api/articles/en`)
    const articles = await res_2.json()

    const titles = articles.map(t => t.title)
    const paths = articles.map(p => p.path)
  
    return {
      props: {
        article,
        titles,
        paths,
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