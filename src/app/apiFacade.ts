function apiFacade() {
  async function getJoke() {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const joke = await response.json();
    return joke.value;
  }

  return {
    getJoke,
  };
}
const facade = apiFacade();

export default facade;
