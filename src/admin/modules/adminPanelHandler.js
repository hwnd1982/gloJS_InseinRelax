import dataRequest from './dataRequest';
import { cookieState, deleteCookie } from './cookieHandler';
import formInputHandler from './formInputHandler';

// GET /api/items - получить список услуг, в query параметр search можно передать поисковый запрос
// POST /api/items - создать новую услугу, в теле запроса нужно передать объект
//    { type: string, name: string, units: string, cost: number }
// GET /api/items/{id} - получить услугу по ID
// PATCH /api/items/{id} - изменить услугу с ID, в теле запроса нужно передать объект
//    { type: string, name: string, units: string, cost: number }
// DELETE /api/items/{id} - удалить услугу по ID

const adminPanelHandler = () => {
  if (location.pathname.includes('/admin/table.html') && !cookieState().admin) location = './';
  window.onbeforeunload = function() {
    deleteCookie('admin');
    return "Вы уходите? Даннвая сессия будет закрыта...";
  };

  document.addEventListener('DOMContentLoaded', () => {
    const
      typeItem = document.getElementById('typeItem'),
      tbody = document.getElementById('tbody'),
      modal = document.getElementById('modal'),
      form = document.querySelector('form'),
      header = document.querySelector('.modal__header'),
      renderTypeItem = types => {
        typeItem.textContent = '';
        let inner = '<option value="Все услуги">Все услуги</option>';
        types.forEach(item => {
          inner += `
          <option value="${item}">
            ${item}
          </option>`;
        });
        typeItem.innerHTML = inner;
      },
      renderDataTable = data => {
        tbody.textContent = '';
        let inner = '';
        data.forEach(item => {
          inner +=
            ` <tr class="table__row" id="${item.id}">
                <td class="table__id table__cell">${item.id}</td>
                <td class="table-type table__cell">
                  ${item.type}
                </td>
                <td class="table-name table__cell">
                  ${item.name}
                </td>
                <td class="table-units table__cell">${item.units}</td>
                <td class="table-cost table__cell">${item.cost} руб</td>
                <td>
                  <div class="table__actions table__cell">
                    <button class="button action-change">
                      <span class="svg_ui"><svg class="action-icon_change">
                          <use xlink:href="img/sprite.svg#change"></use></svg></span><span>Изменить</span>
                    </button>
                    <button class="button action-remove">
                      <span class="svg_ui"><svg class="action-icon_remove">
                          <use xlink:href="img/sprite.svg#remove"></use></svg></span><span>Удалить</span>
                    </button>
                  </div>
                </td>
              </tr>
            `;
        });
        tbody.innerHTML = inner;
      };

    let editID = 0;
    formInputHandler();
    (async () => {
      renderTypeItem(await dataRequest('GET', '/api/items', {}));
      renderDataTable(await dataRequest('GET', '/api/items', { type: typeItem.value }));
    })();
    typeItem.addEventListener('change', async () =>
      renderDataTable(await dataRequest('GET', '/api/items', { type: typeItem.value })));
    document.addEventListener('click', event => {
      const target = event.target;

      if (target.closest('.btn-addItem')) {
        modal.style.display = 'flex';
        header.textContent = 'Добавение новой услуги';
      }
      if (target.closest('.action-change')) {
        editID = target.closest('.table__row').id;
        modal.style.display = 'flex';
        header.textContent = 'Изменение услуги';
        (async () => {
          const data = await dataRequest('GET', `/api/items/${editID}`, {});
          for (const key in data) {
            const input = form.querySelector(`input[name="${key}"]`);

            if (input) input.value = key === 'cost' ? data[key].replace(/[^\d]+/g, '') : data[key];
          }
        })();
      }
      if (target.closest('.action-remove')) {
        (async () => {
          const value = typeItem.value;

          await dataRequest('DELETE', `/api/items/${target.closest('.table__row').id}`, {});
          const types = await dataRequest('GET', '/api/items', {});
          renderTypeItem(types);
          typeItem.value =  types.includes(value) ? value : 'Все услуги';
          renderDataTable(await dataRequest('GET', '/api/items', { type: typeItem.value }));
        })();
      }
      if (target.closest('.button__close') || target.closest('.button-ui_firm') || target.closest('.cancel-button')) {
        if (!target.closest('.button-ui_firm')) event.preventDefault();
        modal.style.display = '';
      }
    });
    form.addEventListener('submit', event => {
      const
        formData = new FormData(form),
        body = {};

      event.preventDefault();
      formData.forEach((value, key) => body[key] = value);
      (async () => {
        const value = typeItem.value;

        if (editID) await dataRequest('PATCH', `/api/items/${editID}`,  body);
        else await dataRequest('POST', '/api/items',  body);
        renderTypeItem(await dataRequest('GET', '/api/items', {}));
        typeItem.value = value;
        renderDataTable(await dataRequest('GET', '/api/items', { type: typeItem.value }));
        editID = 0;
      })();
    });
  });
};

export default adminPanelHandler;
