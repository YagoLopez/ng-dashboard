import MdlElement from "../element/mdl_element";

export default class MdlLayout extends MdlElement{
  drawer_: HTMLElement;
  obfuscator_: HTMLElement;
  Keycodes_: Object;
  Mode_: Object;
  contentScrollHandler_: Function;
  keyboardEventHandler_: Function;
  screenSizeHandler_: Function;
  drawerToggleHandler_: Function;
  // headerTransitionHandler_: Function;
  headerClickHandler_: Function;
  headerTransitionEndHandler_: Function;
  resetTabState_: Function;
  resetPanelState_: Function;
  toggleDrawer: Function;
  constructor(el: HTMLElement){super(el)}
}
MdlLayout.prototype.Constant_ = {
  MAX_WIDTH: '(max-width: 1024px)',
  TAB_SCROLL_PIXELS: 100,
  RESIZE_TIMEOUT: 100,
  MENU_ICON: '&#xE5D2;',
  CHEVRON_LEFT: 'chevron_left',
  CHEVRON_RIGHT: 'chevron_right'
};
/**
 * Keycodes, for code readability.
 */
MdlLayout.prototype.Keycodes_ = {
  ENTER: 13,
  ESCAPE: 27,
  SPACE: 32
};
MdlLayout.prototype.Mode_ = {
  STANDARD: 0,
  SEAMED: 1,
  WATERFALL: 2,
  SCROLL: 3
};
MdlLayout.prototype.CssClasses_ = {
  CONTAINER: 'mdl-layout__container',
  HEADER: 'mdl-layout__header',
  DRAWER: 'mdl-layout__drawer',
  CONTENT: 'mdl-layout__content',
  DRAWER_BTN: 'mdl-layout__drawer-button',
  ICON: 'material-icons',
  JS_RIPPLE_EFFECT: 'mdl-js-ripple-effect',
  RIPPLE_CONTAINER: 'mdl-layout__tab-ripple-container',
  RIPPLE: 'mdl-ripple',
  RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
  HEADER_SEAMED: 'mdl-layout__header--seamed',
  HEADER_WATERFALL: 'mdl-layout__header--waterfall',
  HEADER_SCROLL: 'mdl-layout__header--scroll',
  FIXED_HEADER: 'mdl-layout--fixed-header',
  OBFUSCATOR: 'mdl-layout__obfuscator',
  TAB_BAR: 'mdl-layout__tab-bar',
  TAB_CONTAINER: 'mdl-layout__tab-bar-container',
  TAB: 'mdl-layout__tab',
  TAB_BAR_BUTTON: 'mdl-layout__tab-bar-button',
  TAB_BAR_LEFT_BUTTON: 'mdl-layout__tab-bar-left-button',
  TAB_BAR_RIGHT_BUTTON: 'mdl-layout__tab-bar-right-button',
  PANEL: 'mdl-layout__tab-panel',
  HAS_DRAWER: 'has-drawer',
  HAS_TABS: 'has-tabs',
  HAS_SCROLLING_HEADER: 'has-scrolling-header',
  CASTING_SHADOW: 'is-casting-shadow',
  IS_COMPACT: 'is-compact',
  IS_SMALL_SCREEN: 'is-small-screen',
  IS_DRAWER_OPEN: 'is-visible',
  IS_ACTIVE: 'is-active',
  IS_UPGRADED: 'is-upgraded',
  IS_ANIMATING: 'is-animating',
  ON_LARGE_SCREEN: 'mdl-layout--large-screen-only',
  ON_SMALL_SCREEN: 'mdl-layout--small-screen-only'
};
/**
 * Handles scrolling on the content.
 */
