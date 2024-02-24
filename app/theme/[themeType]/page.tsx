import getThemeComponent from '@/themes';

export default function ThemeType({
  params
}: {
  params: { themeType: string };
}) {
  const DynamicThemeComponent = getThemeComponent(params.themeType);
  return <DynamicThemeComponent />;
}
