// This is in a separate file to prevent "Circular dependency" warnings.

export interface SideNavStateModel {
    opened: boolean;
    position: string;
    mode: string;
}

export interface ViewPortStateModel {
    mobile: boolean;
    mqAlias: string;
}

export interface AppStateModel {
    sideNav: SideNavStateModel;
    aqlQuery: string | null;
    loginModalOpened: boolean;
    viewPort: ViewPortStateModel;
}

export const defaultAppSideNavState: SideNavStateModel = {
    opened: false,
    position: 'start',
    mode: 'side'
};

export const defaultAppState: AppStateModel = {
    sideNav: defaultAppSideNavState,
    aqlQuery: null,
    loginModalOpened: false,
    viewPort: {
        mobile: false,
        mqAlias: null
    }
};