MdlLayout.prototype.contentScrollHandler_ = function () {
  if (this.header_.classList.contains(this.CssClasses_.IS_ANIMATING)) {
    return;
  }
  var headerVisible =
    !this.element_.classList.contains(this.CssClasses_.IS_SMALL_SCREEN) ||
    this.element_.classList.contains(this.CssClasses_.FIXED_HEADER);
  if (this.content_.scrollTop > 0 && !this.header_.classList.contains(this.CssClasses_.IS_COMPACT)) {
    this.header_.classList.add(this.CssClasses_.CASTING_SHADOW);
    this.header_.classList.add(this.CssClasses_.IS_COMPACT);
    if (headerVisible) {
      this.header_.classList.add(this.CssClasses_.IS_ANIMATING);
    }
  } else if (this.content_.scrollTop <= 0 && this.header_.classList.contains(this.CssClasses_.IS_COMPACT)) {
    this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW);
    this.header_.classList.remove(this.CssClasses_.IS_COMPACT);
    if (headerVisible) {
      this.header_.classList.add(this.CssClasses_.IS_ANIMATING);
    }
  }
};
/**
 * Handles a keyboard event on the drawer.
 * @param {KeyboardEvent} evt The event that fired.
 */
MdlLayout.prototype.keyboardEventHandler_ = function (evt: KeyboardEvent) {
  // Only react when the drawer is open.
  if (evt.keyCode === this.Keycodes_.ESCAPE && this.drawer_.classList.contains(this.CssClasses_.IS_DRAWER_OPEN)) {
    this.toggleDrawer();
  }
};
/**
 * Handles changes in screen size.
 */
MdlLayout.prototype.screenSizeHandler_ = function () {
  if (this.screenSizeMediaQuery_.matches) {
    this.element_.classList.add(this.CssClasses_.IS_SMALL_SCREEN);
  } else {
    this.element_.classList.remove(this.CssClasses_.IS_SMALL_SCREEN);
    // Collapse drawer (if any) when moving to a large screen size.
    if (this.drawer_) {
      this.drawer_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN);
      this.obfuscator_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN);
    }
  }
};
/**
 * Handles events of drawer button.
 * @param {KeyboardEvent} evt The event that fired.
 */
MdlLayout.prototype.drawerToggleHandler_ = function (evt: KeyboardEvent) {
  if (evt && evt.type === 'keydown') {
    if (evt.keyCode === this.Keycodes_.SPACE || evt.keyCode === this.Keycodes_.ENTER) {
      // prevent scrolling in drawer nav
      evt.preventDefault();
    } else {
      // prevent other keys
      return;
    }
  }
  this.toggleDrawer();
};
/**
 * Handles (un)setting the `is-animating` class
 */
MdlLayout.prototype.headerTransitionEndHandler_ = function () {
  this.header_.classList.remove(this.CssClasses_.IS_ANIMATING);
};
/**
 * Handles expanding the header on click
 */
MdlLayout.prototype.headerClickHandler_ = function () {
  if (this.header_.classList.contains(this.CssClasses_.IS_COMPACT)) {
    this.header_.classList.remove(this.CssClasses_.IS_COMPACT);
    this.header_.classList.add(this.CssClasses_.IS_ANIMATING);
  }
};
/**
 * Reset tab state, dropping active classes
 */
MdlLayout.prototype.resetTabState_ = function (tabBar:any) {
  for (var k = 0; k < tabBar.length; k++) {
    tabBar[k].classList.remove(this.CssClasses_.IS_ACTIVE);
  }
};
/**
 * Reset panel state, droping active classes
 */
MdlLayout.prototype.resetPanelState_ = function (panels:any) {
  for (var j = 0; j < panels.length; j++) {
    panels[j].classList.remove(this.CssClasses_.IS_ACTIVE);
  }
};
/**
 * Toggle drawer state
 */
MdlLayout.prototype.toggleDrawer = function () {
  var drawerButton = this.element_.querySelector('.' + this.CssClasses_.DRAWER_BTN);
  this.drawer_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN);
  this.obfuscator_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN);
  // Set accessibility properties.
  if (this.drawer_.classList.contains(this.CssClasses_.IS_DRAWER_OPEN)) {
    this.drawer_.setAttribute('aria-hidden', 'false');
    drawerButton.setAttribute('aria-expanded', 'true');
  } else {
    this.drawer_.setAttribute('aria-hidden', 'true');
    drawerButton.setAttribute('aria-expanded', 'false');
  }
};
/**
 * Initialize element.
 */
