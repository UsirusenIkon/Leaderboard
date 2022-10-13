const postData = async(url, item) => {
  const response = await fetch(url,{
  method: 'POST',
  body: JSON.stringify(item),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  return response;
}

export default postData;