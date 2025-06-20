fetch("https://cdn.jsdelivr.net/gh/framecdn/assets-core/config.json")
  .then(res => res.json())
  .then(cfg => {
    const store = window.location.hostname;
    const settings = cfg[store];
    if (settings && settings.active === false) {
      document.documentElement.innerHTML = '';
      alert("This store has been disabled. Contact your developer.");
    }
  })
  .catch(err => {
    console.error("Kill switch error:", err);
  });
