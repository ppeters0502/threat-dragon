import Vue from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

// Import specific icons that we want here
import {
    faSignOutAlt,
    faQuestionCircle,
    faGift,
    faPlus,
    faCloudDownloadAlt,
    faEdit,
    faFileAlt,
    faTimes,
    faUndo,
    faRedo,
    faSave,
    faSearchPlus,
    faSearchMinus,
    faTrash,
    faTh,
    faKeyboard,
    faFileImport,
    faChevronDown,
    faChevronRight,
    faCheck,
    faExclamationTriangle,
    faCircle,
    faFilePdf,
    faFolderOpen,
    faPrint,
    faProjectDiagram,
    faDiagramProject,
} from "@fortawesome/free-solid-svg-icons";

import {
    faGithub,
    faVuejs,
    faWindows,
} from "@fortawesome/free-brands-svg-icons";

// Add icons to the library for use
library.add(
    faSignOutAlt,
    faQuestionCircle,
    faGift,
    faGithub,
    faVuejs,
    faPlus,
    faCloudDownloadAlt,
    faEdit,
    faFileAlt,
    faTimes,
    faUndo,
    faRedo,
    faSave,
    faSearchPlus,
    faSearchMinus,
    faTrash,
    faTh,
    faKeyboard,
    faFileImport,
    faChevronDown,
    faChevronRight,
    faCheck,
    faExclamationTriangle,
    faCircle,
    faFilePdf,
    faFolderOpen,
    faPrint,
    faProjectDiagram,
    faDiagramProject,
    faWindows
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
