import { configure } from '@storybook/react';
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleDown,
  faAngleRight,
  faBook,
  faBuilding,
  faCalendarAlt,
  faChartArea,
  faChartBar,
  faChartPie,
  faCheckSquare,
  faChevronDown,
  faChevronUp,
  faEllipsisH,
  faExternalLinkAlt,
  faHandsHelping,
  faInfo,
  faInfoCircle,
  faLandmark,
  faLevelUpAlt,
  faMapMarkerAlt,
  faMinusSquare,
  faPencilAlt,
  faSearch,
  faSitemap,
  faSpinner,
  faSquare,
  faTable,
  faTag,
  faThLarge,
  faTimes,
  faUserTie
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faAngleDown,
  faAngleRight,
  faBook,
  faBuilding,
  faCalendarAlt,
  faChartArea,
  faChartBar,
  faChartPie,
  faCheckSquare,
  faChevronDown,
  faChevronUp,
  faEllipsisH,
  faExternalLinkAlt,
  faHandsHelping,
  faInfo,
  faInfoCircle,
  faLandmark,
  faLevelUpAlt,
  faMapMarkerAlt,
  faMinusSquare,
  faPencilAlt,
  faSearch,
  faSitemap,
  faSpinner,
  faSquare,
  faTable,
  faTag,
  faThLarge,
  faTimes,
  faUserTie
);

require('../styles/main.scss');

configure(require.context('./stories', true, /\.stories\.js$|mdx$/), module);