import dataRequest from './dataRequest';
import { cookieState, deleteCookie } from './cookieHandler';



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
            ` <tr class="table__row">
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

    (async () => {
      renderTypeItem(await dataRequest('GET', '/api/items', {}));
      renderDataTable(await dataRequest('GET', '/api/items', { type: typeItem.value }));
    })();
    typeItem.addEventListener('change', async () =>
      renderDataTable(await dataRequest('GET', '/api/items', { type: typeItem.value })));
    document.addEventListener('click', event => {
      const target = event.target;

      if (target.closest('.btn-addItem')) modal.style.display = 'flex';
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
        await dataRequest('POST', '/api/items',  body);
        const value = typeItem.value;
        renderTypeItem(await dataRequest('GET', '/api/items', {}));
        typeItem.value = value;
        renderDataTable(await dataRequest('GET', '/api/items', { type: typeItem.value }));
      })();
    });
  });
};

export default adminPanelHandler;
