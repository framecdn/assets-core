fetch("https://cdn.jsdelivr.net/gh/techiegoddess585/ghost-switch-multistore/config.json")
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
