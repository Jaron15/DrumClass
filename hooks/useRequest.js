import { useCallback, useState } from "react"
import useSWR from "swr"

const fetcher = async (url) => await fetch(url).then(res => res.json())
const baseUrl = "https://jsonplaceholder.typicode.com"

export const useVideos = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const sendRequest = useCallback(async (term, amount) => {
    const url = ('https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + term + 'drum lesson&maxResults=' + amount +'&chart=mostPopular&key=' + key)
    setIsLoading(true);
    setError(null);
    try{
    const response =  await fetch(url);
    if (!response.ok) {
      throw new Error('Request failed!');
    }
  const json = await response.json();
  const dataBefore = json.items;
  const data = dataBefore.map(vid => ({...vid, catName: term  + ' Drum Lessons',}))
  
  return data
    }
    catch (err) {
      setError (err.message || 'Something went wrong!');
    }
    setIsLoading(false);
}, []);
  const favoritesRequest = useCallback(async (id) => {
    const url = ('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=' + id + '&key=' + key)
    setIsLoading(true);
    setError(null);
    try{
    const response =  await fetch(url);
    if (!response.ok) {
      throw new Error('Request failed!');
    }
  const json = await response.json();
  const dataBefore = json.items;
  
  const data = dataBefore.map(vid => ({...vid, catName: dataBefore[0].snippet.title,}))
  
  
  return data
    }
    catch (err) {
      setError (err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  
}, []);


return {
  isLoading,
  error,
  sendRequest,
  favoritesRequest
}
}

// export const useVideos = async (term) => {