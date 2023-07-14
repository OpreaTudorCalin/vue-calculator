import { createApp } from 'vue'
import App from './App.vue'
import CalculatorComponent from './components/CalculatorComponent.vue';

const app = createApp(App);

app.component('calculator-component', CalculatorComponent);

app.mount('#app')
