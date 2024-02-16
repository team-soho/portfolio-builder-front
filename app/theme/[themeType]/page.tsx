export default function ThemeType({
  params
}: {
  params: { themeType: string };
}) {
  return <main>{params.themeType}</main>;
}
