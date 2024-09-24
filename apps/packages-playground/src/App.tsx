import "./App.css";
import { ThemeSwitcher, useTheme } from "@ahmadshaheer/theme";
import { Button } from "@ahmadshaheer/button";
import { Typography } from "@ahmadshaheer/design-tokens";
import { Spacing } from "@ahmadshaheer/design-tokens";

function App() {
  const { theme, currentThemeColors } = useTheme();

  return (
    <>
      <h1>Theme Switcher and Button</h1>
      <ThemeSwitcher />

      <Button theme={theme} variant="secondary">
        hey
      </Button>

      <h1>Design tokens</h1>
      <p
        style={{
          background: currentThemeColors.TEXT_COLOR,
          letterSpacing: Spacing.MARGIN_10,
          fontSize: Typography.FONTSIZE_3XL,
        }}
      >
        hey
      </p>
    </>
  );
}

export default App;
