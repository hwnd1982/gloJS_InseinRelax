import { getItems } from './dataRequest';

const dataHandlerPopupRepairTypes = () => {
  let indexCurrentItem = 0, sum = 0, indexNewItem = 0;
  const
    popupRepairTypes = document.querySelector('.popup-repair-types'),
    navListRepair = popupRepairTypes.querySelector('.nav-list-popup-repair'),
    navItems = [],
    sizesNavItems = [0],
    prevNavItems = document.getElementById('nav-arrow-popup-repair_left'),
    nextNavItems = document.getElementById('nav-arrow-popup-repair_right'),
    getData = async (index = 0) => await getItems({ type: navItems[index].textContent.trim() }),
    getTypes = async () => await getItems(),
    renderNav = () => (async () => {
      const
        navList = popupRepairTypes.querySelector('.nav-list-popup-repair'),
        nav = await getTypes();

      navList.textContent = '';
      nav.forEach((item, index) => {
        const newItem = document.createElement('button');

        newItem.className = `button_o popup-repair-types-nav__item ${index ? '' : 'active'}`;
        newItem.textContent = item;
        navItems.push(navList.appendChild(newItem));
      });
    })(),
    renderTable = async index => {
      const
        data = await getData(index),
        table = popupRepairTypes.querySelector('.popup-repair-types-content-table'),
        itemList = document.createElement('table');

      itemList.className = 'popup-repair-types-content-table__list';
      itemList.innerHTML = `<tbody>`;
      data.forEach(item => {
        itemList.innerHTML +=
        `
            <tr class="mobile-row showHide">
              <td class="repair-types-name">
                ${item.name}
              </td>
              <td class="mobile-col-title tablet-hide desktop-hide">
                Ед.измерения
              </td>
              <td class="mobile-col-title tablet-hide desktop-hide">
                Цена за ед.
              </td>
              <td class="repair-types-value">${item.units === 'м2' ? 'м<sup>2' : item.units}</sup></td>
              <td class="repair-types-value">${item.cost} руб.</td>
            </tr>
        `;
      });
      itemList.innerHTML += `</tbody>`;
      table.textContent = '';
      table.append(itemList);
    },
    showHideArrow = () => {
      if (indexNewItem === 0) prevNavItems.style.display = 'none';
      if (indexNewItem === navItems.length - 1) nextNavItems.style.display = 'none';
      if (prevNavItems.style.display === 'none' && indexNewItem > 0) prevNavItems.style.display = 'block';
      if (nextNavItems.style.display === 'none' && indexNewItem < navItems.length - 1)
        nextNavItems.style.display = 'block';
    };

  (async () => {
    await renderNav();
    await renderTable(indexCurrentItem);

    navItems.forEach(item => {
      sum += item.offsetWidth + 20;
      sizesNavItems.push(sum);
    });
    sum -= 20;
    if (innerWidth <= 1024) {
      navListRepair.style.minWidth = `${sum}px`;
      showHideArrow();
    }
    popupRepairTypes.addEventListener('click', ({ target }) => {
      let item = target.closest('.popup-repair-types-nav__item');

      if (target.matches('#nav-arrow-popup-repair_right, #nav-arrow-popup-repair_left')) {
        if (target.matches('#nav-arrow-popup-repair_right')) {
          if (indexNewItem < navItems.length - 1) ++indexNewItem;
        } else {
          if (indexNewItem > 0) --indexNewItem;
        }
        item = navItems[indexNewItem];
      }
      if (item) {
        indexNewItem = navItems.indexOf(item);
        if (innerWidth <= 1024) {
          navListRepair.style.transform = `translateX(${-sizesNavItems[indexNewItem]}px)`;
          showHideArrow();
        }
        navItems[indexCurrentItem].classList.remove('active');
        navItems[indexNewItem].classList.add('active');
        indexCurrentItem = indexNewItem;
        renderTable(indexCurrentItem);
      }
    });
    window.addEventListener('resize', () => {
      if (innerWidth <= 1024) {
        navListRepair.style.minWidth = `${sum}px`;
        showHideArrow();
      } else {
        navListRepair.style.minWidth = '';
        nextNavItems.style.display = '';
        prevNavItems.style.display = '';
      }
    });
  })();
};

export default dataHandlerPopupRepairTypes;
