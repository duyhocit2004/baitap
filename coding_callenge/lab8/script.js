///8.1
function whereAmI(lat, lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
      .then(response => {
        if (!response.ok) throw new Error('Unable to fetch location data.');
        return response.json();
      })
      .then(data => {
        console.log(data);
        const country = data.country;
        console.log(`You are in ${data.city}, ${country}.`);
      })
      .catch(error => console.log(error.message));
  }
  
  // Test coordinates
  whereAmI(52.508, 13.381);
  whereAmI(19.037, 72.873);
  whereAmI(-33.933, 18.474);


///8.2
function createImage(imgPath) {
    return new Promise((resolve, reject) => {
      const img = document.createElement('img');
      img.src = imgPath;
  
      img.addEventListener('load', () => {
        document.body.append(img);
        resolve(img);
      });
  
      img.addEventListener('error', () => {
        reject(new Error('Image not found.'));
      });
    });
  }
  
  // Test image URLs
  const imageUrl1 = 'https://example.com/image1.jpg';
  const imageUrl2 = 'https://example.com/image2.jpg';
  const imageUrl3 = 'https://example.com/image3.jpg';
  
  createImage(imageUrl1)
    .then(() => console.log('Image 1 loaded successfully.'))
    .catch(error => console.log(error.message));
  
  createImage(imageUrl2)
    .then(() => console.log('Image 2 loaded successfully.'))
    .catch(error => console.log(error.message));
  
  createImage(imageUrl3)
    .then(() => console.log('Image 3 loaded successfully.'))
    .catch(error => console.log(error.message));


//8.3
function getWeather(city) {
    return new Promise((resolve, reject) => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`)
        .then(response => {
          if (!response.ok) throw new Error('Unable to fetch weather data.');
          return response.json();
        })
        .then(data => {
          resolve(data.weather[0].description);
        })
        .catch(error => reject(error.message));
    });
  }
  
  // Test cities
    const city1 = 'London';
    const city2 = 'Paris';
    const city3 = 'New York';
    
    // Get weather for each city
    getWeather(city1)
        .then(weather => console.log(`Weather in ${city1}: ${weather}`))
        .catch(error => console.log(error));
    
    getWeather(city2)
        .then(weather => console.log(`Weather in ${city2}: ${weather}`))
        .catch(error => console.log(error));
    
    getWeather(city3)
        .then(weather => console.log(`Weather in ${city3}: ${weather}`))
        .catch(error => console.log(error));