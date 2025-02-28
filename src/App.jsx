import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const endpoint = 'http://localhost:3000/posts.js/'

  const [posts, setPosts] = useState([])

  const fetchPosts = () => {
    axios
      .get(endpoint)
      .then((res) => setPosts(res.data))
      .catch(err => console.error(err))
  }

  useEffect(fetchPosts, [])

  return (
    <>
      <div className='container'>
        <h1>React Post</h1>
        <div className="table-responsive">
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">title</th>
                <th scope="col">image</th>
              </tr>
            </thead>
            <tbody>
              {posts.length > 0 ? (
                posts.map((elem) => {
                  return (
                    <tr key={elem.id}>
                      <td>{elem.id}</td>
                      <td>{elem.title}</td>
                      <td><img src={elem.image} width={'200px'} alt="" srcset="" /></td>
                    </tr>
                  )
                })
              ) : (
                <tr>
                  <td>
                    <h3>Non ci sono posts</h3>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
