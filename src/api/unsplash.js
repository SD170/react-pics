import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 0at3tblzVhgV09sLnzuOQ9seMUTfgUfzzYa9877sa74'
    }
})