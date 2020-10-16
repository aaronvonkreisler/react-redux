import axios from 'axios';

export default axios.create({
   baseURL: 'https://api.unsplash.com',
   headers: {
      Authorization: 'Client-ID aGsph3evUM_g2emqcpkJXHhMYsqMnUqCam5F75he2tE',
   },
});
