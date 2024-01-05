const axios = require('axios');
const cheerio = require('cheerio');

const instagramUrl = 'https://https://www.instagram.com/applegation/'; // Replace USERNAME with the Instagram username

axios.get(instagramUrl)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);

    const imageUrls = [];
    $('meta[property="og:image"]').each((index, element) => {
      const imageUrl = $(element).attr('content');
      imageUrls.push(imageUrl);
    });

    console.log(imageUrls);
  })
  .catch(error => console.error('Error fetching Instagram page:', error));
