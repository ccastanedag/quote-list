import React from 'react'

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  const paths = data.map(quote => {
    return {
      params: { id: quote.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json()

  return {
    props: { quote: data }
  }
}

const Details = ({ quote }) => {
  return (
    <div>
      <h1>{quote.name}</h1>
      <p>{quote.email}</p>
      <p>{quote.website}</p>
      <p>{quote.address.city}</p>
    </div>
  )
}

export default Details
