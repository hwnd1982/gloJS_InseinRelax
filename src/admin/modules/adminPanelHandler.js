import { getItems, createNewItem, deleteItem, editItem } from './dataRequest';
import { cookieState, deleteCookie } from './cookieHandler';
import formInputHandler from './formInputHandler';
import loadMessage from './loadMessage';

// GET /api/items - получить список услуг, в query параметр search можно передать поисковый запрос
// POST /api/items - создать новую услугу, в теле запроса нужно передать объект
//    { type: string, name: string, units: string, cost: number }
// GET /api/items/{id} - получить услугу по ID
// PATCH /api/items/{id} - изменить услугу с ID, в теле запроса нужно передать объект
//    { type: string, name: string, units: string, cost: number }
// DELETE /api/items/{id} - удалить услугу по ID

const adminPanelHandler = () => {
  if (location.pathname.includes('/admin/table.html') && !cookieState().admin) location = './';
  window.onunload = () =>  deleteCookie('admin');

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
      },
      cleanFormInput = () => form.querySelectorAll('input').forEach(item => item.value = '');

    let editID = 0;
    formInputHandler();
    (async () => {
      tbody.innerHTML = loadMessage;
      const types = await getItems();
      if (types) {
        renderTypeItem(types);
        renderDataTable(await getItems({ type: typeItem.value }));
      }
    })();
    typeItem.addEventListener('change', async () =>
      renderDataTable(await getItems({ type: typeItem.value })));
    document.addEventListener('click', event => {
      const target = event.target;

      if (target.closest('.btn-addItem')) {
        modal.style.display = 'flex';
        header.textContent = 'Добавение новой услуги';
        cleanFormInput();
      }
      if (target.closest('.action-change')) {
        editID = target.closest('.table__row').id;
        modal.style.display = 'flex';
        header.textContent = 'Изменение услуги';
        (async () => {
          const data = await getItems({ id: editID });
          for (const key in data) {
            const input = form.querySelector(`input[name="${key}"]`);

            if (input) input.value = key === 'cost' ? data[key].replace(/[^\d]+/g, '') : data[key];
          }
        })();
      }
      if (target.closest('.action-remove')) {
        (async () => {
          const value = typeItem.value;

          await deleteItem(target.closest('.table__row').id);
          const types = await getItems();

          renderTypeItem(types);
          typeItem.value =  types.includes(value) ? value : 'Все услуги';
          renderDataTable(await getItems({ type: typeItem.value }));
        })();
      }
      if (target.closest('.button__close') || target.closest('.button-ui_firm') || target.closest('.cancel-button')) {
        console.log(target);
        if (!target.closest('.button-ui_firm')) event.preventDefault();
        if (target.closest('.cancel-button')) cleanFormInput();
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

        if (editID) await editItem(body, editID);
        else console.log(await createNewItem(body));
        renderTypeItem(await getItems());
        typeItem.value = value;
        renderDataTable(await getItems({ type: typeItem.value }));
        editID = 0;
        cleanFormInput();
      })();
    });
  });
};

export default adminPanelHandler;