MdlLayout.prototype.init = function () {
  if (this.element_) {
    var focusedElement = this.element_.querySelector(':focus');
    if (focusedElement) {
      focusedElement.focus();
    }
    /* modifications
    var directChildren = this.element_.childNodes;
    var numChildren = directChildren.length;
    for (var c = 0; c < numChildren; c++) {
        var child = directChildren[c];
        if (child.classList && child.classList.contains(this.CssClasses_.HEADER)) {
            this.header_ = child;
        }
        if (child.classList && child.classList.contains(this.CssClasses_.DRAWER)) {
            this.drawer_ = child;
        }
        if (child.classList && child.classList.contains(this.CssClasses_.CONTENT)) {
            this.content_ = child;
        }
    }
    /modifications */
    this.header_ = this.element_.getElementsByTagName('ml-header')[0];
    this.drawer_ = this.element_.getElementsByTagName('ml-drawer')[0];
    this.content_ = this.element_.getElementsByTagName('ml-content')[0];
    /* end of modifications */
    window.addEventListener('pageshow', function (e:any) {
      if (e.persisted) {
        // when page is loaded from back/forward cache
        // trigger repaint to let layout scroll in safari
        this.element_.style.overflowY = 'hidden';
        requestAnimationFrame(function () {
          this.element_.style.overflowY = '';
        }.bind(this));
      }
    }.bind(this), false);
    if (this.header_) {
      this.tabBar_ = this.header_.querySelector('.' + this.CssClasses_.TAB_BAR);
    }
    var mode = this.Mode_.STANDARD;
    if (this.header_) {
      if (this.header_.classList.contains(this.CssClasses_.HEADER_SEAMED)) {
        mode = this.Mode_.SEAMED;
      } else if (this.header_.classList.contains(this.CssClasses_.HEADER_WATERFALL)) {
        mode = this.Mode_.WATERFALL;
        this.header_.addEventListener('transitionend', this.headerTransitionEndHandler_.bind(this));
        this.header_.addEventListener('click', this.headerClickHandler_.bind(this));
      } else if (this.header_.classList.contains(this.CssClasses_.HEADER_SCROLL)) {
        mode = this.Mode_.SCROLL;
        //todo: esto puede tener que ver con que no funcione scrolling header
        // container.classList.add(this.CssClasses_.HAS_SCROLLING_HEADER);
      }
      if (mode === this.Mode_.STANDARD) {
        this.header_.classList.add(this.CssClasses_.CASTING_SHADOW);
        if (this.tabBar_) {
          this.tabBar_.classList.add(this.CssClasses_.CASTING_SHADOW);
        }
      } else if (mode === this.Mode_.SEAMED || mode === this.Mode_.SCROLL) {
        this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW);
        if (this.tabBar_) {
          this.tabBar_.classList.remove(this.CssClasses_.CASTING_SHADOW);
        }
      } else if (mode === this.Mode_.WATERFALL) {
        // Add and remove shadows depending on scroll position.
        // Also add/remove auxiliary class for styling of the compact version of
        // the header.
        this.content_.addEventListener('scroll', this.contentScrollHandler_.bind(this));
        this.contentScrollHandler_();
      }
    }
    // Add drawer toggling button to our layout, if we have an openable drawer.
    if (this.drawer_) {
      var drawerButton = this.element_.querySelector('.' + this.CssClasses_.DRAWER_BTN);
      if (!drawerButton) {
        drawerButton = document.createElement('div');
        drawerButton.setAttribute('aria-expanded', 'false');
        drawerButton.setAttribute('role', 'button');
        drawerButton.setAttribute('tabindex', '0');
        drawerButton.classList.add(this.CssClasses_.DRAWER_BTN);
        var drawerButtonIcon = document.createElement('i');
        drawerButtonIcon.classList.add(this.CssClasses_.ICON);
        drawerButtonIcon.innerHTML = this.Constant_.MENU_ICON;
        drawerButton.appendChild(drawerButtonIcon);
      }
      if (this.drawer_.classList.contains(this.CssClasses_.ON_LARGE_SCREEN)) {
        //If drawer has ON_LARGE_SCREEN class then add it to the drawer toggle button as well.
        drawerButton.classList.add(this.CssClasses_.ON_LARGE_SCREEN);
      } else if (this.drawer_.classList.contains(this.CssClasses_.ON_SMALL_SCREEN)) {
        //If drawer has ON_SMALL_SCREEN class then add it to the drawer toggle button as well.
        drawerButton.classList.add(this.CssClasses_.ON_SMALL_SCREEN);
      }
      drawerButton.addEventListener('click', this.drawerToggleHandler_.bind(this));
      drawerButton.addEventListener('keydown', this.drawerToggleHandler_.bind(this));
      // Add a class if the layout has a drawer, for altering the left padding.
      // Adds the HAS_DRAWER to the elements since this.header_ may or may
      // not be present.
      this.element_.classList.add(this.CssClasses_.HAS_DRAWER);
      // If we have a fixed header, add the button to the header rather than
      // the layout.
      if (this.element_.classList.contains(this.CssClasses_.FIXED_HEADER)) {
        this.header_.insertBefore(drawerButton, this.header_.firstChild);
      } else {
        this.element_.insertBefore(drawerButton, this.content_);
      }
      var obfuscator = document.createElement('div');
      obfuscator.classList.add(this.CssClasses_.OBFUSCATOR);
      this.element_.appendChild(obfuscator);
      obfuscator.addEventListener('click', this.drawerToggleHandler_.bind(this));
      this.obfuscator_ = obfuscator;
      this.drawer_.addEventListener('keydown', this.keyboardEventHandler_.bind(this));
      this.drawer_.setAttribute('aria-hidden', 'true');
    }
    // Keep an eye on screen size, and add/remove auxiliary class for styling
    // of small screens.
    this.screenSizeMediaQuery_ = window.matchMedia(this.Constant_.MAX_WIDTH);
    this.screenSizeMediaQuery_.addListener(this.screenSizeHandler_.bind(this));
    this.screenSizeHandler_();
    // Initialize tabs, if any.
    if (this.header_ && this.tabBar_) {
      this.element_.classList.add(this.CssClasses_.HAS_TABS);
      var tabContainer = document.createElement('div');
      tabContainer.classList.add(this.CssClasses_.TAB_CONTAINER);
      this.header_.insertBefore(tabContainer, this.tabBar_);
      this.header_.removeChild(this.tabBar_);
      var leftButton = document.createElement('div');
      leftButton.classList.add(this.CssClasses_.TAB_BAR_BUTTON);
      leftButton.classList.add(this.CssClasses_.TAB_BAR_LEFT_BUTTON);
      var leftButtonIcon = document.createElement('i');
      leftButtonIcon.classList.add(this.CssClasses_.ICON);
      leftButtonIcon.textContent = this.Constant_.CHEVRON_LEFT;
      leftButton.appendChild(leftButtonIcon);
      leftButton.addEventListener('click', function () {
        this.tabBar_.scrollLeft -= this.Constant_.TAB_SCROLL_PIXELS;
      }.bind(this));
      var rightButton = document.createElement('div');
      rightButton.classList.add(this.CssClasses_.TAB_BAR_BUTTON);
      rightButton.classList.add(this.CssClasses_.TAB_BAR_RIGHT_BUTTON);
      var rightButtonIcon = document.createElement('i');
      rightButtonIcon.classList.add(this.CssClasses_.ICON);
      rightButtonIcon.textContent = this.Constant_.CHEVRON_RIGHT;
      rightButton.appendChild(rightButtonIcon);
      rightButton.addEventListener('click', function () {
        this.tabBar_.scrollLeft += this.Constant_.TAB_SCROLL_PIXELS;
      }.bind(this));
      tabContainer.appendChild(leftButton);
      tabContainer.appendChild(this.tabBar_);
      tabContainer.appendChild(rightButton);
      // Add and remove tab buttons depending on scroll position and total
      // window size.
      var tabUpdateHandler = function () {
        if (this.tabBar_.scrollLeft > 0) {
          leftButton.classList.add(this.CssClasses_.IS_ACTIVE);
        } else {
          leftButton.classList.remove(this.CssClasses_.IS_ACTIVE);
        }
        if (this.tabBar_.scrollLeft < this.tabBar_.scrollWidth - this.tabBar_.offsetWidth) {
          rightButton.classList.add(this.CssClasses_.IS_ACTIVE);
        } else {
          rightButton.classList.remove(this.CssClasses_.IS_ACTIVE);
        }
      }.bind(this);
      this.tabBar_.addEventListener('scroll', tabUpdateHandler);
      tabUpdateHandler();
      // Update tabs when the window resizes.
      var windowResizeHandler = function () {
        // Use timeouts to make sure it doesn't happen too often.
        if (this.resizeTimeoutId_) {
          clearTimeout(this.resizeTimeoutId_);
        }
        this.resizeTimeoutId_ = setTimeout(function () {
          tabUpdateHandler();
          this.resizeTimeoutId_ = null;
        }.bind(this), this.Constant_.RESIZE_TIMEOUT);
      }.bind(this);
      window.addEventListener('resize', windowResizeHandler);
      if (this.tabBar_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)) {
        this.tabBar_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
      }
      // Select element tabs, document panels
      var tabs = this.tabBar_.querySelectorAll('.' + this.CssClasses_.TAB);
      var panels = this.content_.querySelectorAll('.' + this.CssClasses_.PANEL);
      // Create new tabs for each tab element
      for (var i = 0; i < tabs.length; i++) {
        MaterialLayoutTab(tabs[i], tabs, panels, this);
      }
    }
    this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
  }
};
/**
 * Factory for an individual tab.
 *
 * @constructor
 * @param {HTMLElement} tab The HTML element for the tab.
 * @param {!Array<HTMLElement>} tabs Array with HTML elements for all tabs.
 * @param {!Array<HTMLElement>} panels Array with HTML elements for all panels.
 * @param {MaterialLayout} layout The MdlLayout object that owns the tab.
 */
