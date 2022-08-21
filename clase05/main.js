const fetchPlanet = async () => {
  let res = await fetch("https://swapi.dev/api/planets/1");
  // .then((res) => res.json())
  // .then((data) => {
  //   let planet = data;
  //   let residents = planet.residents;

  //   fetch(residents[0])
  //     .then((res1) => res1.json())
  //     .then((json1) => console.log(json1));
  // });
  let planet = await res.json();
  let resident = await fetch(planet.residents[0]);

  return await resident.json();
};

fetchPlanet()
  .then((res) => {
    for (const field in res) {
      document.write(`
      <p><b>${field}:</b> ${res[field]}</p>
      `);
    }
  })
  .catch((err) => console.log(err));
