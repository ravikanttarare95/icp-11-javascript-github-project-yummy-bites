 const photos = ['./images/photos/plate1.avif', './images/photos/plate2.avif', './images/photos/plate3.avif','./images/photos/plate4.avif']; 
  let index = 0;
  const imgElement = document.getElementById('slideshow');

  setInterval(() => {
    index = (index + 1) % photos.length;
    imgElement.src = photos[index];
  }, 1000); 