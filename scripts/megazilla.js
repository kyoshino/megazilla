window.addEventListener('DOMContentLoaded', event => {
  'use strict';

  let timer;
  let $wrapper = document.querySelector('#mgzl .tabpanel-wrapper');
  let $tablist = document.querySelector('#mgzl [role="toolbar"] [role="tablist"]');
  let tabs = [...document.querySelectorAll('#mgzl [role="toolbar"] [role="tab"]')];

  tabs.forEach($tab => {
    let $tabpanel = document.getElementById($tab.getAttribute('aria-controls'));

    let onmouseover = event => {
      window.clearTimeout(timer);
      $tablist.setAttribute('aria-activedescendant', $tab.id);
      $wrapper.setAttribute('aria-hidden', 'false');
      $tab.setAttribute('aria-selected', 'true');
      $tabpanel.setAttribute('aria-hidden', 'false');
    };

    let onmouseleave = event => {
      timer = window.setTimeout(window => $wrapper.setAttribute('aria-hidden', 'true'), 100);
      $tablist.removeAttribute('aria-activedescendant');
      $tab.setAttribute('aria-selected', 'false');
      $tabpanel.setAttribute('aria-hidden', 'true');
    };

    $tab.addEventListener('mouseover', onmouseover);
    $tab.addEventListener('mouseleave', onmouseleave);
    $tabpanel.addEventListener('mouseover', onmouseover);
    $tabpanel.addEventListener('mouseleave', onmouseleave);
  });
});
