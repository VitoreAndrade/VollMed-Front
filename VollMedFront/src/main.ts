


// createApp(App).mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';

// Importação dos estilos do PrimeVue
import 'primevue/resources/themes/saga-blue/theme.css'; // Tema
import 'primevue/resources/primevue.min.css'; // Core CSS
import 'primeicons/primeicons.css'; // Ícones

// Importe seu arquivo CSS principal
import './assets/main.css';

const app = createApp(App);

// Uso do PrimeVue
app.use(PrimeVue);

// Registro global do componente InputText
app.component('InputText', InputText);

app.mount('#app');
