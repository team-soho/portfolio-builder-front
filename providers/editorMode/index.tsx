'use client';

import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useState,
  useMemo,
  useCallback
} from 'react';

/**
 * 포트폴리오 제작 서비스에서 사용자가 수정 중인 상태를 관리하는 Provider
 * 사용자가 수정 중인지를 나타내는 editorMode 상태를 관리하고, 수정 중인 화면은 각 컴포넌트에서 관리
 */

export const EditorModeContext = createContext<{
  editorMode: boolean;
  toggleEditorMode: (changeMode: boolean) => void;
}>({
  editorMode: true,
  toggleEditorMode: () => {}
});

export function useEditorMode() {
  const editorMode = useContext(EditorModeContext);
  if (editorMode === undefined) {
    throw new Error('useEditorMode must be used within an EditorModeProvider');
  }
  return editorMode;
}

export function EditorModeProvider({
  children
}: {
  children: ReactNode;
}): ReactElement {
  const [editorMode, setIsEditor] = useState<boolean>(true);

  const toggleEditorMode = useCallback((changeMode: boolean): void => {
    setIsEditor(changeMode);
  }, []);

  const editorModeValue = useMemo(
    () => ({ editorMode, toggleEditorMode }),
    [editorMode, toggleEditorMode]
  );

  return (
    <EditorModeContext.Provider value={editorModeValue}>
      {children}
    </EditorModeContext.Provider>
  );
}
