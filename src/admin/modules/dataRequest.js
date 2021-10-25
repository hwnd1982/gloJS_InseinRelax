const dataRequest = async (method, request, { type, name, units, cost }) => {
  if (method === 'POST') {
    await fetch(`http://localhost:3000${request}`, {
      method,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ type, name, units, cost })
    });
  }
  if (method === 'GET') {
    const
      response = await fetch(`http://localhost:3000${request}`, {
        method,
        mode: 'cors'
      }),
      data = await response.json();

    if (type)
      if (type === 'Все услуги') return data;
      else return data.reduce((newData, item) => {
        if (item.type === type) newData.push(item);

        return newData;
      }, []);
    else return data.reduce((newData, item) => {
      if (!newData.includes(item.type)) newData.push(item.type);

      return newData;
    }, []);
  }
};

export default dataRequest;
