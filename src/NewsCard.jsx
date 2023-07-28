import React from 'react'
import { useState, useEffect } from 'react'
import './NewsCard.css'
import axios from 'axios'

export const NewsCard = () => {
//     const [news, setNews] = useState([])
//     useEffect( ()=>{
// axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=0d9ac691e4fb4516a8b5376b40f48978").
// then((res)=>{
//     console.log(res);
//     setNews(res.data.articles)
// })
//     }, [])


const [newsData, setNewsData] = useState([]);

useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json');
        const storyIds = response.data.slice(0, 4); // Fetching only the first 5 stories
  
        const newsPromises = storyIds.map(async (id) => {
          const storyResponse = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
          return storyResponse.data;
        });
  
        const news = await Promise.all(newsPromises);
        setNewsData(news);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
  
    fetchNewsData();
  }, []);
  

  return (
<>
<div className="card-box" >
       {
        newsData.map((val)=>{
            return(
                <div className="cardbox" >
                <img src={val.url} alt="" />
                <div className="cardbox-overlay">
                    <h3 className="card-title">{val.title}</h3>
                   <div className="cardboxBtn">
                   <a href={val.url} className='Btn'><button className='btn'>Read More</button></a>
                   </div>
                </div>
            </div>
            )
        })
       }
    </div>
</>
  )
}
