import {
  AvatarPlugin,
  // BAlert,
  // BBadge,
  // BButton,
  // BCollapse,
  // BDropdown,
  // BDropdownItem,
  // BForm,
  // BFormCheckbox,
  // BFormDatepicker,
  // BFormGroup,
  // BFormInput,
  // BInputGroup,
  // BInputGroupPrepend,
  // BLink,
  // BModal,
  // BNavbar,
  BNavbarBrand,
  // BNavbarNav,
  // BNavbarToggle,
  // BNavItem,
  // BNavItemDropdown,
  BPagination,
  // BProgress,
  // BProgressBar,
  ButtonGroupPlugin,
  CardPlugin,
  // CollapsePlugin,
  // FormCheckboxPlugin,
  // FormDatepickerPlugin,
  // FormFilePlugin,
  // FormInputPlugin,
  // FormPlugin,
  // FormRadioPlugin,
  // FormSelectPlugin,
  // FormTextareaPlugin,
  // InputGroupPlugin,
  LayoutPlugin,
  ListGroupPlugin,
  // ModalPlugin,
  NavbarPlugin,
  SidebarPlugin,
  SpinnerPlugin,
  // TabsPlugin,
  // ToastPlugin,
  // TooltipPlugin,
  VBHoverPlugin,
  // VBModal,
} from "bootstrap-vue";

export function initBootstrapVue(Vue) {
  Vue.use(SidebarPlugin);
  Vue.use(NavbarPlugin);
  Vue.use(ListGroupPlugin);
  Vue.use(AvatarPlugin);
  // Vue.component("b-badge", BBadge);
  // Vue.component("b-dropdown", BDropdown);
  // Vue.component("b-dropdown-item", BDropdownItem);
  // Vue.component("b-link", BLink);
  // Vue.component("b-alert", BAlert);
  // Vue.component("b-modal", BModal);
  // Vue.component("b-button", BButton);
  // Vue.component("b-navbar", BNavbar);
  // Vue.component("b-navbar-nav", BNavbarNav);
  Vue.component("b-navbar-brand", BNavbarBrand);
  // Vue.component("b-navbar-toggle", BNavbarToggle);
  Vue.component("b-pagination", BPagination);
  // Vue.component("b-progress", BProgress);
  // Vue.component("b-progress-bar", BProgressBar);
  // Vue.component("b-form", BForm);
  // Vue.component("b-form-input", BFormInput);
  // Vue.component("b-form-group", BFormGroup);
  // Vue.component("b-form-checkbox", BFormCheckbox);
  // Vue.component("b-collapse", BCollapse);
  // Vue.component("b-nav-item", BNavItem);
  // Vue.component("b-nav-item-dropdown", BNavItemDropdown);
  // Vue.component("b-form-datepicker", BFormDatepicker);
  // Vue.component("b-input-group", BInputGroup);
  // Vue.component("b-input-group-prepend", BInputGroupPrepend);
  // Vue.component("b-modal", BModal);
  // Vue.directive("b-modal", VBModal);
  Vue.use(CardPlugin);
  // Vue.use(TabsPlugin);
  Vue.use(LayoutPlugin);
  // Vue.use(FormRadioPlugin);
  // Vue.use(ModalPlugin);
  Vue.use(ButtonGroupPlugin);
  // Vue.use(FormPlugin);
  // Vue.use(FormFilePlugin);
  // Vue.use(FormSelectPlugin);
  // Vue.use(InputGroupPlugin);
  // Vue.use(FormDatepickerPlugin);
  // Vue.use(InputGroupPlugin);
  // Vue.use(FormInputPlugin);
  // Vue.use(ToastPlugin);
  // Vue.use(TooltipPlugin);
  Vue.use(SpinnerPlugin);
  Vue.use(VBHoverPlugin);
  // Vue.use(FormTextareaPlugin);
  // Vue.use(FormCheckboxPlugin);
  // Vue.use(CollapsePlugin);
}