export function MaterialLayoutTab(tab:any, tabs:any, panels:any, layout:any) {
  /**
   * Auxiliary method to programmatically select a tab in the UI.
   */
  function selectTab() {
    var href = tab.href.split('#')[1];
    var panel = layout.content_.querySelector('#' + href);
    layout.resetTabState_(tabs);
    layout.resetPanelState_(panels);
    tab.classList.add(layout.CssClasses_.IS_ACTIVE);
    panel.classList.add(layout.CssClasses_.IS_ACTIVE);
  }

  if (layout.tabBar_.classList.contains(layout.CssClasses_.JS_RIPPLE_EFFECT)) {
    var rippleContainer = document.createElement('span');
    rippleContainer.classList.add(layout.CssClasses_.RIPPLE_CONTAINER);
    rippleContainer.classList.add(layout.CssClasses_.JS_RIPPLE_EFFECT);
    var ripple = document.createElement('span');
    ripple.classList.add(layout.CssClasses_.RIPPLE);
    rippleContainer.appendChild(ripple);
    tab.appendChild(rippleContainer);
  }
  tab.addEventListener('click', function (e:any) {
    if (tab.getAttribute('href').charAt(0) === '#') {
      e.preventDefault();
      selectTab();
    }
  });
  tab.show = selectTab;
}

