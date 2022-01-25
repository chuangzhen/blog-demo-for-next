
import { postFetchAPI } from "../../utils/request";

// export  function getPostsList() {
//     return postFetchAPI('/data/posts.json')
// }
export  function getList() {
    return postFetchAPI('http://172.20.0.147:3300/song?songmid=001rfw8n3WIabs')
}