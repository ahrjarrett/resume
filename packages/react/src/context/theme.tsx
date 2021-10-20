import React, {
  useContext as use,
  createContext,
  FC,
  ReactChildren,
} from "react";

import { defaultTheme, Theme } from "../components/defaultTheme";

export const Context = createContext<Theme>(defaultTheme);

type Props = { themeOverride?: Theme; children: ReactChildren };

export const Provider: FC<Props> = props => {
  const value = props.themeOverride ?? defaultTheme;
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export const useContext = () => use(Context);
