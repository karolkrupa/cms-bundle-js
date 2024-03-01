import ConfirmationModal from "./ConfirmationModal.vue";
import Notification from "./Notification/Notification.vue";
import Dropdown from './Dropdown.vue'

export default {
    ConfirmationModal,
    Notification,
    Dropdown
}

export { ConfirmationModal };
export { Notification };
export { Dropdown };

export const namedComponents = {
    'confirmation-modal': ConfirmationModal,
    'd-notification': Notification,
    'd-dropdown': Dropdown,
}