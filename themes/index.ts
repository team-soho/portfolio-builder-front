import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

interface IThemeTypeConvert {
  [themeType: string]: string;
}
/**
 * key = themeType / value = 컴포넌트 이름
 */
const themeTypeToComponentMap: IThemeTypeConvert = {
  minimal: 'Minimal',
  'round-side-bar': 'RoundSideBar'
};

/**
 * themeType을 인자로 받아 해당하는 테마 컴포넌트를 동적으로 가져옵니다.
 * themeType이 유효하지 않을때에는 default theme를 Minimal로 합니다.
 * @param themeType 테마 타입 이름
 * @returns
 */
const getThemeComponent = (themeType: string): ComponentType => {
  const themeComponentName = themeTypeToComponentMap[themeType] || 'Minimal';
  return dynamic(() =>
    import(`@/themes/${themeComponentName}`).then((mod) => mod.default)
  );
};

export { themeTypeToComponentMap };
export default getThemeComponent;
