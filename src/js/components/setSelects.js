import Select from 'customSelect';

export default function setSelects() {
  const $selects = $('.js-select');

  // add panel input
  const panelInput = document.createElement('input');
  const panelInputWrap = document.createElement('div');
  panelInput.type = 'text';
  panelInput.className = 'js-search';
  const inputicon = '<svg height="1em" viewBox="0 0 16 16" width="1.000em" class="icon icon-search"><path d="M15.7 14.3l-3.105-3.105A6.966 6.966 0 0 0 14 7a7 7 0 1 0-7 7 6.96 6.96 0 0 0 4.194-1.405L14.3 15.7c.184.184.38.3.7.3a1 1 0 0 0 1-1 .926.926 0 0 0-.3-.7zM2 7c0-2.762 2.238-5 5-5s5 2.238 5 5-2.238 5-5 5-5-2.238-5-5z"/></svg>';

  panelInputWrap.innerHTML = inputicon;
  panelInputWrap.appendChild(panelInput);

  const options = {
    'with_input': {
      panelItem: {
        item: panelInputWrap,
        position: 'top'
      }
    }
  };

  $selects.each((i, selectEl) => {
    const selectType = selectEl.getAttribute('data-type');
    if (!selectType) {
      console.warn('select element must have `data-type` attribute');
    };

    const select = new Select(selectEl, options[selectType]);
    select.init();

    const $customSelect = $(selectEl).closest('.custom-select');
    if (!$customSelect.length) {
      console.warn('custom select has not initialized');
    };
    const $customSelectOptions = $customSelect.find('.custom-select__option');
    const $searchInput = $customSelect.find('.js-search');
    const $customSelectPanel = $customSelect.find('.custom-select__panel');
    const $customSelectOpener = $customSelect.find('.custom-select__opener');


    // add type to wrap
    selectEl.parentNode.setAttribute('data-type', selectType);

    // set panel scroll
    const $customOptionsWrap = $customSelect.find('.custom-select__options');
    const $scroledContainer = $customOptionsWrap.length > 0
      ? $customOptionsWrap.addClass('js-scrollbar')
      : $customSelectPanel.addClass('js-scrollbar');

    // set placeholder
    if (selectEl.classList.contains('has-placeholder')) {
      selectEl.parentNode.classList.add('has-placeholder');
    };

    selectEl.addEventListener('change', (e) => {
      const currSelect = e.currentTarget;
      if (currSelect.value !== 'placeholder') {
        currSelect.classList.add('has-placeholder-hidden');
        currSelect.parentNode.classList.add('has-placeholder-hidden');
      } else {
        currSelect.classList.remove('has-placeholder');
        currSelect.parentNode.classList.remove('has-placeholder-hidden');
      };
    });   

    // filter search
    $searchInput.on('input', (e) => {
      const filter = e.currentTarget.value.toUpperCase();
      const $options = $(e.currentTarget).closest('.custom-select__panel').find('.custom-select__option');

      $options.each((i, option) => {
        const textValue = option.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
          option.style.display = '';
        } else {
          option.style.display = 'none';
        }
      });
    });
  });
};
