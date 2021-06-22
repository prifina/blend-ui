/* eslint-disable import/no-anonymous-default-export */
export default (theme = {}) => {
  const { fontSizes, fontWeights, lineHeights, letterSpacings, colors } = theme;

  return {
    h1: {
      fontSize: fontSizes["2xl"],
      fontWeight: fontWeights["semiBold"],
      lineHeight: lineHeights["72"],
      letterSpacing: letterSpacings["normal"],
      color: colors["textPrimary"],
    },
    h2: {
      fontSize: fontSizes["2md"],
      fontWeight: fontWeights["semiBold"],
      lineHeight: lineHeights["48"],
      letterSpacing: letterSpacings["normal"],
      color: colors["textPrimary"],
    },
    h3: {
      fontSize: fontSizes["xl"],
      fontWeight: fontWeights["semiBold"],
      lineHeight: lineHeights["36"],
      letterSpacing: letterSpacings["normal"],
      color: colors["textPrimary"],
    },
    h4: {
      fontSize: fontSizes["lgx"],
      fontWeight: fontWeights["semiBold"],
      lineHeight: lineHeights["30"],
      letterSpacing: letterSpacings["normal"],
      color: colors["textPrimary"],
    },
    h5: {
      fontSize: fontSizes["lg"],
      fontWeight: fontWeights["semiBold"],
      lineHeight: lineHeights["24"],
      letterSpacing: letterSpacings["normal"],
      color: colors["textPrimary"],
    },
    h6: {
      fontSize: fontSizes["md"],
      fontWeight: fontWeights["semiBold"],
      lineHeight: lineHeights["24"],
      letterSpacing: letterSpacings["normal"],
      color: colors["textPrimary"],
    },
    body: {
      fontSize: fontSizes["md"],
      fontWeight: fontWeights["normal"],
      lineHeight: lineHeights["base"],
      letterSpacing: letterSpacings["normal"],
      color: colors["textPrimary"],
    },
    caption: {
      fontSize: fontSizes["xs"],
      fontWeight: fontWeights["normal"],
      lineHeight: lineHeights["18"],
      letterSpacing: letterSpacings["normal"],
      color: colors["textPrimary"],
    },
    caption2: {
      fontSize: fontSizes["xxs"],
      fontWeight: fontWeights["normal"],
      lineHeight: lineHeights["18"],
      letterSpacing: letterSpacings["normal"],
      color: colors["textPrimary"],
    },
    lightBody: {
      fontSize: fontSizes["sm"],
      fontWeight: fontWeights["normal"],
      lineHeight: lineHeights["standard"],
      letterSpacing: letterSpacings["normal"],
      color: colors["textPrimary"],
    },
    detail: {
      fontSize: fontSizes["xs"],
      fontWeight: fontWeights["medium"],
      lineHeight: lineHeights["standard"],
      letterSpacing: letterSpacings["normal"],
      color: colors["textPrimary"],
    },
  };
};
