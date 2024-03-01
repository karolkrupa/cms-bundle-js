import './src/styles/app.scss';

import '@preline/accordion'
import '@preline/dropdown'

import './src/js'

import Choices from "choices.js";

window.Choices = Choices;

import { initContainers } from "./src/vue";

initContainers()


// data-hs-overlay="#application-sidebar"

