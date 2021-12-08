import axios from 'axios'
import { useEffect } from 'react'

const Home = () => {

   useEffect(() => {
      let token = 'AAAAAAAAAAAAAAAAAAAAAEAoWgEAAAAAhONuS1r4NPauTi%2BT7umUAPu2SCg%3DO8xncDnhDM4t2uw6MTJilh684FfS0WW8LYudMpfu8vNiKCVRvX'
      let params = {
         "ids": "1278747501642657792,1255542774432063488", // Edit Tweet IDs to look up
         "tweet.fields": "lang,author_id", // Edit optional query parameters here
         "user.fields": "created_at"
      }
      let headerRequest = {
         headers: {
            "User-Agent": "v2TweetLookupJS",
            "authorization": `Bearer ${token}`
         }
      }
      axios.get(`https://api.twitter.com/2/tweets?ids=`, params, headerRequest)
         .then(res => console.log(res.data))
         .catch(e => console.log(e))
   }, [])

   return (
      <main className="home">
         <section className="heroHome">
            <div className="leftContainer mainTitleHero">
               <p>¿Eres nuevo o ya incursionas en IT?</p>
               <h1>Tips y recursos de programacion y diseño UX/UI</h1>
               <button>Visitar el blog (próximamente)</button>
            </div>
            <div className="rightContainer lastArticlesHome">
               <h2>Ultimos posteos</h2>
               <article>
                  <h3>Mi primer aplicacion con React.js y Node.js</h3>
                  <p>Paso a paso para crear tu primer aplicacion con las librerías más utilizadas dle momento</p>
                  <span>6 min de lectura - Diciembre 4 de 2021</span>
               </article>
               <article>
                  <h3>Mi primer aplicacion con React.js y Node.js</h3>
                  <p>Paso a paso para crear tu primer aplicacion con las librerías más utilizadas dle momento</p>
                  <span>6 min de lectura - Diciembre 4 de 2021</span>
               </article>
               <article>
                  <h3>Mi primer aplicacion con React.js y Node.js</h3>
                  <p>Paso a paso para crear tu primer aplicacion con las librerías más utilizadas dle momento</p>
                  <span>6 min de lectura - Diciembre 4 de 2021</span>
               </article>
            </div>
         </section>
         <section className="whoAreYouHome">
            <div className="leftContainer">
               a
            </div>
            <div className="rightContainer">
               a
            </div>
         </section>
      </main>
   )
}

export default Home
