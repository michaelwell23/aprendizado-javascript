/*
  Neste exercício, vamos praticar um pouco do que vimos até aqui, através da 
  API do GIPHY, que é um website de GIFs (https://giphy.com/).

  - Seu desafio é implementar uma funcionalidade de busca dos GIFs. Quando o 
    usuário digitar o termo de busca no input e pressionar enter, um GIF deve 
    ser exibido na tela. Como neste exemplo: https://youtu.be/RHe-uCJGCeA
  - Observe que o GIF mais recente é inserido acima dos GIFs anteriores;
  - Para fazer requests para a API do GIPHY, você precisará de uma API key. 
    Para obtê-la, siga os seguintes passos:
    - Acesse https://developers.giphy.com/dashboard/ e faça o login;
    - No Dashboard, clique em "Create an App", clique em "API Selected" e em 
      "Next Step";
    - Dê um nome e descrição para o app e crie-o;
    - Clique no código da API key para copiá-la;
  - O submit do form deve ser feito para o endpoint abaixo. Atente-se para os 2
    [PLACEHOLDERS] que devem ser substituídos:
    - https://api.giphy.com/v1/gifs/search?api_key=[SUA_CHAVE_DA_API_AQUI]&limit=1&q=[VALOR_INSERIDO_NO_INPUT]
    - Se quiser testar outras possibilidades, os endpoints da API estão 
      listados na documentação: https://developers.giphy.com/docs/api/endpoint#search
  - Ignore os avisos no console. Para limpá-lo, pressione "ctrl + L".
*/

const searchForm = document.querySelector('form');
const divContainer = document.querySelector('.out');

const getGIFUrl = async (value) => {
  const apiKey = 'Pf4er68iB2arBaGvjVp7On3kSb3T61K5';

  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=1&q=${value}`
    );

    if (response.ok !== true) {
      throw new Error('Não foi possível obter os Dados =(');
    }

    const gifData = await response.json();
    const gifUrl = await gifData.data[0].images.original.url;

    return gifUrl;
  } catch (error) {
    const h2 = document.createElement('h2');
    h2.textContent = error;
    divContainer.insertAdjacentElement('beforebegin', h2);
  }
};

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const inputValue = event.target.search.value;

  if (inputValue) {
    const img = document.createElement('img');
    img.setAttribute('src', await getGIFUrl(inputValue));
    divContainer.insertAdjacentElement('afterbegin', img);
  }

  searchForm.reset();
});
