import {server} from '../config'
import ArticleList from '../components/ArticleList'

export default function Home({ articles }) {
  return (
    <div>
      <title>WebDev Newz</title>
      <meta name="keywords" content="web development, programming" />

      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/posts`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}
