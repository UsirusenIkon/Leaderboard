const  getData = async() => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2Ikon/scores/')
  return response;
}

export default getData;