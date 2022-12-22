import Head from 'next/head'

export default function Home() {
  return (
   <div>
    <h1>Welcome to Next</h1>
   </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch()
}