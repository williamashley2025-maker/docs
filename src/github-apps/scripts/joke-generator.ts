import axios from 'axios';

export const fetchRandomJoke = async () => {
    try {
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
        const joke = response.data;
        console.log(`\n${joke.setup}\n${joke.punchline}`);
    } catch (error) {
        console.error('Error fetching joke:', error);
    }
};

fetchRandomJoke();