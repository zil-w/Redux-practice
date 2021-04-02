import axios from 'axios'

const dBAddress = 'http://localhost:3001/anecdotes'

const getAnecdotes = async () => {
  const anecdoteRes = await axios.get(dBAddress)
  return anecdoteRes.data
}

const postAnecdote = async (anecdote) => {
  const anecdoteRes = await axios.post(dBAddress, anecdote)
  return anecdoteRes.data
}

const likeAnecdote = async (anecdote) => {
  const likedAnecdote = await axios.put(`${dBAddress}/${anecdote.id}`, { ...anecdote, votes: anecdote.votes + 1 })
  return likedAnecdote.data
}

const anecdoteService = { getAnecdotes, postAnecdote, likeAnecdote }

export default anecdoteService