import { deleteCookie } from './cookieHandler';

const request = 'https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/insein-relax-app-jsjas/service/insein-relax-api/incoming_webhook/api?secret=insein-relax';

export const
  getItems = async query => {
    const
      response = await fetch(`${request}${query ? '&' + JSON.stringify(query) : ''}`, {
        method: 'GET',
        mode: 'cors',
      }).catch(() => {
        throw console.log('Загрузить запись не удалось...'), deleteCookie('admin'), location = './';
      });

    return await response.json();
  },
  createNewItem = async body => {
    const
      response = await fetch(request, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }).catch(() => {
        throw console.log('Создать новую запись не удалось ...'), deleteCookie('admin'), location = './';
      });

    return await response.json();
  },
  deleteItem = async id => {
    const response = await fetch(`${request}&${JSON.stringify({ id })}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    }).catch(() => {
      throw console.log('Удалить запись не удалось...'), deleteCookie('admin'), location = './';
    });

    return await response.json();
  },
  editItem = async (body, id) => {
    const
      response = await fetch(`${request}&${JSON.stringify({ id })}`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      }).catch(() => {
        throw console.log('Изменить запись не удалось...'), deleteCookie('admin'), location = './';
      });

    return await response.json();
  };
