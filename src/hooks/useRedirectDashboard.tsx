import React, { useMemo } from "react";
import ConvertedMenu from "../components/ConvertedMenu";
import GeneralMenu from "../components/GeneralMenu";
import TextMenu from "../components/TextMenu";
import Chart from "../components/ChartBar";
import { IParsedData } from "../types/parser.types";

export const useRedirectDashboard = (
  currentStep: number,
  parsedData?: IParsedData | null,
  content?: string | null,
  isFullPack?: boolean
) => {
  return useMemo(() => {
    switch (currentStep) {
      case 0:
        return (
          <TextMenu
            textData={content as string}
            parsedData={(parsedData as IParsedData).data}
            isFullPack={isFullPack}
          />
        );
      case 1:
        return <GeneralMenu parsedData={(parsedData as IParsedData).data} />;
      case 2:
        return <ConvertedMenu parsedData={parsedData as IParsedData} />;
      case 3:
        return <Chart parsedData={parsedData as IParsedData} />;
      default:
        return (
          <TextMenu
            textData={content as string}
            parsedData={(parsedData as IParsedData).data}
            isFullPack={isFullPack}
          />
        );
    }
  }, [currentStep]);
};
