document.getElementById('id').addEventListener('ended');

window.navigation.addEventListener('navigate', (e) =>
  console.log({ 'window.navigation.navigate': e })
);

window.addEventListener('locationchange', (e) =>
  console.log({ 'window.locationchange': e })
);

for (const [key, value] of new URLSearchParams(window.location.search).entries()) {
  console.log(`${key}: ${value}` )
}