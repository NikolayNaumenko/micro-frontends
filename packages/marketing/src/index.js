const exec = async () => {
  const { mount } = await import('./bootstrap');

  mount(document.querySelector('#root'));
}

exec();
