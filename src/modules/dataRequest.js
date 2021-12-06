const request = 'https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/insein-relax-app-jsjas/service/insein-relax-api/incoming_webhook/api?secret=insein-relax';

export const
  getItems = async query => {
    const
      response = await fetch(`${request}${query ? '&' + JSON.stringify(query) : ''}`, {
        method: 'GET',
        mode: 'cors',
      }).catch(() => {
        throw console.log('Загрузить запись не удалось...');
      });

    return await response.json();
  };
