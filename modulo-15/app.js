import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js';
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  doc,
  deleteDoc,
  onSnapshot,
} from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCUFCDImSAisT7gtNa3Ps7ApYndAAeBtgk',
  authDomain: 'teste-firebase-203c9.firebaseapp.com',
  projectId: 'teste-firebase-203c9',
  storageBucket: 'teste-firebase-203c9.appspot.com',
  messagingSenderId: '498319609611',
  appId: '1:498319609611:web:1f006ceaea820be4105c0e',
  measurementId: 'G-GC6CYQ5887',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const collectionGames = collection(db, 'games');

const formAddGame = document.querySelector('[data-js="add-game-form"]');
const gamesList = document.querySelector('[data-js="games-list"]');
const buttonUnsub = document.querySelector('[data-js="unsub"]');

const geFormattedDate = createdAt => new Intl
  .DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' })
  .format(createdAt.toDate())

const renderGamesList = (querySnapshot) => {
  if (!querySnapshot.metadata.hasPendingWrites) {
    gamesList.innerHTML = querySnapshot.docs.reduce((acc, doc) => {
      const [id, { title, developedBy, createdAt }] = [doc.id, doc.data()];

      return `${acc}<li data-id="${id}" class="my-4">
        <h5>${title}</h5> 
        <button data-remove="${id}" class="btn btn-sm"> 
          Remover  <i class="fa fa-trash-o"></i>
        </button>
        
        <ul>
          <li>Desenvolvido por ${developedBy}</li>
          ${createdAt ? `<li>Adicionado no banco em ${geFormattedDate(createdAt)}</li>` : ''} 
        </ul>
        
      </li>`;
    }, '');
  }
};

const addGame = (e) => {
  e.preventDefault();

  addDoc(collectionGames, {
    title: e.target.title.value,
    developedBy: e.target.developedBy.value,
    createdAt: serverTimestamp(),
  })
    .then((doc) => {
      console.log('Document criado com o ID', doc.id);
      e.target.reset();
      e.target.title.focus();
    })
    .catch(console.log);
};

const deleteGame = (e) => {
  const idRemoveButton = e.target.dataset.remove;

  if (idRemoveButton) {
    deleteDoc(doc(db, 'games', idRemoveButton))
      .then(() => console.log('Game Removido!'))
      .catch(console.log);
  }
};

const unsubscribe = onSnapshot(collectionGames, renderGamesList);

formAddGame.addEventListener('submit', addGame);
gamesList.addEventListener('click', deleteGame);
buttonUnsub.addEventListener('click', unsubscribe);
