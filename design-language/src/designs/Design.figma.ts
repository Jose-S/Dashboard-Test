/**
 * This code was generated by Diez version 10.2.3.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { Color, DropShadow, File, Font, Image, Point2D, Typograph } from "@diez/prefabs";

const designColors = {
    gray1: Color.rgba(51, 51, 51, 1),
    gray2: Color.rgba(79, 79, 79, 1),
    gray3: Color.rgba(130, 130, 130, 1),
    gray4: Color.rgba(189, 189, 189, 1),
    gray5: Color.rgba(224, 224, 224, 1),
    gray6: Color.rgba(242, 242, 242, 1),
    orange: Color.rgba(242, 153, 74, 1),
    yellow: Color.rgba(242, 201, 76, 1),
    green1: Color.rgba(33, 150, 83, 1),
    green2: Color.rgba(39, 174, 96, 1),
    green3: Color.rgba(111, 207, 151, 1),
    tertiary: Color.rgba(7, 35, 100, 1),
    secondary: Color.rgba(43, 43, 144, 1),
    primary: Color.rgba(69, 115, 238, 1),
    background: Color.rgba(240, 244, 255, 1),
    white: Color.rgba(255, 255, 255, 1),
    red: Color.rgba(235, 87, 87, 1),
    gray11: Color.rgba(51, 51, 51, 1),
    gray12: Color.rgba(51, 51, 51, 1)
};

const designShadows = {
    mdcElevationZ24: new DropShadow({ offset: Point2D.make(0, 9), radius: 46, color: Color.rgba(0, 0, 0, 0.11999999731779099) }),
    mdcElevationZ22: new DropShadow({ offset: Point2D.make(0, 8), radius: 42, color: Color.rgba(0, 0, 0, 0.11999999731779099) }),
    mdcElevationZ20: new DropShadow({ offset: Point2D.make(0, 8), radius: 38, color: Color.rgba(0, 0, 0, 0.11999999731779099) }),
    mdcElevationZ18: new DropShadow({ offset: Point2D.make(0, 7), radius: 34, color: Color.rgba(0, 0, 0, 0.11999999731779099) }),
    mdcElevationZ16: new DropShadow({ offset: Point2D.make(0, 6), radius: 30, color: Color.rgba(0, 0, 0, 0.11999999731779099) }),
    mdcElevationZ14: new DropShadow({ offset: Point2D.make(0, 5), radius: 26, color: Color.rgba(0, 0, 0, 0.11999999731779099) }),
    mdcElevationZ12: new DropShadow({ offset: Point2D.make(0, 5), radius: 22, color: Color.rgba(0, 0, 0, 0.11999999731779099) }),
    mdcElevationZ10: new DropShadow({ offset: Point2D.make(0, 4), radius: 18, color: Color.rgba(0, 0, 0, 0.11999999731779099) }),
    mdcElevationZ8: new DropShadow({ offset: Point2D.make(0, 3), radius: 14, color: Color.rgba(0, 0, 0, 0.11999999731779099) }),
    mdcElevationZ6: new DropShadow({ offset: Point2D.make(0, 1), radius: 18, color: Color.rgba(0, 0, 0, 0.11999999731779099) }),
    mdcElevationZ5: new DropShadow({ offset: Point2D.make(0, 1), radius: 14, color: Color.rgba(0, 0, 0, 0.11999999731779099) }),
    mdcElevationZ4: new DropShadow({ offset: Point2D.make(0, 1), radius: 10, color: Color.rgba(0, 0, 0, 0.11999999731779099) }),
    mdcElevationZ3: new DropShadow({ offset: Point2D.make(0, 1), radius: 8, color: Color.rgba(0, 0, 0, 0.11999999731779099) }),
    mdcElevationZ2: new DropShadow({ offset: Point2D.make(0, 1), radius: 5, color: Color.rgba(0, 0, 0, 0.11999999731779099) }),
    mdcElevationZ1: new DropShadow({ offset: Point2D.make(0, 1), radius: 3, color: Color.rgba(0, 0, 0, 0.11999999731779099) })
};

export const designFonts = {
    Montserrat: {
        SemiBold: Font.fromFile("assets/Design.figma.contents/fonts/Montserrat-SemiBold.otf"),
        Bold: Font.fromFile("assets/Design.figma.contents/fonts/Montserrat-Bold.otf")
    },
    Inter: {
        Medium: Font.fromFile("assets/Design.figma.contents/fonts/Inter-Medium.otf"),
        SemiBold: Font.fromFile("assets/Design.figma.contents/fonts/Inter-SemiBold.otf"),
        Regular: Font.fromFile("assets/Design.figma.contents/fonts/Inter-Regular.otf"),
        Bold: Font.fromFile("assets/Design.figma.contents/fonts/Inter-Bold.otf")
    }
};

const designTypography = {
    fontSize10: new Typograph({ fontSize: 48, color: Color.rgba(51, 51, 51, 1), font: designFonts.Montserrat.SemiBold }),
    fontSize9: new Typograph({ fontSize: 36, color: Color.rgba(51, 51, 51, 1), font: designFonts.Montserrat.Bold }),
    fontSize8: new Typograph({ fontSize: 32, color: Color.rgba(51, 51, 51, 1), font: designFonts.Inter.Medium }),
    fontSize7: new Typograph({ fontSize: 24, color: Color.rgba(51, 51, 51, 1), font: designFonts.Inter.SemiBold }),
    fontSize4: new Typograph({ fontSize: 16, color: Color.rgba(51, 51, 51, 1), font: designFonts.Inter.Regular }),
    fontSize3: new Typograph({ fontSize: 14, color: Color.rgba(51, 51, 51, 1), font: designFonts.Inter.SemiBold }),
    fontSize2: new Typograph({ fontSize: 12, color: Color.rgba(51, 51, 51, 1), font: designFonts.Inter.Medium }),
    fontSize1: new Typograph({ fontSize: 10, color: Color.rgba(51, 51, 51, 1), font: designFonts.Inter.Regular }),
    fontSize12: new Typograph({ fontSize: 96, color: Color.rgba(51, 51, 51, 1), font: designFonts.Montserrat.SemiBold }),
    fontSize11: new Typograph({ fontSize: 64, color: Color.rgba(51, 51, 51, 1), font: designFonts.Montserrat.Bold }),
    fontSize6: new Typograph({ fontSize: 20, color: Color.rgba(51, 51, 51, 1), font: designFonts.Inter.Medium }),
    fontSize5: new Typograph({ fontSize: 18, color: Color.rgba(51, 51, 51, 1), font: designFonts.Inter.Bold })
};

export const designComponentsFiles = {
    iconTest: new File({ src: "assets/Design.figma.contents/components/IconTest.png" }),
    iconTest2x: new File({ src: "assets/Design.figma.contents/components/IconTest@2x.png" }),
    iconTest3x: new File({ src: "assets/Design.figma.contents/components/IconTest@3x.png" }),
    iconTest4x: new File({ src: "assets/Design.figma.contents/components/IconTest@4x.png" }),
    iconStudent: new File({ src: "assets/Design.figma.contents/components/IconStudent.png" }),
    iconStudent2x: new File({ src: "assets/Design.figma.contents/components/IconStudent@2x.png" }),
    iconStudent3x: new File({ src: "assets/Design.figma.contents/components/IconStudent@3x.png" }),
    iconStudent4x: new File({ src: "assets/Design.figma.contents/components/IconStudent@4x.png" }),
    iconPerson: new File({ src: "assets/Design.figma.contents/components/IconPerson.png" }),
    iconPerson2x: new File({ src: "assets/Design.figma.contents/components/IconPerson@2x.png" }),
    iconPerson3x: new File({ src: "assets/Design.figma.contents/components/IconPerson@3x.png" }),
    iconPerson4x: new File({ src: "assets/Design.figma.contents/components/IconPerson@4x.png" }),
    iconDiagram: new File({ src: "assets/Design.figma.contents/components/IconDiagram.png" }),
    iconDiagram2x: new File({ src: "assets/Design.figma.contents/components/IconDiagram@2x.png" }),
    iconDiagram3x: new File({ src: "assets/Design.figma.contents/components/IconDiagram@3x.png" }),
    iconDiagram4x: new File({ src: "assets/Design.figma.contents/components/IconDiagram@4x.png" }),
    iconSettings: new File({ src: "assets/Design.figma.contents/components/IconSettings.png" }),
    iconSettings2x: new File({ src: "assets/Design.figma.contents/components/IconSettings@2x.png" }),
    iconSettings3x: new File({ src: "assets/Design.figma.contents/components/IconSettings@3x.png" }),
    iconSettings4x: new File({ src: "assets/Design.figma.contents/components/IconSettings@4x.png" }),
    iconFilter: new File({ src: "assets/Design.figma.contents/components/IconFilter.png" }),
    iconFilter2x: new File({ src: "assets/Design.figma.contents/components/IconFilter@2x.png" }),
    iconFilter3x: new File({ src: "assets/Design.figma.contents/components/IconFilter@3x.png" }),
    iconFilter4x: new File({ src: "assets/Design.figma.contents/components/IconFilter@4x.png" }),
    iconHelp: new File({ src: "assets/Design.figma.contents/components/IconHelp.png" }),
    iconHelp2x: new File({ src: "assets/Design.figma.contents/components/IconHelp@2x.png" }),
    iconHelp3x: new File({ src: "assets/Design.figma.contents/components/IconHelp@3x.png" }),
    iconHelp4x: new File({ src: "assets/Design.figma.contents/components/IconHelp@4x.png" }),
    iconWarning: new File({ src: "assets/Design.figma.contents/components/IconWarning.png" }),
    iconWarning2x: new File({ src: "assets/Design.figma.contents/components/IconWarning@2x.png" }),
    iconWarning3x: new File({ src: "assets/Design.figma.contents/components/IconWarning@3x.png" }),
    iconWarning4x: new File({ src: "assets/Design.figma.contents/components/IconWarning@4x.png" }),
    iconSearch: new File({ src: "assets/Design.figma.contents/components/IconSearch.png" }),
    iconSearch2x: new File({ src: "assets/Design.figma.contents/components/IconSearch@2x.png" }),
    iconSearch3x: new File({ src: "assets/Design.figma.contents/components/IconSearch@3x.png" }),
    iconSearch4x: new File({ src: "assets/Design.figma.contents/components/IconSearch@4x.png" }),
    iconDownload: new File({ src: "assets/Design.figma.contents/components/IconDownload.png" }),
    iconDownload2x: new File({ src: "assets/Design.figma.contents/components/IconDownload@2x.png" }),
    iconDownload3x: new File({ src: "assets/Design.figma.contents/components/IconDownload@3x.png" }),
    iconDownload4x: new File({ src: "assets/Design.figma.contents/components/IconDownload@4x.png" }),
    iconListSize: new File({ src: "assets/Design.figma.contents/components/IconListSize.png" }),
    iconListSize2x: new File({ src: "assets/Design.figma.contents/components/IconListSize@2x.png" }),
    iconListSize3x: new File({ src: "assets/Design.figma.contents/components/IconListSize@3x.png" }),
    iconListSize4x: new File({ src: "assets/Design.figma.contents/components/IconListSize@4x.png" }),
    iconNext: new File({ src: "assets/Design.figma.contents/components/IconNext.png" }),
    iconNext2x: new File({ src: "assets/Design.figma.contents/components/IconNext@2x.png" }),
    iconNext3x: new File({ src: "assets/Design.figma.contents/components/IconNext@3x.png" }),
    iconNext4x: new File({ src: "assets/Design.figma.contents/components/IconNext@4x.png" })
};

export const designComponents = {
    iconTest: Image.responsive("assets/Design.figma.contents/components/IconTest.png", 24, 24),
    iconStudent: Image.responsive("assets/Design.figma.contents/components/IconStudent.png", 24, 24),
    iconPerson: Image.responsive("assets/Design.figma.contents/components/IconPerson.png", 24, 24),
    iconDiagram: Image.responsive("assets/Design.figma.contents/components/IconDiagram.png", 24, 24),
    iconSettings: Image.responsive("assets/Design.figma.contents/components/IconSettings.png", 24, 24),
    iconFilter: Image.responsive("assets/Design.figma.contents/components/IconFilter.png", 24, 24),
    iconHelp: Image.responsive("assets/Design.figma.contents/components/IconHelp.png", 24, 24),
    iconWarning: Image.responsive("assets/Design.figma.contents/components/IconWarning.png", 24, 24),
    iconSearch: Image.responsive("assets/Design.figma.contents/components/IconSearch.png", 24, 24),
    iconDownload: Image.responsive("assets/Design.figma.contents/components/IconDownload.png", 24, 24),
    iconListSize: Image.responsive("assets/Design.figma.contents/components/IconListSize.png", 24, 24),
    iconNext: Image.responsive("assets/Design.figma.contents/components/IconNext.png", 24, 24)
};

export const designTokens = {
    colors: designColors,
    shadows: designShadows,
    typography: designTypography
};
