export default (theme = {}) => {
  const { fontSizes, fontWeights, lineHeights, letterSpacings, colors } = theme;

  return {
    h1: {
      fontSize: fontSizes["xl"],
      fontWeight: fontWeights["bold"],
      lineHeight: lineHeights["standard"],
      letterSpacing: letterSpacings["normal"],
      color: colors["textPrimary"],
    },
    h2: {
      fontSize: fontSizes["lg"],
      fontWeight: fontWeights["bold"],
      lineHeight: lineHeights["standard"],
      letterSpacing: letterSpacings["normal"],
      color: colors["textPrimary"],
    },
    h3: {
      fontSize: fontSizes["lg"],
      fontWeight: fontWeights["regular"],
      lineHeight: lineHeights["standard"],
      letterSpacing: letterSpacings["normal"],
      color: colors["textPrimary"],
    },
    h4: {
      fontSize: fontSizes["md"],
      fontWeight: fontWeights["semiBold"],
      lineHeight: lineHeights["standard"],
      letterSpacing: letterSpacings["normal"],
      color: colors["textPrimary"],
    },
    h5: {
      fontSize: fontSizes["md"],
      fontWeight: fontWeights["regular"],
      lineHeight: lineHeights["standard"],
      letterSpacing: letterSpacings["normal"],
      color: colors["textPrimary"],
    },
    h6: {
      fontSize: fontSizes["sm"],
      fontWeight: fontWeights["bold"],
      lineHeight: lineHeights["standard"],
      letterSpacing: letterSpacings["normal"],
      color: colors["textPrimary"],
    },
    body: {
      fontSize: fontSizes["sm"],
      fontWeight: fontWeights["regular"],
      lineHeight: lineHeights["standard"],
      letterSpacing: letterSpacings["normal"],
      color: colors["textPrimary"],
    },
    lightBody: {
      fontSize: fontSizes["sm"],
      fontWeight: fontWeights["extraLight"],
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
