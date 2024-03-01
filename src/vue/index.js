import {createApp} from "vue";
import {namedComponents} from "./components";

const containers = document.querySelectorAll(':not(.vue-container) .vue-container')

export function makeContainer(container, components = namedComponents) {
    let parent = container.parentElement
    while (parent) {
        if(parent.classList.contains('vue-container')) {
            return;
        }

        parent = parent.parentElement
    }

    createApp({
        components: components
    }).mount(container)
}

export function initContainers() {
    for (let container of containers) {
        makeContainer(container)
    }
}


