import axios from 'axios';

const resolvers = {
  Query: {
    friend: (parent, args) => {
      console.log('weve gotten to the resolver')
    return axios.get(`www.apiurl.com/people`)
    .then((response) => response.data)
    .catch((error) => console.log('there was an error you see', error))
    }
  }
};

export default resolvers;