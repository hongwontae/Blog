import { create } from "zustand";

interface tagsState {
  initialState: {
    init: boolean;
    react: boolean;
    figma: boolean;
    javascript: boolean;
    typescript: boolean;
    css: boolean;
    photoshop: boolean;
  };
  reactClick : ()=>void;
  figmaClcik : ()=>void;
  javascriptClick : ()=>void;
  typescriptClcik : ()=>void;
  cssClick : ()=>void;
  photoshopClick : ()=>void
}

export const useTagsStore = create<tagsState>((set) => {
  return {
    initialState: {
      init: true,
      react: false,
      figma: false,
      javascript: false,
      typescript: false,
      css: false,
      photoshop: false,
    },
    reactClick: () => {
      return set((state) => {
        return {
          initialState: {
            ...state.initialState,
            react: !state.initialState.react,
          },
        };
      });
    },
    figmaClcik: () => {
      return set((state) => {
        return {
          initialState: {
            ...state.initialState,
            figma: !state.initialState.figma,
          },
        };
      });
    },
    javascriptClick: () => {
      return set((state) => {
        return {
          initialState: {
            ...state.initialState,
            javascript: !state.initialState.javascript,
          },
        };
      });
    },
    typescriptClcik: () => {
      return set((state) => {
        return {
          initialState: {
            ...state.initialState,
            typescript: !state.initialState.typescript,
          },
        };
      });
    },
    cssClick: () => {
      return set((state) => {
        return {
          initialState: {
            ...state.initialState,
            css: !state.initialState.css,
          },
        };
      });
    },
    photoshopClick: () => {
      return set((state) => {
        return {
          initialState: {
            ...state.initialState,
            photoshop: !state.initialState.photoshop,
          },
        };
      });
    },
  };
});
