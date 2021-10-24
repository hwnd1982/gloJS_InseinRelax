const dataRequest = async type => {
  const
    response = await fetch('./crm-backend/db.json', {
      method: 'GET',
      mode: 'same-origin'
    }),
    data = await response.json();
  if (type) return data.reduce((newData, item) => {
    if (item.type === type) {
      newData.push(item);
    }
    return newData;
  }, []);
  else return data.reduce((newData, item) => {
    if (!newData.includes(item.type)) {
      newData.push(item.type);
    }
    return newData;
  }, []);
};

export default dataRequest;
